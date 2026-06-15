# Development Phases

## Phase 1. Notion Analysis

### Agent

```text
Notion Analysis Agent
```

### Command

```bash
./scripts/cmux-phase-runner.sh phase1
```

### Done 조건

```text
docs/notion-content-extraction.md 작성
docs/portfolio-content.md 작성
docs/agent-status.md에서 Notion Analysis Agent = Done
```

---

## Phase 2. Planning

### Agent

```text
Planning Agent
```

### Command

```bash
./scripts/cmux-phase-runner.sh phase2
```

### Done 조건

```text
docs/site-map.md 작성
docs/page-spec.md 작성
docs/component-spec.md 작성
docs/next-app-design.md 작성
docs/supabase-design.md 작성
docs/agent-status.md에서 Planning Agent = Done
```

---

## Phase 3. Development

### Agents

```text
Next.js App Agent
Supabase Agent
```

### Command

```bash
./scripts/cmux-phase-runner.sh phase3
```

### Done 조건

```text
Next.js App Agent = Done
Supabase Agent = Done
docs/agent-handoff.md 업데이트
```

---

## Phase 4. QA/Security

### Agent

```text
QA-Security Agent
```

### Command

```bash
./scripts/cmux-phase-runner.sh phase4
```

### Done 조건

```text
docs/qa-report.md 작성
docs/security-report.md 작성
Critical 이슈 없음
```

---

## Phase 5. Release Review

### Agent

```text
Release-Review Agent
```

### Command

```bash
./scripts/cmux-phase-runner.sh phase5
```

### Done 조건

```text
docs/release-checklist.md 작성
docs/rollback-plan.md 작성
docs/pr-summary.md 작성
최종 병합 가능 여부 판단
```
