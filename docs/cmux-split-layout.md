# cmux Split Layout

## 목적

이 문서는 cmux에서 phase별로 하나의 workspace 안에 여러 pane을 열어 Agent를 실행하는 방식을 정의한다.

## Phase 1

```text
phase1-notion-analysis
└─ Notion Analysis Agent
```

## Phase 2

```text
phase2-planning
└─ Planning Agent
```

## Phase 3

```text
phase3-development
├─ left: Next.js App Agent
├─ right-top: Supabase Agent
└─ right-bottom: dev/log terminal
```

## Phase 4

```text
phase4-qa-security
├─ left: QA-Security Agent
└─ right: validation terminal
```

## Phase 5

```text
phase5-release-review
├─ left: Release-Review Agent
└─ right: git/release terminal
```

## 실행

```bash
./scripts/cmux-split-runner.sh phase3
```

## 주의

cmux의 focus 동작 때문에 pane이 다른 위치에 열릴 수 있다.  
그럴 경우 수동으로 pane 위치를 조정하거나, `cmux tree`로 workspace/pane 상태를 확인한다.
