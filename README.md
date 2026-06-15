# cmux Split Pane Phase Runner

## 목적

이 스크립트 세트는 cmux에서 여러 workspace를 따로 여는 방식이 아니라, **하나의 workspace 안에 여러 terminal pane을 split으로 열어 Agent를 실행**하기 위한 구성입니다.

## 원하는 화면 구조

### Phase 1

```text
phase1-notion-analysis
└─ Notion Analysis Agent
```

### Phase 2

```text
phase2-planning
└─ Planning Agent
```

### Phase 3

```text
phase3-development
├─ left: Next.js App Agent
├─ right-top: Supabase Agent
└─ right-bottom: npm run dev / logs
```

### Phase 4

```text
phase4-qa-security
├─ left: QA-Security Agent
└─ right: npm run lint / npm run build / git diff
```

### Phase 5

```text
phase5-release-review
├─ left: Release-Review Agent
└─ right: git status / release checklist
```

## 사용법

프로젝트 루트에서 실행합니다.

```bash
chmod +x scripts/*.sh

./scripts/cmux-split-runner.sh phase1
./scripts/cmux-split-runner.sh phase2
./scripts/cmux-split-runner.sh phase3
./scripts/cmux-split-runner.sh phase4
./scripts/cmux-split-runner.sh phase5
```

## 주의

cmux CLI는 버전에 따라 focus 동작이 다를 수 있습니다.  
이 스크립트는 `cmux new-workspace`, `cmux new-pane`, `cmux send`, `cmux send-key`를 사용합니다.
