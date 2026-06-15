#!/usr/bin/env bash
set -euo pipefail

# cmux-split-runner.sh
#
# Goal:
# - Open cmux workspace with multiple split panes like:
#   left: Codex Agent
#   right-top: Codex Agent or terminal
#   right-bottom: dev/log terminal
#
# Usage:
#   ./scripts/cmux-split-runner.sh phase1
#   ./scripts/cmux-split-runner.sh phase2
#   ./scripts/cmux-split-runner.sh phase3
#   ./scripts/cmux-split-runner.sh phase4
#   ./scripts/cmux-split-runner.sh phase5
#
# Env:
#   PROJECT_DIR=/absolute/path/to/project
#   CODEX_CMD=codex

PROJECT_DIR="${PROJECT_DIR:-$(pwd)}"
CODEX_CMD="${CODEX_CMD:-codex}"
SLEEP_SHORT="${SLEEP_SHORT:-0.8}"
SLEEP_CODEX="${SLEEP_CODEX:-2}"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "ERROR: '$1' command not found."
    exit 1
  fi
}

ensure_project_root() {
  if [ ! -f "$PROJECT_DIR/AGENTS.md" ]; then
    echo "ERROR: AGENTS.md not found in PROJECT_DIR: $PROJECT_DIR"
    echo "Run from project root or set PROJECT_DIR=/path/to/project"
    exit 1
  fi
}

send_line() {
  local text="$1"
  cmux send "$text"
  cmux send-key enter
}

start_codex_with_prompt() {
  local agent_title="$1"
  local agent_file="$2"

  send_line "cd \"$PROJECT_DIR\""
  send_line "$CODEX_CMD"
  sleep "$SLEEP_CODEX"

  send_line "너는 ${agent_title}다. docs/agents/${agent_file} 내용을 먼저 읽고 그대로 수행해줘. 작업 시작 전 docs/agent-status.md, docs/agent-handoff.md, docs/agent-messages.md, docs/open-questions.md를 반드시 확인하고, 작업 후 진행상황과 전달사항을 업데이트해줘."
}

start_terminal_command() {
  local command="$1"

  send_line "cd \"$PROJECT_DIR\""
  send_line "$command"
}

new_workspace_with_codex() {
  local workspace_name="$1"
  local agent_title="$2"
  local agent_file="$3"

  cmux new-workspace --name "$workspace_name" --cwd "$PROJECT_DIR"
  sleep "$SLEEP_SHORT"

  start_codex_with_prompt "$agent_title" "$agent_file"
}

run_phase1() {
  new_workspace_with_codex "phase1-notion-analysis" "Notion Analysis Agent" "notion-analysis-agent.md"
}

run_phase2() {
  new_workspace_with_codex "phase2-planning" "Planning Agent" "planning-agent.md"
}

run_phase3() {
  # Layout:
  # left: Next.js App Agent
  # right-top: Supabase Agent
  # right-bottom: npm run dev/log terminal

  cmux new-workspace --name "phase3-development" --cwd "$PROJECT_DIR"
  sleep "$SLEEP_SHORT"

  # Left pane: Next.js App Agent
  start_codex_with_prompt "Next.js App Agent" "nextjs-app-agent.md"

  # Right pane: Supabase Agent
  cmux new-pane --direction right --focus true
  sleep "$SLEEP_SHORT"
  start_codex_with_prompt "Supabase Agent" "supabase-agent.md"

  # Bottom pane from current right pane: dev/log terminal
  cmux new-pane --direction down --focus true
  sleep "$SLEEP_SHORT"
  start_terminal_command "echo 'Phase 3 dev/log pane'; echo '추천: npm run dev 또는 git status'; git status"
}

run_phase4() {
  # Layout:
  # left: QA-Security Agent
  # right: validation commands

  cmux new-workspace --name "phase4-qa-security" --cwd "$PROJECT_DIR"
  sleep "$SLEEP_SHORT"

  start_codex_with_prompt "QA-Security Agent" "qa-security-agent.md"

  cmux new-pane --direction right --focus true
  sleep "$SLEEP_SHORT"
  start_terminal_command "echo 'QA validation pane'; echo 'Run checks manually if needed:'; echo 'npm run lint && npm run build'; git status"
}

run_phase5() {
  # Layout:
  # left: Release-Review Agent
  # right: git/release check terminal

  cmux new-workspace --name "phase5-release-review" --cwd "$PROJECT_DIR"
  sleep "$SLEEP_SHORT"

  start_codex_with_prompt "Release-Review Agent" "release-review-agent.md"

  cmux new-pane --direction right --focus true
  sleep "$SLEEP_SHORT"
  start_terminal_command "echo 'Release review pane'; git status; echo ''; echo 'Check docs/release-checklist.md and docs/pr-summary.md'"
}

print_usage() {
  cat <<'USAGE'
Usage:
  ./scripts/cmux-split-runner.sh phase1
  ./scripts/cmux-split-runner.sh phase2
  ./scripts/cmux-split-runner.sh phase3
  ./scripts/cmux-split-runner.sh phase4
  ./scripts/cmux-split-runner.sh phase5

Recommended:
  phase1: Notion Analysis Agent
  phase2: Planning Agent
  phase3: Next.js App Agent + Supabase Agent + dev/log pane
  phase4: QA-Security Agent + validation pane
  phase5: Release-Review Agent + git/release pane
USAGE
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
    *)
      print_usage
      exit 1
      ;;
  esac
}

main "$@"
