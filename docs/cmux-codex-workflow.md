# cmux + Codex CLI Workflow

## 실행 위치

```bash
cd 프로젝트루트
codex
```

## 추천 workspace

```text
01-notion-analysis
02-planning
03-nextjs-app
04-supabase
05-qa-security
06-release-review
07-run-logs
```

## 자동 실행

```bash
./scripts/cmux-phase-runner.sh phase1
./scripts/cmux-phase-runner.sh phase2
./scripts/cmux-phase-runner.sh phase3
./scripts/cmux-phase-runner.sh phase4
./scripts/cmux-phase-runner.sh phase5
```

## 실행 순서

```text
1. docs/notion-source.md에 Notion 내용 붙여넣기
2. Phase 1 실행
3. Phase 1 결과 확인
4. Phase 2 실행
5. Phase 2 결과 확인
6. Phase 3 병렬 실행
7. QA/Security 실행
8. Release Review 실행
```
