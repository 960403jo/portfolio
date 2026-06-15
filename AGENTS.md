# AGENTS.md

## 목적

이 문서는 Notion 원본을 기준으로 Next.js + Supabase 포트폴리오 웹페이지를 개발하기 위한 Agent 공통 규칙입니다.

## 원본 기준

```text
Notion 원본 URL:
https://app.notion.com/p/2d60ad70a54b80849c23e37dd954eef5
```

## 개발 구조

```text
Notion Analysis Agent
↓
Planning Agent
↓
Next.js App Agent / Supabase Agent 병렬 개발
↓
QA-Security Agent
↓
Release-Review Agent
↓
Human Tech Lead 최종 병합
```

## 공통 원칙

1. 포트폴리오 내용은 `docs/notion-source.md`를 최우선 기준으로 한다.
2. `docs/notion-source.md`에 없는 경력, 성과, 수치, 링크는 임의로 만들지 않는다.
3. 부족한 내용은 `docs/open-questions.md`에 기록한다.
4. 모든 Agent는 작업 시작 전 `docs/agent-status.md`, `docs/agent-handoff.md`, `docs/agent-messages.md`, `docs/open-questions.md`를 확인한다.
5. Agent 간 전달사항은 `docs/agent-handoff.md`에 기록한다.
6. Agent 간 대화형 기록은 `docs/agent-messages.md`에 기록한다.
7. 작업 완료 시 `docs/agent-status.md`의 본인 상태를 업데이트한다.
8. Supabase service role key는 클라이언트에 절대 노출하지 않는다.
9. Next.js 소스는 `app/`, `src/` 하위에 작성한다.
10. Supabase 관련 변경은 `supabase/` 하위에 작성한다.
11. 최종 병합은 Human Tech Lead가 수행한다.

## Agent별 수정 가능 범위

### Notion Analysis Agent

수정 가능:

```text
docs/notion-content-extraction.md
docs/portfolio-content.md
docs/open-questions.md
docs/agent-status.md
docs/agent-handoff.md
docs/agent-messages.md
```

수정 금지:

```text
app/**
src/**
supabase/**
```

### Planning Agent

수정 가능:

```text
docs/**
```

수정 금지:

```text
app/**
src/**
supabase/**
```

### Next.js App Agent

수정 가능:

```text
app/**
src/**
public/**
docs/nextjs-notes.md
docs/agent-status.md
docs/agent-handoff.md
docs/agent-messages.md
```

수정 금지:

```text
supabase/migrations/**
docs/notion-source.md
docs/portfolio-content.md
```

### Supabase Agent

수정 가능:

```text
supabase/**
docs/supabase-design.md
docs/rollback-plan.md
docs/supabase-notes.md
docs/agent-status.md
docs/agent-handoff.md
docs/agent-messages.md
```

수정 금지:

```text
app/**
src/**
docs/notion-source.md
```

### QA-Security Agent

수정 가능:

```text
docs/qa-report.md
docs/security-report.md
docs/test-scenarios.md
docs/qa-checklist.md
docs/security-checklist.md
docs/agent-status.md
docs/agent-handoff.md
docs/agent-messages.md
```

수정 금지:

```text
app/**
src/**
supabase/**
docs/notion-source.md
```

### Release-Review Agent

수정 가능:

```text
docs/release-checklist.md
docs/rollback-plan.md
docs/review-report.md
docs/pr-summary.md
docs/agent-status.md
docs/agent-handoff.md
docs/agent-messages.md
```

수정 금지:

```text
app/**
src/**
supabase/**
docs/notion-source.md
```

## Codex 실행 위치

항상 프로젝트 루트에서 실행한다.

```bash
cd portfolio
codex
```

## cmux 자동 실행

```bash
./scripts/cmux-phase-runner.sh phase1
./scripts/cmux-phase-runner.sh phase2
./scripts/cmux-phase-runner.sh phase3
./scripts/cmux-phase-runner.sh phase4
./scripts/cmux-phase-runner.sh phase5
```
