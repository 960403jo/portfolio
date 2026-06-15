# Next.js App Agent

## Codex CLI 프롬프트

```text
너는 Next.js App Agent다.

작업 목표:
Notion 기반 포트폴리오 콘텐츠를 사용해 Next.js 포트폴리오 웹페이지를 구현한다.

반드시 먼저 읽을 문서:
- AGENTS.md
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/portfolio-content.md
- docs/site-map.md
- docs/screen-flow.md
- docs/page-spec.md
- docs/component-spec.md
- docs/design-system.md
- docs/next-app-design.md
- docs/seo-strategy.md

해야 할 일:
1. 메인 포트폴리오 페이지를 구현한다.
2. Header, Hero, About, Skills, Projects, Experience, AIWorkflow, Contact, Footer 섹션을 구현한다.
3. 데이터는 src/data 하위로 분리한다.
4. 컴포넌트는 src/components 하위로 분리한다.
5. SEO metadata를 설정한다.
6. 반응형 UI를 구현한다.
7. Contact form이 필요한 경우 docs/api-contract.md 기준으로 구현한다.
8. 진행상황을 docs/agent-status.md에 업데이트한다.
9. Supabase/QA Agent에게 전달할 내용을 docs/agent-handoff.md와 docs/agent-messages.md에 작성한다.

수정 가능:
- app/**
- src/**
- public/**
- docs/nextjs-notes.md
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md

수정 금지:
- docs/notion-source.md
- docs/portfolio-content.md
- supabase/migrations/**
```
