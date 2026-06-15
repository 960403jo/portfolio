#!/usr/bin/env bash
set -euo pipefail

# cmux-phase-runner.sh
#
# Usage:
#   ./scripts/cmux-phase-runner.sh phase1
#   ./scripts/cmux-phase-runner.sh phase2
#   ./scripts/cmux-phase-runner.sh phase3
#   ./scripts/cmux-phase-runner.sh phase4
#   ./scripts/cmux-phase-runner.sh phase5
#   ./scripts/cmux-phase-runner.sh all
#
# Environment:
#   PROJECT_DIR=/absolute/path/to/portfolio
#   CODEX_CMD=codex
#
# Notes:
# - Run this from the project root, or set PROJECT_DIR.
# - This script creates cmux workspaces and sends commands to start Codex.
# - Some cmux versions may require focused workspace input. If send-surface is available,
#   adapt the helper function to target a specific surface id.

PROJECT_DIR="${PROJECT_DIR:-$(pwd)}"
CODEX_CMD="${CODEX_CMD:-codex}"
SLEEP_AFTER_WORKSPACE="${SLEEP_AFTER_WORKSPACE:-1}"
SLEEP_AFTER_CODEX="${SLEEP_AFTER_CODEX:-2}"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "ERROR: '$1' command not found."
    echo "Install or configure it first."
    exit 1
  fi
}

ensure_project_root() {
  if [ ! -f "$PROJECT_DIR/AGENTS.md" ]; then
    echo "ERROR: AGENTS.md not found in PROJECT_DIR: $PROJECT_DIR"
    echo "Run from project root or set PROJECT_DIR=/path/to/project"
    exit 1
  fi

  if [ ! -d "$PROJECT_DIR/docs/agents" ]; then
    echo "ERROR: docs/agents not found in PROJECT_DIR: $PROJECT_DIR"
    exit 1
  fi
}

cmux_send_line() {
  local text="$1"

  # Generic cmux CLI path.
  # If your cmux version supports send-surface with surface id,
  # you can replace this with a targeted send.
  cmux send "$text"
  cmux send-key enter
}

cmux_new_agent_workspace() {
  local workspace_name="$1"
  local agent_file="$2"
  local agent_title="$3"

  echo "Creating cmux workspace: $workspace_name"

  cmux new-workspace
  sleep "$SLEEP_AFTER_WORKSPACE"

  cmux_send_line "cd \"$PROJECT_DIR\""
  cmux_send_line "$CODEX_CMD"
  sleep "$SLEEP_AFTER_CODEX"

  cmux_send_line "너는 ${agent_title}다. docs/agents/${agent_file} 내용을 먼저 읽고 그대로 수행해줘. 작업 시작 전 docs/agent-status.md, docs/agent-handoff.md, docs/agent-messages.md, docs/open-questions.md를 반드시 확인하고, 작업 후 진행상황과 전달사항을 업데이트해줘."

  # Optional status/log. Ignore if command flags differ.
  cmux set-status "$workspace_name" "running" --icon bot --color "#2563eb" >/dev/null 2>&1 || true
  cmux log --level progress --source "$workspace_name" "$workspace_name started" >/dev/null 2>&1 || true

  echo "Started: $workspace_name"
}

run_phase1() {
  cmux_new_agent_workspace "phase1-notion-analysis" "notion-analysis-agent.md" "Notion Analysis Agent"
}

run_phase2() {
  cmux_new_agent_workspace "phase2-planning" "planning-agent.md" "Planning Agent"
}

run_phase3() {
  cmux_new_agent_workspace "phase3-nextjs-app" "nextjs-app-agent.md" "Next.js App Agent"
  cmux_new_agent_workspace "phase3-supabase" "supabase-agent.md" "Supabase Agent"
}

run_phase4() {
  cmux_new_agent_workspace "phase4-qa-security" "qa-security-agent.md" "QA-Security Agent"
}

run_phase5() {
  cmux_new_agent_workspace "phase5-release-review" "release-review-agent.md" "Release-Review Agent"
}

print_usage() {
  cat <<'USAGE'
Usage:
  ./scripts/cmux-phase-runner.sh phase1
  ./scripts/cmux-phase-runner.sh phase2
  ./scripts/cmux-phase-runner.sh phase3
  ./scripts/cmux-phase-runner.sh phase4
  ./scripts/cmux-phase-runner.sh phase5
  ./scripts/cmux-phase-runner.sh all
  ./scripts/cmux-phase-runner.sh status

Phase:
  phase1  Notion Analysis Agent
  phase2  Planning Agent
  phase3  Next.js App Agent + Supabase Agent
  phase4  QA-Security Agent
  phase5  Release-Review Agent
USAGE
}

show_status() {
  echo "PROJECT_DIR=$PROJECT_DIR"
  echo
  if [ -f "$PROJECT_DIR/docs/agent-status.md" ]; then
    sed -n '1,160p' "$PROJECT_DIR/docs/agent-status.md"
  else
    echo "docs/agent-status.md not found."
  fi
}

main() {
  require_command cmux
  require_command "$CODEX_CMD"
  ensure_project_root

  case "${1:-}" in
    phase1)
      run_phase1
      ;;
    phase2)
      run_phase2
      ;;
    phase3)
      run_phase3
      ;;
    phase4)
      run_phase4
      ;;
    phase5)
      run_phase5
      ;;
    all)
      run_phase1
      echo "Phase 1 started. Review result before relying on later phases."
      run_phase2
      echo "Phase 2 started. Review result before relying on phase 3."
      run_phase3
      echo "Phase 3 started. Review result before phase 4."
      run_phase4
      echo "Phase 4 started. Review result before phase 5."
      run_phase5
      ;;
    status)
      show_status
      ;;
    *)
      print_usage
      exit 1
      ;;
  esac
}

main "$@"
