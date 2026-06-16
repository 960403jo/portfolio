# Agent Messages

## 목적

Agent 간 대화형 메시지를 기록한다.

## 작성 규칙

```md
## YYYY-MM-DD HH:mm - Sender Agent → Receiver Agent

### Message

```text
내용
```

### Related Files

```text
- 
```

### Requested Action

```text
- 
```
```

---

## Messages

### Example - Next.js App Agent → Supabase Agent

```text
Contact form 구현 중입니다.
contact_inquiries 테이블 컬럼과 RLS 정책 확정이 필요합니다.
필요 컬럼은 name, email, message, created_at입니다.
```

### Example - Supabase Agent → Next.js App Agent

```text
contact_inquiries migration 작성 완료했습니다.
anon insert만 허용했고 select/update/delete는 차단했습니다.
supabase/migrations/0001_create_contact_inquiries.sql 확인해주세요.
```

## 2026-06-11 16:16 - Next.js App Agent → QA-Security Agent

### Message

```text
포트폴리오 UI를 Controlled Liquid Tech 스타일로 전환했습니다.
큰 섹션 타이틀은 화면에서 숨기고 badge/description 중심으로 정리했습니다.
Contact는 Footer로 이동했고, Back to top은 우측 하단 fixed 원형 화살표 버튼으로 구현했습니다.
GraphQL, Feature-Sliced Design, FSD 화면 표기는 제거했습니다.
각 프로젝트에 원본 기반 KPI 3개를 추가하고, 메인 카드와 상세 페이지에 표시했습니다.
npm run lint, npm run build, Chromium 모바일/데스크톱 검증을 통과했습니다.
```

### Related Files

```text
- app/page.tsx
- app/globals.css
- app/projects/[slug]/page.tsx
- src/components/layout/Footer.tsx
- src/components/sections/AIWorkflowSection.tsx
- src/components/project/ProjectCard.tsx
- src/components/ui/SectionHeader.tsx
- src/data/portfolio.ts
- src/types/portfolio.ts
```

### Requested Action

```text
- KPI가 원본 기반 역할/구현/기술 포인트인지 확인해주세요.
- 모바일 360px/390px에서 Footer contact와 floating top 버튼이 콘텐츠를 가리지 않는지 확인해주세요.
- GraphQL/FSD 표기가 화면에 노출되지 않는지 확인해주세요.
```

## 2026-06-11 16:37 - Next.js App Agent → QA-Security Agent

### Message

```text
Footer를 간략한 copyright + email bar로 정리했습니다.
프로젝트 더보기는 펼친 뒤 더보기 버튼 영역이 사라지고, 목록 마지막에 접기 버튼만 남도록 client state 구조로 변경했습니다.
Hero Domain/Core/Workflow 문구는 산업군 나열 대신 Operational Web App, Mission-Critical UX, AI-assisted Delivery 중심으로 수정했습니다.
Ownership 문구는 특정 프로젝트 2개에 한정되지 않도록 주요 프로젝트 전반의 메인 개발자 역할로 정리했습니다.
SPA 화면 표기는 제거했습니다.
npm run lint, npm run build, Chromium 데스크톱/모바일 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/layout/Footer.tsx
- src/components/sections/AboutSection.tsx
- src/components/sections/AIWorkflowSection.tsx
- src/components/sections/ProjectsSection.tsx
- src/data/portfolio.ts
```

### Requested Action

```text
- 더보기 펼침 상태에서 더보기 버튼이 보이지 않고 마지막 접기 버튼만 보이는지 확인해주세요.
- Footer가 모바일에서 지나치게 커지거나 floating top 버튼과 겹치지 않는지 확인해주세요.
- SPA, 기존 Domain/Core 문구, 특정 2개 프로젝트 한정 Ownership 문구가 화면에 다시 노출되지 않는지 확인해주세요.
```

## 2026-06-11 16:50 - Next.js App Agent → QA-Security Agent

### Message

```text
기존 초록 계열이 지나치게 톤다운되어 보여서 green palette를 electric teal + lime accent 중심으로 선명하게 조정했습니다.
Hero, header active nav, brand mark, primary CTA, project cards, KPI chip, detail page, floating top button에 변경된 색상 토큰을 반영했습니다.
npm run lint, npm run build, Chromium desktop/mobile 검증을 통과했고 390px 모바일 수평 오버플로는 없습니다.
```

### Related Files

```text
- app/globals.css
```

### Requested Action

```text
- 변경된 electric teal + lime accent가 텍스트 가독성과 대비를 해치지 않는지 확인해주세요.
- hero/projects/mobile 색감이 과도하게 네온처럼 보이지 않는지 확인해주세요.
```

## 2026-06-11 17:08 - Next.js App Agent → QA-Security Agent

### Message

```text
디자인이 여전히 딱딱해 보여 hero dossier를 하나의 박스에서 분리형 liquid cell 구조로 바꿨습니다.
섹션에는 flowing band를 추가했고 About/Skills/Projects/Timeline 카드에는 staggered layout과 accent rail을 적용했습니다.
대표 프로젝트 4개는 균등 2열 대신 12-column 비대칭 case-study 배치로 변경했습니다.
모바일에서는 stagger를 reset하고, 한글 줄바꿈 품질을 위해 주요 텍스트에 word-break keep-all을 적용했습니다.
cmux split runner phase3 실행 후 작업했으며 npm run lint, npm run build, Chromium desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
```

### Requested Action

```text
- Desktop에서 staggered grid와 비대칭 프로젝트 배치가 콘텐츠 겹침 없이 보이는지 확인해주세요.
- Mobile 390px에서 stagger reset, H1 줄바꿈, floating top 버튼 겹침 여부를 확인해주세요.
- 변경된 liquid cell 구조가 접근성과 텍스트 가독성을 해치지 않는지 확인해주세요.
```

## 2026-06-11 17:21 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 세련미보다 접근성, 명확성, 읽기 쉬움을 우선하도록 디자인 톤을 재정리했습니다.
전체 palette는 warm orange/amber 계열로 전환했고, 배경 장식과 shadow 강도를 낮춰 텍스트 대비를 높였습니다.
hero dossier의 임의 좌우 stagger와 Skills/Developer signal의 임의 stagger를 제거해 읽기 기준선을 맞췄습니다.
대표 프로젝트의 12-column 비대칭 case-study 배치는 유지해 일관성을 해치지 않는 수준의 리듬만 남겼습니다.
focus-visible outline을 추가했고 npm run lint, npm run build, Chromium desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
```

### Requested Action

```text
- 주황빛 palette가 충분히 명확하고 읽기 쉬운지 확인해주세요.
- 키보드 focus-visible 상태와 텍스트 대비가 접근성 기준을 해치지 않는지 확인해주세요.
- 대표 프로젝트 비대칭 배치가 정보 탐색을 방해하지 않는지 확인해주세요.
```

## 2026-06-11 17:33 - Next.js App Agent → QA-Security Agent

### Message

```text
패널별 동일 색상 반복으로 지루해 보이는 문제를 줄이기 위해 controlled panel accent system을 적용했습니다.
전체 tone은 warm orange/amber로 유지하되 hero signal, developer card, skill panel, featured project card마다 orange/blue/sage/plum/amber 계열 보조 accent를 다르게 부여했습니다.
Hero headline은 이름 선노출을 제거하고 "복잡한 업무 화면을 쓰기 좋은 제품 흐름으로 만듭니다"로 완화했습니다.
프로젝트 상세 상단의 `Stack N items` 요약과 스킬 카드 번호 칩을 제거했습니다.
npm run lint, npm run build, Chromium desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- app/projects/[slug]/page.tsx
- src/components/sections/SkillsSection.tsx
- src/data/portfolio.ts
```

### Requested Action

```text
- 패널별 보조 accent가 반복감을 줄이면서도 산만하지 않은지 확인해주세요.
- Hero headline이 너무 딱딱하지 않고 포트폴리오 첫 문장으로 자연스러운지 확인해주세요.
- 프로젝트 상세와 스킬 섹션에 `Stack N items`, 스킬 번호 칩이 노출되지 않는지 확인해주세요.
```

## 2026-06-12 13:21 - Next.js App Agent → QA-Security Agent

### Message

```text
프로젝트 더보기 팝업의 `접기` 버튼을 우측 상단으로 이동하고, 하단 접기 버튼은 제거했습니다.
팝업 내부 프로젝트 카드 hover/focus 시 해당 카드가 패널 전체 폭을 채우며 KPI/tag 추가 정보가 드러나도록 조정했습니다.
깨져 보이던 Experience 타임라인은 기간 카드, 중앙 레일, 콘텐츠 카드가 분리된 구조로 재정렬했습니다.
모바일 Experience는 좌측 레일 + 상단 기간 pill + 콘텐츠 카드 구조로 변경해 날짜와 본문 겹침을 제거했습니다.
npm run lint, npm run build, Chrome desktop/mobile 렌더링 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/sections/ProjectsSection.tsx
```

### Requested Action

```text
- 더보기 팝업 우측 상단 `접기` 버튼 위치와 하단 접기 버튼 미노출을 확인해주세요.
- 팝업 카드 hover/focus 시 full-width 확장이 자연스럽고 텍스트가 잘리지 않는지 확인해주세요.
- Experience desktop/mobile 타임라인의 기간 레일, 기간 pill, 본문 카드 정렬이 깨지지 않는지 확인해주세요.
```

## 2026-06-12 13:34 - Next.js App Agent → QA-Security Agent

### Message

```text
프로젝트 카드 hover/focus 시 다른 카드에 가려지지 않도록 featured card z-index 6, popup card z-index 20과 grid isolation을 적용했습니다.
용인서울고속도로, 진주시, Lv4 대응 교통안전 인프라 표준 프로젝트 role을 Front End / Back End로 수정했습니다.
Skills에서 Version / Collaboration이 하단 단독 영역처럼 보이지 않도록 3열 skill grid 안에 나란히 배치했습니다.
Experience 원형 마커는 CSS 변수 기반으로 레일 중심과 기간 카드/pill 중심에 맞췄습니다.
Q&A 질문 문구를 `업무 진행 시 가장 중요한 포인트`로 변경했습니다.
대표 프로젝트 메인 카드에서는 성과 preview를 제거하고 상세 페이지의 `성과와 경험`은 유지했습니다.
npm run lint, npm run build, Chrome desktop/mobile 렌더링 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/project/ProjectCard.tsx
- src/data/portfolio.ts
```

### Requested Action

```text
- hover/focus 카드가 다른 카드에 가려지지 않는지 확인해주세요.
- 세 프로젝트 role이 Front End / Back End로 정확히 보이는지 확인해주세요.
- Skills 3열 배치와 Version / Collaboration 위치가 자연스러운지 확인해주세요.
- Experience 원형 마커가 데스크톱/모바일에서 레일 중심에 맞는지 확인해주세요.
- 대표 프로젝트 메인 카드에는 성과 preview가 없고 상세 페이지에만 성과가 남아있는지 확인해주세요.
```

## 2026-06-12 13:38 - Next.js App Agent → QA-Security Agent

### Message

```text
추가 프로젝트 패널의 hover 오류를 카드별로 테스트했습니다.
기존 grid-column full-width 방식은 오른쪽 열 카드 hover 시 카드 위치가 재배치되어 hover가 풀릴 수 있어, 위치 고정 overlay 확장 방식으로 변경했습니다.
왼쪽 열 카드는 오른쪽으로 확장하고, 오른쪽 열 카드는 translateX로 왼쪽으로 확장해 원래 hover 영역을 유지합니다.
추가 프로젝트 6개 카드 모두 hover 유지 true, z-index 20, scroll width 기준 전체 폭 확장, 좌우 overflow false, clipping 0건으로 확인했습니다.
모바일은 1열이라 hover 확장 폭을 비활성화해 수평 overflow 0건을 유지했습니다.
```

### Related Files

```text
- app/globals.css
```

### Requested Action

```text
- 추가 프로젝트 6개 카드 각각 hover 시 카드가 튀거나 다른 카드에 가려지지 않는지 확인해주세요.
- 오른쪽 열 카드 hover 시 위치가 풀리지 않는지 확인해주세요.
- 모바일 더보기 패널에서 수평 스크롤이 생기지 않는지 확인해주세요.
```

## 2026-06-12 13:46 - Next.js App Agent → QA-Security Agent

### Message

```text
상세 페이지의 `Notion 상세 원본` 외부 링크 버튼을 제거했습니다.
추가 프로젝트 왼쪽 카드도 오른쪽 카드와 동일한 동적 hover 느낌이 나도록 width/max-width/transform transition을 추가했습니다.
Skills는 Frontend를 왼쪽 대형 강조 카드로 두고 나머지 스킬을 오른쪽에 정렬했습니다.
화면 노출 `Experience` 표기는 `커리어`로 변경했습니다.
npm run lint, npm run build, Chrome desktop/mobile 렌더링 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- app/projects/[slug]/page.tsx
- src/components/sections/ExperienceSection.tsx
- src/data/portfolio.ts
```

### Requested Action

```text
- 상세 페이지에서 `Notion 상세 원본` 버튼이 보이지 않는지 확인해주세요.
- 추가 프로젝트 왼쪽/오른쪽 카드 hover 이펙트가 같은 톤으로 느껴지는지 확인해주세요.
- Skills에서 Frontend 대형 강조와 오른쪽 스킬 정렬이 자연스러운지 확인해주세요.
- nav와 섹션 badge에서 `Experience`가 아닌 `커리어`로 보이는지 확인해주세요.
```

## 2026-06-12 13:59 - Next.js App Agent → QA-Security Agent

### Message

```text
TASC 프로젝트(`/Volumes/Data/joinseong/000.source/005.TASC/tasc-platform`)의 하네스 방식을 확인해 AI Delivery 문구에 반영했습니다.
확인한 근거는 커스텀 ESLint harness plugin, 컴포넌트 매뉴얼의 이관 체크리스트, `lint`/`build`/`test:run`/e2e/env check 검증 흐름입니다.
AI Delivery는 컴포넌트 매뉴얼, 커스텀 lint rule, 테스트 명령을 하네스처럼 묶어 AI 초안을 실무 코드로 걸러내는 방식으로 재정리했습니다.
npm run lint, npm run build, Chrome desktop/mobile AI Delivery 렌더링 검증을 통과했습니다.
```

### Related Files

```text
- src/data/portfolio.ts
```

### Requested Action

```text
- AI Delivery 문구가 TASC 프로젝트의 실제 개발 하네스 방식으로 읽히는지 확인해주세요.
- `하네스`, `ESLint`, `test:run` 같은 표현이 면접관에게 과한 자동화 주장처럼 보이지 않는지 확인해주세요.
- 모바일에서 AI Delivery 영역이 길어져도 읽기 흐름이 괜찮은지 확인해주세요.
```

## 2026-06-11 17:53 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자가 제공한 Notion DB 링크에서 대표 프로젝트 5개의 `[주요 업무 및 성과]` 토글 내부까지 공개 API로 추출했습니다.
철도, 춘천 디지털 신분증, 군산-익산 BIS/BMS, Lv4 교통안전 인프라, 안양 자율주행 상세 페이지의 담당 업무/성과 bullet을 원문 기반으로 보강했습니다.
프로젝트별 sourceUrl을 추가해 상세 페이지의 Notion 상세 원본 버튼이 각 프로젝트 원본으로 이동하도록 변경했습니다.
메인 프로젝트 카드는 너무 길어지지 않도록 담당 업무 3개, 성과 2개까지만 preview하도록 조정했습니다.
npm run lint, npm run build, Chromium desktop/mobile 상세 페이지 검증을 통과했습니다.
```

### Related Files

```text
- app/projects/[slug]/page.tsx
- src/components/project/ProjectCard.tsx
- src/data/portfolio.ts
- src/types/portfolio.ts
```

### Requested Action

```text
- 대표 프로젝트 5개 상세 bullet이 Notion 원문 의미를 과장하지 않고 핵심만 정리했는지 확인해주세요.
- 상세 페이지 담당 업무/성과 목록이 너무 길거나 읽기 불편하지 않은지 확인해주세요.
- 메인 프로젝트 카드 preview와 상세 페이지 전체 목록의 정보량 균형을 확인해주세요.
```

## 2026-06-11 18:15 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 구식으로 보이던 디자인 질감을 다시 정리했습니다.
대각선 band, 반복 그라디언트 카드, 무거운 shadow를 제거하고 flat surface, 얇은 border, 명확한 orange accent 중심의 modern editorial 스타일로 변경했습니다.
Hero headline은 "운영의 맥락이 바로 읽히는 화면을 만듭니다"로 변경했습니다.
AI 섹션은 현재 포트폴리오 제작 Agent/cmux/handoff 설명이 아니라, 개인이 AI를 반복 UI 초안, 요구사항 정리, 검증 체크리스트에 활용하는 방식으로 다시 작성했습니다.
npm run lint, npm run build, Chrome desktop/mobile/project detail 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/data/portfolio.ts
- src/components/sections/AIWorkflowSection.tsx
```

### Requested Action

```text
- 변경된 modern warm orange 디자인이 접근성, 명확성, 읽기 쉬움을 해치지 않는지 확인해주세요.
- 대각선 배경/반복 그라디언트/무거운 shadow 제거 후에도 포트폴리오가 밋밋하지 않은지 확인해주세요.
- AI 섹션이 사용자의 실제 개발 활용 방식으로 읽히고 내부 Agent 운용 설명으로 오해되지 않는지 확인해주세요.
```

## 2026-06-12 09:47 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 메인 소개 화면의 문장량을 줄였습니다.
Hero headline은 "운영이 바로 읽히는 화면을 만듭니다"로 압축했고, 요약은 한 문장으로 줄였습니다.
Hero CTA는 대표 프로젝트/이메일 2개만 남겼고, 우측 소개 카드는 경력/역할/강점 3개 핵심 포인트만 표시하도록 변경했습니다.
About의 긴 소개 문단은 화면에서 제거했고, Developer Value는 3개 핵심 카드만 노출합니다.
npm run lint, npm run build, Chrome desktop/mobile concise intro 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/sections/HeroSection.tsx
- src/components/sections/AboutSection.tsx
- src/data/portfolio.ts
```

### Requested Action

```text
- Hero/About 소개가 충분히 짧아졌는지 확인해주세요.
- 문장량을 줄인 뒤에도 경력, 메인 개발 역할, 기술 강점이 명확하게 전달되는지 확인해주세요.
- 모바일 390px에서 CTA와 핵심 포인트 카드가 답답하게 보이지 않는지 확인해주세요.
```

## 2026-06-12 09:53 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 Hero headline을 "상태가 많은 화면을 명확한 흐름으로 바꿉니다"로 변경했습니다.
Hero badge는 "실무 프로젝트 기반"으로 변경해 Notion 직접 언급을 제거했습니다.
About, Skills, Projects, Experience, AI Delivery 섹션 헤더의 보조 설명 문구를 모두 제거했습니다.
npm run lint, npm run build, Chrome desktop copy cleanup 검증을 통과했고, section-header description은 0개로 확인했습니다.
```

### Related Files

```text
- src/data/portfolio.ts
- src/components/sections/AboutSection.tsx
- src/components/sections/SkillsSection.tsx
- src/components/sections/ProjectsSection.tsx
- src/components/sections/ExperienceSection.tsx
- src/components/sections/AIWorkflowSection.tsx
```

### Requested Action

```text
- Hero badge와 headline이 포트폴리오 첫 문장으로 자연스러운지 확인해주세요.
- 섹션 헤더 설명 제거 후에도 콘텐츠 탐색 흐름이 끊기지 않는지 확인해주세요.
```

## 2026-06-12 10:00 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 메인 화면의 설명형 문장 어미를 제거했습니다.
Hero headline은 "UI와 데이터 흐름을 잇는 프론트엔드"로 변경했고, Hero summary는 "React/TypeScript 기반 지도·관제·백오피스 UI"로 축약했습니다.
Hero 강점 value는 "상태·API 정리"에서 "화면 흐름 설계"로 변경했습니다.
About, Skills, Experience, AI Delivery에 남아 있던 `합니다/습니다/입니다` 계열 문구를 키워드/명사형 카피로 전환했습니다.
npm run lint, npm run build, Chrome 화면 검증을 통과했고 메인 화면 body text 기준 설명형 어미 0건을 확인했습니다.
```

### Related Files

```text
- app/layout.tsx
- src/data/portfolio.ts
- src/components/sections/ProjectsSection.tsx
- src/components/sections/ExperienceSection.tsx
```

### Requested Action

```text
- 명사형 카피 전환 후에도 개발자 강점과 프로젝트 탐색 흐름이 충분히 명확한지 확인해주세요.
- 모바일에서 축약 카피가 너무 추상적으로 보이지 않는지 확인해주세요.
```

## 2026-06-12 10:19 - Next.js App Agent → QA-Security Agent

### Message

```text
프로젝트 목록 구조를 하단 더보기/접기에서 우측 horizontal scroll rail로 변경했습니다.
전체 프로젝트 10개가 project rail에 노출되고, scroll-snap으로 우측으로 넘기는 구조입니다.
프로젝트 카드 하단 `상세 보기` 텍스트는 제거하고 상단 우측 ArrowUpRight 아이콘으로 상세 이동 affordance를 변경했습니다.
Experience title은 `회사명 | 직책` 형식으로 변경했습니다.
Hero 강점은 협업 능력이 보이도록 "협업 실행력" / "일정·리뷰·요구사항 조율"로 변경했습니다.
npm run lint, npm run build, Chrome desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/sections/ProjectsSection.tsx
- src/components/project/ProjectCard.tsx
- src/components/ui/TimelineItem.tsx
- src/data/portfolio.ts
```

### Requested Action

```text
- 프로젝트 horizontal rail이 데스크톱/모바일에서 자연스럽게 우측 탐색 구조로 보이는지 확인해주세요.
- ProjectCard 상단 우측 화살표가 상세 이동 affordance로 충분히 명확한지 확인해주세요.
- Experience의 `회사명 | 직책` 표기가 자연스러운지 확인해주세요.
- Hero 강점의 협업 실행력 문구가 사용자 이력과 맞게 읽히는지 확인해주세요.
```

## 2026-06-12 10:50 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 프로젝트 더보기 UI를 다시 조정했습니다.
더보기 버튼은 82x40px 소형 pill로 줄였고, 열린 상태는 대표 프로젝트 그리드 오른쪽에 안정적으로 붙는 side panel 구조로 변경했습니다.
열린 패널에서는 상단 X/더보기 버튼 영역을 제거하고, 하단 `접기` 버튼만 노출합니다.
패널 안의 compact project card는 KPI 1개와 태그 일부만 보여주도록 줄여 우측 목록 UI가 무너지지 않게 정리했습니다.
Skills에 Version / Collaboration 그룹을 추가해 GitLab, Bitbucket, SVN, Jira, Confluence, Slack을 노출했습니다.
마지막 영역에 Q&A 섹션을 추가해 프론트엔드 전환 이유, 협업 기준, 역량 성장 방식을 3개 카드로 정리했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- app/page.tsx
- app/globals.css
- src/components/sections/ProjectsSection.tsx
- src/components/sections/InterviewSection.tsx
- src/data/portfolio.ts
- src/types/portfolio.ts
```

### Requested Action

```text
- 더보기 버튼 크기와 열린 side panel이 데스크톱/모바일에서 안정적으로 보이는지 확인해주세요.
- Q&A 섹션이 자기소개를 과하게 늘리지 않고 포트폴리오 마지막 보강 요소로 자연스러운지 확인해주세요.
- Version / Collaboration 스킬 그룹이 기존 기술 스택 흐름과 자연스럽게 연결되는지 확인해주세요.
```

## 2026-06-12 10:59 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 Q&A를 짧게 잘라낸 키워드형에서 원문 문단형 답변으로 확장했습니다.
InterviewQna 타입을 emphasis + paragraphs 구조로 변경하고, Q&A UI는 질문 영역과 답변 영역이 분리된 document interview 형태로 재구성했습니다.
About/Skills/Projects/Experience/AI Delivery/Q&A가 모두 같은 카드 반복으로 보인다는 피드백을 반영해 section-specific layout을 추가했습니다.
About은 dark positioning board, Skills는 12-column mosaic matrix, Projects는 framed case board, Experience는 vertical timeline, AI Delivery는 dark process rail, Q&A는 document interview list 형태로 분리했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 검증을 통과했고 데스크톱/모바일 모두 수평 오버플로 없음 확인했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/sections/AboutSection.tsx
- src/components/sections/SkillsSection.tsx
- src/components/sections/ProjectsSection.tsx
- src/components/sections/ExperienceSection.tsx
- src/components/sections/AIWorkflowSection.tsx
- src/components/sections/InterviewSection.tsx
- src/data/portfolio.ts
- src/types/portfolio.ts
```

### Requested Action

```text
- 섹션별 디자인이 서로 다른 역할로 읽히는지 확인해주세요.
- Q&A 원문형 답변이 너무 과하지 않고 마지막 인터뷰 노트로 자연스러운지 확인해주세요.
- 모바일에서 Skills mosaic, AI process rail, Q&A document layout이 한 칼럼으로 안정적으로 떨어지는지 확인해주세요.
```

## 2026-06-12 11:47 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 프로젝트 더보기 버튼이 레이아웃 영역을 차지하지 않도록 absolute overlay로 변경했습니다.
더보기 패널은 360px side column에서 760px overlay popup으로 확대하고, 내부 compact card를 2열로 배치해 텍스트가 잘리지 않게 조정했습니다.
Experience 항목은 왼쪽에 시작/종료 기간 레일을 두고 오른쪽에 회사명 | 직책과 업무 요약이 나오는 구조로 변경했습니다.
AI Delivery 좌측 아이콘은 74px에서 52px로 줄였습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 검증을 통과했습니다.
Desktop 1440px 기준 더보기 클릭 후 panel width 760px, card width 353px, title/card clipping 0건, AI icon 52px, Experience period rail 좌측 배치 확인했습니다.
Mobile 390px 기준 panel width 340px, card width 304px, 수평 오버플로 없음, Experience 72px period rail, AI icon 52px 확인했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/ui/TimelineItem.tsx
```

### Requested Action

```text
- 더보기 overlay button이 프로젝트 카드 클릭을 방해하지 않는지 확인해주세요.
- 더보기 popup 카드의 텍스트가 실제 시각 검수에서도 잘리지 않는지 확인해주세요.
- Experience 좌측 기간 레일이 기간 정보로 명확히 읽히는지 확인해주세요.
- AI Delivery icon 크기가 다른 섹션과 균형이 맞는지 확인해주세요.
```

## 2026-06-12 11:50 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 모바일 CSS 깨짐 여부를 추가 검증했습니다.
Chrome headless 기준 360px, 390px, 430px viewport에서 전체 페이지와 프로젝트 더보기 popup 열린 상태를 확인했습니다.
세 viewport 모두 document scrollWidth가 viewport width와 동일해 수평 오버플로가 없었습니다.
Header, Hero, About, Skills, Projects, Experience, AI Delivery, Q&A, Footer 주요 container overflow 0건 확인했습니다.
프로젝트 더보기 popup은 모바일에서 1열로 열리고 6개 카드가 노출되며 title/card clipping 0건으로 확인했습니다.
텍스트 clipping으로 탐지된 항목은 sr-only heading뿐이라 실제 화면 깨짐 항목은 없었습니다.
```

### Related Files

```text
- app/globals.css
- tmp/qa/mobile-css-360.png
- tmp/qa/mobile-css-390.png
- tmp/qa/mobile-css-430.png
```

### Requested Action

```text
- 실제 모바일 기기에서 터치 스크롤 감각과 floating back-to-top 버튼 위치가 불편하지 않은지 확인해주세요.
- 360px 폭에서 프로젝트 popup이 사용성 측면에서 충분히 넓게 느껴지는지 확인해주세요.
```

## 2026-06-12 15:54 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 Projects 더보기 popup 디자인을 단순화했습니다.
기존 2열/hover 확장형 compact card를 640px 우측 overlay 안의 1열 flex list로 변경했습니다.
popup compact card에서는 KPI와 담당업무 preview를 제거하고 기술 태그를 최대 4개로 제한했습니다.
hover/focus 시 full-width 확장, translateX, z-index 상승을 제거하고 border/shadow만 반응하도록 변경해 카드 겹침과 포인터 가로막힘을 없앴습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/project/ProjectCard.tsx
- tmp/qa/project-popup-simplified-desktop.png
- tmp/qa/project-popup-simplified-mobile.png
```

### Requested Action

```text
- 더보기 popup이 추가 프로젝트를 빠르게 훑는 리스트로 충분히 단순하게 보이는지 확인해주세요.
- compact card에서 KPI/담당업무를 제거한 뒤에도 상세 페이지 진입 흐름이 자연스러운지 확인해주세요.
- 모바일 390px에서 popup 터치 스크롤과 우측 floating top 버튼이 불편하지 않은지 확인해주세요.
```

## 2026-06-12 16:22 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 React Compiler를 적용했습니다.
`next.config.ts`에 `reactCompiler: true`를 추가하고 `babel-plugin-react-compiler@1.0.0`을 devDependency로 설치했습니다.
동시에 스크롤 진입 이펙트를 실제 구현했습니다. `ScrollReveal` 컴포넌트가 IntersectionObserver로 section header, card, timeline, AI step, Q&A를 reveal 처리합니다.
모바일은 이동 거리를 줄였고 `prefers-reduced-motion: reduce`에서는 reveal 요소를 즉시 표시하도록 처리했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile/reduced-motion 검증을 통과했습니다.
```

### Related Files

```text
- next.config.ts
- package.json
- package-lock.json
- app/globals.css
- src/components/ui/ScrollReveal.tsx
- src/components/ui/SectionHeader.tsx
- src/components/project/ProjectCard.tsx
- src/components/ui/TimelineItem.tsx
- src/components/sections/AboutSection.tsx
- src/components/sections/SkillsSection.tsx
- src/components/sections/ProjectsSection.tsx
- src/components/sections/ExperienceSection.tsx
- src/components/sections/AIWorkflowSection.tsx
- src/components/sections/InterviewSection.tsx
```

### Requested Action

```text
- React Compiler 적용 후 Header active nav, Projects 더보기 panel, ScrollReveal 상호작용이 실제 기기에서도 안정적인지 확인해주세요.
- 스크롤 진입 이펙트가 과하지 않고 읽기 흐름을 보조하는 수준인지 확인해주세요.
- reduced-motion 사용 환경에서 콘텐츠가 지연 없이 표시되는지 확인해주세요.
```

## 2026-06-12 16:28 - Next.js App Agent → QA-Security Agent

### Message

```text
ScrollReveal이 최초 1회만 동작하던 문제를 수정했습니다.
기존에는 첫 진입 후 observer를 해제했지만, 이제 viewport 이탈 시 is-visible을 제거하고 재진입 시 다시 is-visible을 붙입니다.
사용자 요청에 따라 Skills의 AI Development 카드를 제거했습니다.
Skills에는 Frontend, Backend, Database / Cloud, DevOps, Version / Collaboration 5개 카드만 남았습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- src/components/ui/ScrollReveal.tsx
- src/data/portfolio.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- 스크롤을 내렸다가 다시 올릴 때 reveal 이펙트가 반복되는지 실제 기기에서 확인해주세요.
- Skills에서 AI Development 카드 제거 후 5개 카드 배치가 어색하지 않은지 확인해주세요.
```

## 2026-06-15 09:52 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 Hero 강점 신호를 협업 조율 중심에서 프론트엔드 개발 강점 중심으로 변경했습니다.
현재 노출 문구는 `화면 완성도` / `상태·API·인터랙션 연결`입니다.
추가 프로젝트 더보기 panel의 compact card label, role, tech badge, arrow accent를 어두운 회색 톤으로 분리했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/data/portfolio.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Hero 강점이 프론트엔드 개발자로서 충분히 명확한지 확인해주세요.
- 모바일에서는 기존 CSS 정책상 Hero signal caption이 숨겨지므로 `화면 완성도` 단독 노출이 어색하지 않은지 확인해주세요.
- 추가 프로젝트 더보기 panel의 어두운 회색 label tone이 warm orange 전체 스타일과 충돌하지 않는지 확인해주세요.
```

## 2026-06-15 12:24 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 Hero 우측 핵심 포인트의 `강점` label을 제거하고 `품질 기준`으로 교체했습니다.
현재 세 번째 포인트는 `품질 기준` / `화면 완성도` / `상태·API·인터랙션 연결` 구조입니다.
Hero dossier 접근성 label도 `핵심 강점`에서 `핵심 정보`로 변경했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- src/data/portfolio.ts
- src/components/sections/HeroSection.tsx
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Hero 우측 포인트가 `경력 / 역할 / 품질 기준` 흐름으로 자연스럽게 읽히는지 확인해주세요.
- 모바일에서 caption이 숨겨져도 `품질 기준` / `화면 완성도` 조합만으로 의미가 충분한지 확인해주세요.
```

## 2026-06-15 15:11 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 확정 문구에 따라 Hero 우측 세 번째 포인트를 `품질 기준`에서 `주요 경험`으로 변경했습니다.
현재 세 번째 포인트는 `주요 경험` / `지도·관제·백오피스 UI` / `운영형 화면 중심` 구조입니다.
모바일에서도 세 번째 caption이 보이도록 Hero signal caption 숨김 규칙을 해제했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/data/portfolio.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Hero 우측 포인트가 `경력 / 역할 / 주요 경험` 흐름으로 자연스럽게 읽히는지 확인해주세요.
- 모바일에서 `지도·관제·백오피스 UI` 텍스트가 줄바꿈되더라도 어색하지 않은지 확인해주세요.
```

## 2026-06-15 15:29 - Next.js App Agent → Release-Review Agent

### Message

```text
GitHub repository `https://github.com/960403jo/portfolio`를 생성하고 main branch push를 완료했습니다.
Vercel CLI는 전역 설치되어 있지 않아 `npx vercel`로 실행했습니다.
`npx vercel whoami` 실행 시 device login flow가 시작되었지만 Vercel 계정 인증이 완료되지 않아 production 배포는 진행하지 못했습니다.
현재 배포 blocker는 Vercel 계정 인증입니다.
```

### Related Files

```text
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
```

### Requested Action

```text
- Vercel 계정 인증 완료 후 production 배포를 재개해주세요.
- 배포 후 `NEXT_PUBLIC_SITE_URL`을 실제 Vercel production URL로 설정하고 재배포해주세요.
```

## 2026-06-15 15:51 - Next.js App Agent → Release-Review Agent

### Message

```text
Vercel 계정 인증 완료 후 production 배포를 진행했습니다.
Vercel project `joinseong-s-projects/portfolio`가 생성되었고 GitHub repository `https://github.com/960403jo/portfolio` 연결도 완료되었습니다.
Production alias는 `https://portfolio-ashy-five-87.vercel.app`입니다.
`NEXT_PUBLIC_SITE_URL` production 환경변수를 production alias로 설정한 뒤 재배포했습니다.
배포 페이지 200 OK, sitemap/robots production URL 반영, desktop/mobile Hero 렌더링과 수평 오버플로 0, console error 0건을 확인했습니다.
```

### Related Files

```text
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Vercel dashboard에서 custom domain 연결 여부를 확인해주세요.
- production URL 기준으로 실제 기기 QA를 진행해주세요.
```

## 2026-06-15 15:56 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 화면 노출 `커리어` 표기를 `Career`로 변경했습니다.
Header nav와 Experience section eyebrow 모두 `Career`로 통일했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 로컬 렌더링 검증을 통과했습니다.
```

### Related Files

```text
- src/data/portfolio.ts
- src/components/sections/ExperienceSection.tsx
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Header nav의 `About / Skills / Projects / Career / AI Delivery / Q&A / Contact` 흐름이 자연스러운지 확인해주세요.
- production 배포 후 `커리어`가 다시 노출되지 않는지 확인해주세요.
```

## 2026-06-15 16:06 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 Header nav와 Footer에서 Contact 영역을 제거했습니다.
Hero 이메일 CTA는 유지하되, 클릭 시 버튼 텍스트가 `이메일`에서 `joinsseong@gmail.com`으로 변경되도록 구현했습니다.
Q&A 메뉴 클릭 시 하단 스크롤 보정 때문에 Contact가 active로 잡히던 Header 로직을 수정했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 로컬 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/layout/Footer.tsx
- src/components/layout/Header.tsx
- src/components/sections/HeroSection.tsx
- src/data/portfolio.ts
- src/types/portfolio.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Q&A 메뉴 클릭 시 `#interview`로 이동하고 active가 `Q&A`로 유지되는지 production에서 확인해주세요.
- Hero 이메일 버튼 클릭 후 이메일 주소가 모바일에서 잘리지 않는지 확인해주세요.
```

## 2026-06-15 16:17 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 Skills 섹션의 DevOps와 Version / Collaboration 카드 폭을 조정했습니다.
데스크톱 12-column 배치에서 두 번째 줄 오른쪽에 남던 빈 영역을 제거하기 위해 DevOps는 3컬럼, Version / Collaboration은 4컬럼으로 배치했습니다.
npm run lint, npm run build, Chrome headless desktop/tablet/mobile 로컬 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Skills 섹션에서 Frontend 대형 카드와 오른쪽 4개 카드의 균형이 자연스러운지 확인해주세요.
- 데스크톱에서 DevOps와 Version / Collaboration 오른쪽 빈 영역이 다시 보이지 않는지 확인해주세요.
```

## 2026-06-15 18:23 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 공개 Notion 페이지의 프로필 사진을 추출하고 배경 제거 후 Hero에 배치했습니다.
최종 asset은 `public/images/profile/joinseong-profile-hero.webp`이며, Hero 우측 핵심 정보 카드 위에 프로필 컷아웃 프레임으로 노출됩니다.
npm run lint, npm run build, Chrome headless desktop/mobile 로컬 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/sections/HeroSection.tsx
- public/images/profile/joinseong-profile-hero.webp
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Hero 프로필 컷아웃이 desktop/mobile에서 면접관에게 자연스럽게 보이는지 확인해주세요.
- 프로필 이미지가 텍스트 가독성이나 Hero 첫 화면 흐름을 방해하지 않는지 확인해주세요.
```

## 2026-06-15 18:37 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 Hero 프로필 컷아웃을 선명한 카드에서 흐릿한 배경 레이어로 변경했습니다.
프로필 이미지는 `hero-portrait-bg` 장식 레이어로 이동했고, desktop/mobile 각각 opacity와 blur를 다르게 적용했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 로컬 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- src/components/sections/HeroSection.tsx
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Hero 배경 프로필이 너무 흐리거나 강하지 않은지 실제 기기에서 확인해주세요.
- 모바일에서 텍스트와 CTA 가독성이 유지되는지 확인해주세요.
```

## 2026-06-16 09:30 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 Hero 흐림 배경 프로필의 투명도를 낮추고 blur를 줄였습니다.
desktop은 opacity 0.48 / blur 5px, mobile은 opacity 0.34 / blur 6px로 조정해 인물감이 더 보이도록 했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 로컬 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Hero 배경 프로필이 실제 기기에서 충분히 보이는지 확인해주세요.
- 강화된 프로필 배경이 Hero 텍스트와 CTA 가독성을 방해하지 않는지 확인해주세요.
```

## 2026-06-16 09:50 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 Hero 흐림 배경 프로필 opacity를 desktop/mobile 모두 0.1로 낮췄습니다.
blur는 desktop 5px, mobile 6px를 유지해 프로필을 배경 질감 수준으로만 보이게 조정했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 로컬 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Hero 프로필이 너무 사라지지 않고 은은한 배경 신호로 남는지 확인해주세요.
- desktop/mobile에서 CTA와 핵심 카드 가독성이 유지되는지 확인해주세요.
```

## 2026-06-16 09:58 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 Hero 프로필 배경의 투명도와 blur 효과를 모두 제거했습니다.
`hero-portrait-bg`는 opacity 1, mask none, `hero-portrait-bg__image`는 filter none으로 변경했고 glow pseudo layer도 display none 처리했습니다.
모바일은 선명해진 이미지가 헤드라인과 직접 겹치지 않도록 top을 300px로 조정했습니다.
npm run lint, npm run build, Chrome headless desktop/mobile 로컬 검증을 통과했습니다.
```

### Related Files

```text
- app/globals.css
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- 선명한 프로필 배경이 Hero 우측 카드 뒤에서 자연스럽게 보이는지 확인해주세요.
- 모바일에서 프로필 이미지가 CTA/카드 뒤로 들어가며 헤드라인 가독성을 해치지 않는지 확인해주세요.
```

## 2026-06-16 10:11 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 지원서 제출용 PDF 화면과 프로젝트별 상세 PDF 화면을 추가했습니다.
`/pdf`는 지원서용 요약 PDF 화면이고, `/projects/[slug]/pdf`는 각 프로젝트 상세 데이터에 맞춰 생성되는 PDF 전용 라우트입니다.
Hero에는 `PDF 저장` CTA를 추가했고, 프로젝트 상세에는 해당 프로젝트 PDF로 이동하는 `프로젝트 PDF` 버튼을 추가했습니다.
PDF 화면의 저장 버튼은 `window.print()`로 브라우저의 PDF 저장 대화상자를 열며, print media에서는 toolbar와 화면용 shadow/background가 제거됩니다.
npm run lint, npm run build, Chrome headless desktop/mobile 로컬 검증, Chrome headless PDF 파일 생성 검증을 통과했습니다.
```

### Related Files

```text
- app/pdf/page.tsx
- app/projects/[slug]/pdf/page.tsx
- app/projects/[slug]/page.tsx
- app/sitemap.ts
- app/globals.css
- src/components/pdf/PrintToolbar.tsx
- src/components/sections/HeroSection.tsx
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- `/pdf`를 실제 브라우저에서 PDF 저장했을 때 지원서 제출용으로 정보량과 페이지 분할이 적절한지 확인해주세요.
- 대표 프로젝트와 추가 프로젝트 각각의 `/projects/[slug]/pdf` 라우트가 해당 프로젝트 데이터로 잘 연결되는지 확인해주세요.
```

## 2026-06-16 11:01 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 맞춰 PDF 다운로드 흐름을 footer zip 다운로드 방식으로 변경했습니다.
Footer에 `PDF 다운로드` 버튼을 추가했고, `/api/portfolio-pdf-zip`에서 Puppeteer + headless Chromium으로 `/pdf`와 전체 `/projects/[slug]/pdf`를 PDF로 출력한 뒤 zip으로 반환합니다.
zip 내부에는 `00-joinseong-portfolio-main.pdf`와 `projects/01-...pdf`부터 `projects/10-...pdf`까지 프로젝트 상세 PDF 10개가 포함됩니다.
Hero `PDF 저장` CTA와 프로젝트 상세 `프로젝트 PDF` 버튼은 제거했습니다.
npm run lint, npm run build, 로컬 API zip 생성 검증을 통과했습니다.
```

### Related Files

```text
- app/api/portfolio-pdf-zip/route.ts
- src/lib/pdf-export.ts
- src/components/layout/Footer.tsx
- src/components/sections/HeroSection.tsx
- app/projects/[slug]/page.tsx
- app/globals.css
- package.json
- package-lock.json
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Footer `PDF 다운로드` 버튼 클릭 시 zip 다운로드가 자연스러운지 확인해주세요.
- zip 내부 11개 PDF 파일명과 각 PDF의 페이지 분할이 지원서 제출 용도에 맞는지 확인해주세요.
```

## 2026-06-16 12:08 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 footer PDF 다운로드 UX를 재검토하고 수정했습니다.
기존 raw link 방식은 zip 생성 중 피드백이 없어 다운로드가 멈춘 것처럼 보일 수 있어, 클라이언트 버튼으로 변경했습니다.
버튼 클릭 시 `PDF 생성 중...` 상태를 표시하고, API 응답 blob을 받아 `joinseong-portfolio-pdf.zip`으로 다운로드합니다.
npm run lint, npm run build, 로컬 실제 클릭 다운로드 검증을 통과했습니다.
```

### Related Files

```text
- src/components/layout/FooterDownloadButton.tsx
- src/components/layout/Footer.tsx
- app/globals.css
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Production footer 버튼 클릭 시 `PDF 생성 중...` 상태와 zip 다운로드가 자연스럽게 동작하는지 확인해주세요.
- 생성 대기 시간이 지원자가 기다릴 수 있는 수준인지 확인해주세요.
```

## 2026-06-16 12:13 - Next.js App Agent → QA-Security Agent

### Message

```text
PDF 다운로드 UX 수정분을 production에 재배포했습니다.
`https://portfolio-ashy-five-87.vercel.app` alias가 새 배포로 연결된 것을 확인했습니다.
Production footer 버튼을 실제 클릭해 `PDF 생성 중...` 상태 표시 후 `joinseong-portfolio-pdf.zip`이 다운로드되는지 검증했습니다.
zip 내부에는 메인 PDF 1개와 프로젝트 상세 PDF 10개, 총 11개 PDF가 포함됩니다.
console error는 0건입니다.
```

### Related Files

```text
- src/components/layout/FooterDownloadButton.tsx
- src/components/layout/Footer.tsx
- app/globals.css
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Production에서 사용자가 기다릴 수 있는 수준의 생성 시간인지 확인해주세요.
- 다운로드된 zip의 PDF 페이지 분할과 파일명이 지원서 제출용으로 적절한지 최종 확인해주세요.
```

## 2026-06-16 12:18 - Next.js App Agent → QA-Security Agent

### Message

```text
문서 업데이트 커밋까지 포함해 production을 다시 배포했습니다.
최신 deployment는 `https://portfolio-24zn6z21w-joinseong-s-projects.vercel.app`이고, alias는 `https://portfolio-ashy-five-87.vercel.app`입니다.
최신 alias에서 footer 버튼 실제 클릭을 재검증했고, `PDF 생성 중...` 표시 후 `joinseong-portfolio-pdf.zip` 다운로드가 완료됐습니다.
zip 내부 PDF는 11개이며 console error는 0건입니다.
```

### Related Files

```text
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 최신 alias 기준으로 버튼 클릭 다운로드와 PDF 파일 내용을 확인해주세요.
```

## 2026-06-16 12:31 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 PDF zip 생성 소스를 전용 PDF 화면에서 현재 HTML 화면으로 변경했습니다.
이제 `/api/portfolio-pdf-zip`은 `/pdf`, `/projects/[slug]/pdf`가 아니라 `/`, `/projects/[slug]`를 직접 print-to-PDF로 출력합니다.
전용 `/pdf` 라우트, 프로젝트별 `/pdf` 라우트, `PrintToolbar` 컴포넌트를 제거했고 sitemap에서도 PDF 전용 경로를 제거했습니다.
현재 HTML 출력 시 scroll reveal 요소가 투명하게 찍히지 않도록 print media에서 reveal을 강제 노출하고, 고정 header/download/back-to-top 조작 UI만 숨겼습니다.
ScrollReveal hydration mismatch도 함께 수정했습니다.
npm run lint, npm run build, 로컬 API zip 생성, 로컬 footer 실제 클릭 다운로드 검증을 통과했습니다.
```

### Related Files

```text
- src/lib/pdf-export.ts
- app/globals.css
- app/sitemap.ts
- src/components/ui/ScrollReveal.tsx
- app/pdf/page.tsx
- app/projects/[slug]/pdf/page.tsx
- src/components/pdf/PrintToolbar.tsx
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 zip 내부 PDF가 현재 웹 화면 디자인을 기준으로 출력되는지 확인해주세요.
- `/pdf`와 `/projects/[slug]/pdf`가 더 이상 접근되지 않는지 확인해주세요.
- 현재 HTML print media에서 하단 섹션이 누락되거나 투명하게 찍히지 않는지 확인해주세요.
```

## 2026-06-16 12:39 - Next.js App Agent → QA-Security Agent

### Message

```text
Production에서 현재 HTML 기반 PDF zip 생성이 기존 60초 제한에 걸려 `FUNCTION_INVOCATION_TIMEOUT`이 발생하는 것을 확인했습니다.
`/api/portfolio-pdf-zip`의 `maxDuration`을 120초로 조정하고, Puppeteer navigation 대기를 `networkidle0`에서 `domcontentloaded` + fonts/images 준비 확인으로 변경했습니다.
로컬 `/api/portfolio-pdf-zip` 재검증 결과 현재 HTML 라우트 기준 zip 11개 PDF가 약 5.9초에 생성됩니다.
```

### Related Files

```text
- app/api/portfolio-pdf-zip/route.ts
- src/lib/pdf-export.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- Production 재배포 후 footer 버튼 실제 클릭 다운로드가 120초 안에 완료되는지 확인해주세요.
```

## 2026-06-16 12:43 - Next.js App Agent → QA-Security Agent

### Message

```text
timeout 대응분을 production에 재배포했습니다.
최신 deployment는 `https://portfolio-5x7508n6l-joinseong-s-projects.vercel.app`이고, alias는 `https://portfolio-ashy-five-87.vercel.app`입니다.
Production `/api/portfolio-pdf-zip` 직접 호출은 46.8초에 200 응답, zip 내부 PDF 11개로 확인했습니다.
Production footer 버튼 실제 클릭도 `PDF 생성 중...` 표시 후 `joinseong-portfolio-pdf.zip` 다운로드가 완료됐고 console error는 0건입니다.
```

### Related Files

```text
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 현재 HTML 기준 PDF가 화면 디자인을 잘 반영하는지 육안 확인해주세요.
```

## 2026-06-16 12:58 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 PDF 한글 깨짐과 비율 문제를 수정했습니다.
`@fontsource-variable/noto-sans-kr`를 추가하고 Inter latin-only body class를 제거해 앱과 PDF 모두 Noto Sans KR self-host 폰트를 사용합니다.
PDF는 A4 print media가 아니라 1440px desktop web screen layout 기준의 긴 페이지로 출력하도록 변경했습니다.
PDF 생성 직전 Puppeteer에서 `.site-header`, `.footer-download-wrap`, `.back-to-top-floating`을 숨겨 메뉴바와 조작 UI가 PDF에 나오지 않게 했습니다.
Production PDF 내부 `Noto Sans KR` 폰트 포함, MediaBox 1080pt 폭, zip 내부 PDF 11개를 확인했습니다.
Production footer 실제 클릭 다운로드도 성공했고 console error는 0건입니다.
```

### Related Files

```text
- app/layout.tsx
- app/globals.css
- src/lib/pdf-export.ts
- package.json
- package-lock.json
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 다운로드한 PDF에서 한글이 깨지지 않는지 육안 확인해주세요.
- PDF가 웹 화면 비율로 보이고 메뉴바가 노출되지 않는지 확인해주세요.
```

## 2026-06-16 13:27 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 요청에 따라 프로젝트 상세 hero 영역의 `Project Detail` eyebrow 문구를 제거했습니다.
코드 전체에서 `Project Detail` 문자열이 남아 있지 않은지 확인했고, 로컬 상세 페이지 렌더링에서도 미노출을 확인했습니다.
npm run lint, npm run build를 통과했습니다.
```

### Related Files

```text
- app/projects/[slug]/page.tsx
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 프로젝트 상세 페이지와 PDF 출력에서 `Project Detail` 문구가 보이지 않는지 확인해주세요.
```

## 2026-06-16 13:30 - Next.js App Agent → QA-Security Agent

### Message

```text
프로젝트 상세 eyebrow 제거분을 production에 재배포했습니다.
최신 deployment는 `https://portfolio-i6lq8vpax-joinseong-s-projects.vercel.app`이고, alias는 `https://portfolio-ashy-five-87.vercel.app`입니다.
Production `/projects/taean-smart-city` 렌더링에서 `Project Detail` 미노출, hero eyebrow 0개, console error 0을 확인했습니다.
```

### Related Files

```text
- app/projects/[slug]/page.tsx
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 다른 프로젝트 상세 페이지에서도 동일하게 eyebrow가 보이지 않는지 확인해주세요.
```

## 2026-06-16 14:21 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 PDF 하단 레이아웃과 프로젝트 카드 링크를 재검토했습니다.
웹 prepared screenshot과 PDF render를 비교한 결과 크기는 1080x4389로 동일하고 meanAbsDiff 3.18 수준이라 구조적 밀림은 확인되지 않았습니다.
PDF 캡처 안정성을 위해 body width/min-width를 1440px로 고정하고 project showcase에 layout containment를 추가했습니다.
메인 PDF 내부 프로젝트 카드 링크는 Chromium이 절대 URL로 바꾸는 문제가 있어 `pdf-lib`으로 annotation URI를 후처리했습니다.
이제 main PDF의 프로젝트 링크는 `projects/01-taean-smart-city.pdf` 같은 zip 내부 상대 경로로 들어갑니다.
Production API와 실제 footer 클릭 다운로드에서 PDF 11개, 상대 링크 4개, 외부 project URL 0개, console error 0을 확인했습니다.
```

### Related Files

```text
- src/lib/pdf-export.ts
- package.json
- package-lock.json
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 압축을 푼 뒤 main PDF 프로젝트 카드 링크가 `projects/*.pdf` 상세 PDF로 열리는지 확인해주세요.
- PDF 하단 섹션이 웹 화면 대비 밀려 보이지 않는지 육안 확인해주세요.
```

## 2026-06-16 15:42 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자가 main PDF 프로젝트 카드 클릭 시 macOS Preview에서 `해당 응용 프로그램을 열 수 없습니다. -50` 오류가 난다고 보고했습니다.
원인은 프로젝트 링크가 PDF URI action으로 들어가 macOS가 외부 앱/URL 열기로 처리할 수 있는 구조였기 때문입니다.
`src/lib/pdf-export.ts`에서 프로젝트 카드 annotation을 `/S /GoToR`, `/F projects/01-*.pdf`, `/D [0 /Fit]` 원격 문서 이동 action으로 재작성하도록 수정했습니다.
Local과 Production API에서 생성한 zip을 각각 풀어 main PDF를 검사했고, 프로젝트 링크 4개 모두 `/GoToR`, project URI 0개, failures 0을 확인했습니다.
Production alias `https://portfolio-ashy-five-87.vercel.app`는 최신 배포 `https://portfolio-jpirzdbpk-joinseong-s-projects.vercel.app`로 연결되어 있습니다.
```

### Related Files

```text
- src/lib/pdf-export.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 zip을 압축 해제한 뒤 main PDF와 `projects/` 폴더를 같은 위치에 둔 상태에서 대표 프로젝트 카드 링크가 상세 PDF로 이동하는지 확인해주세요.
- Preview 외 PDF viewer에서도 상대 파일 이동이 정상인지 확인해주세요.
```

## 2026-06-16 16:05 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자 피드백에 따라 Q&A 섹션이 태블릿/모바일에서 밀려 보이는 문제를 재검토했습니다.
768px 구간에서 질문/답변 2컬럼이 좁게 눌려 보이는 것을 확인해 1040px 이하에서는 1컬럼 문서형 카드로 전환했습니다.
답변 영역에는 상단 divider와 padding을 추가하고, 모바일 padding/line-height를 조정했습니다.
Local 1440/1024/768/430/390/360px에서 overflowX 0, 질문/답변 겹침 0, 카드 내부 overflow 0, console error 0을 확인했습니다.
Production alias `https://portfolio-ashy-five-87.vercel.app`는 `https://portfolio-mliqyl7w5-joinseong-s-projects.vercel.app`로 재배포했고, 768/390/360px에서 동일 기준으로 재검증했습니다.
```

### Related Files

```text
- app/globals.css
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 Q&A 섹션을 768px, 390px, 360px 기준으로 다시 육안 확인해주세요.
```

## 2026-06-16 16:22 - Next.js App Agent → QA-Security Agent

### Message

```text
PDF에서는 `더보기` 같은 JS 상호작용이 동작하지 않으므로, PDF 생성 시 추가 프로젝트를 정적 확장 상태로 출력하도록 개선했습니다.
프로젝트 더보기 패널을 조건부 렌더링이 아니라 항상 DOM에 두고, 일반 화면에서는 CSS로 접힘/열림을 제어합니다.
PDF 캡처 CSS에서는 더보기/접기 버튼을 숨기고 추가 프로젝트 패널을 본문 흐름 안의 2열 목록으로 펼칩니다.
Local 일반 화면 desktop/390/360px에서 더보기 접힘/열림, 추가 프로젝트 6개, overflowX 0, console error 0을 확인했습니다.
Local PDF zip에서 main PDF 프로젝트 링크가 4개에서 10개로 확장되었고, 모두 `/GoToR`로 zip 내부 상세 PDF를 가리키는 것을 확인했습니다.
Production alias `https://portfolio-ashy-five-87.vercel.app`는 `https://portfolio-mjvimk9c9-joinseong-s-projects.vercel.app`로 재배포했고, main PDF 프로젝트 링크 10개와 zip 내부 PDF 11개를 재검증했습니다.
```

### Related Files

```text
- src/components/sections/ProjectsSection.tsx
- src/lib/pdf-export.ts
- app/globals.css
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 PDF main 페이지 Projects 영역 하단에 추가 프로젝트 6개가 정적 카드로 보이는지 확인해주세요.
- 압축 해제 후 main PDF의 전체 프로젝트 카드 10개가 각각 `projects/*.pdf` 상세 PDF로 이동하는지 확인해주세요.
```

## 2026-06-16 16:59 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자가 main PDF에서 `05-traffic-safety-infra.pdf`를 열 때 macOS Preview 권한 오류가 난다고 보고했습니다.
원인은 main PDF가 ZIP 내부의 다른 PDF 파일을 여는 remote go-to(`/GoToR`) 방식에 의존해 Preview의 파일 접근 권한 정책을 타는 구조였기 때문입니다.
main PDF 뒤에 프로젝트 상세 PDF 10개를 append해 `00-joinseong-portfolio-main.pdf` 자체를 11페이지 완성본으로 만들었습니다.
프로젝트 카드 링크 10개는 외부 파일 열기가 아니라 같은 PDF 내부 상세 페이지로 이동하는 `/GoTo` action으로 변경했습니다.
상세 페이지의 목록 복귀 링크 10개도 외부 `#projects` URL 대신 main PDF 1페이지 내부 이동으로 변경했습니다.
Local PDF zip에서 zip 내부 PDF 11개 유지, main PDF 11페이지, 프로젝트 내부 이동 10개, 목록 복귀 내부 이동 10개, 외부 URL/file action 0개를 확인했습니다.
Production alias `https://portfolio-ashy-five-87.vercel.app`는 `https://portfolio-5upz721x4-joinseong-s-projects.vercel.app`로 재배포했고, 동일 기준으로 재검증했습니다.
```

### Related Files

```text
- src/lib/pdf-export.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 `00-joinseong-portfolio-main.pdf` 안에서 프로젝트 카드 클릭이 같은 PDF 내부 상세 페이지로 이동하는지 확인해주세요.
- macOS Preview에서 `projects/*.pdf` 외부 파일 권한 오류가 더 이상 발생하지 않는지 확인해주세요.
```

## 2026-06-16 17:09 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자가 PDF 다운로드 결과에서 Projects/Q&A 영역에 회색 가로 띠가 보인다고 보고했습니다.
원인은 PDF 캡처 시 screen layout의 gradient background와 shadow가 PDF/Preview 렌더링에서 회색 레이어처럼 합성되는 문제로 판단했습니다.
웹 화면 디자인은 유지하고, PDF 캡처 CSS에서 Projects/Q&A 섹션과 관련 카드의 background를 흰색으로 고정하고 shadow를 제거했습니다.
Local PDF zip 재생성 후 link action 구조가 유지되는지 확인했고, QuickLook 렌더링 이미지에서 Projects/Q&A 회색 가로 띠가 사라진 것을 확인했습니다.
Production alias `https://portfolio-ashy-five-87.vercel.app`는 `https://portfolio-k8p3vh4ld-joinseong-s-projects.vercel.app`로 재배포했고, PDF zip 구조를 재검증했습니다.
```

### Related Files

```text
- src/lib/pdf-export.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 PDF 첫 페이지의 Projects/Q&A 영역에 회색 가로 띠가 남아 있지 않은지 육안 확인해주세요.
```

## 2026-06-16 17:37 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자가 main PDF에 상세 PDF 페이지가 전부 포함되지 않도록 요청했고, 상세 PDF의 회색 배경 제거도 요청했습니다.
`00-joinseong-portfolio-main.pdf`는 다시 메인 화면 1페이지만 포함하도록 변경했습니다.
상세 PDF 10개는 ZIP 내부 `projects/*.pdf`로 별도 유지합니다.
PDF 캡처 시 main 프로젝트 카드 href와 상세 PDF의 목록 링크 href를 제거해 PDF annotation을 만들지 않도록 했습니다.
상세 PDF의 project detail page/hero/section/panel/KPI card 배경을 흰색으로 고정하고 shadow를 제거했습니다.
Local PDF zip에서 PDF 11개, main pageCount 1/action 0, 상세 PDF 10개 모두 pageCount 1/action 0을 확인했고, `05-traffic-safety-infra.pdf` QuickLook 렌더링에서 회색 배경 미노출을 확인했습니다.
Production alias `https://portfolio-ashy-five-87.vercel.app`는 `https://portfolio-llg0wbl6a-joinseong-s-projects.vercel.app`로 재배포했고, 동일 기준으로 재검증했습니다.
```

### Related Files

```text
- src/lib/pdf-export.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 main PDF가 1페이지 메인 화면만 포함하는지 확인해주세요.
- QA 시 상세 PDF 10개가 별도 파일로 존재하고 회색 배경 없이 렌더링되는지 확인해주세요.
```

## 2026-06-16 17:53 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자가 main PDF 프로젝트 카드 클릭 시 ZIP 내부 `projects/*.pdf`로 이동하고, 상세 PDF의 `프로젝트 목록`도 main PDF로 이동하도록 요청했습니다.
main PDF는 1페이지 메인 화면만 유지하면서 프로젝트 카드 10개를 remote PDF action으로 `projects/*.pdf`에 연결했습니다.
상세 PDF 10개는 각각 `프로젝트 목록` 링크를 `../00-joinseong-portfolio-main.pdf`에 연결했습니다.
상세 PDF 흰색 배경 보정은 유지했습니다.
Local PDF zip에서 PDF 11개, main pageCount 1/action 10, 상세 PDF 10개 모두 pageCount 1/action 1을 확인했습니다.
Production alias `https://portfolio-ashy-five-87.vercel.app`는 `https://portfolio-d6oiqke48-joinseong-s-projects.vercel.app`로 재배포했고, 동일 기준으로 재검증했습니다.
```

### Related Files

```text
- src/lib/pdf-export.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 ZIP 압축 해제 후 main PDF 프로젝트 카드가 `projects/*.pdf`로 이동하는지 확인해주세요.
- QA 시 상세 PDF의 `프로젝트 목록` 링크가 `../00-joinseong-portfolio-main.pdf`로 이동하는지 확인해주세요.
```

## 2026-06-16 18:05 - Next.js App Agent → QA-Security Agent

### Message

```text
사용자가 웹 PDF 뷰어에서 PDF가 버벅이고 프로젝트 카드 클릭 시 상세 화면으로 이동하지 않는다고 보고했습니다.
원인은 ZIP 내부 PDF를 여는 remote go-to(`/GoToR`) action이 Chrome/웹 PDF 뷰어에서 안정적으로 동작하지 않고, main PDF가 긴 단일 페이지로 생성되어 브라우저 렌더링 부담이 큰 구조였기 때문입니다.
PDF 후처리에서 main 프로젝트 링크를 `projects/*.pdf`, 상세 목록 링크를 `../00-joinseong-portfolio-main.pdf`로 바꾸던 로직을 제거했습니다.
이제 PDF 내부 링크는 HTML 원본 링크 기준 웹 URL annotation으로 유지됩니다: main은 `/projects/[slug]`, 상세는 `/#projects`.
main PDF는 1440px 웹 비율을 유지하되 1200px 높이 기준으로 6페이지 분할해 브라우저 PDF 뷰어 부담을 낮췄습니다.
PDF 캡처 전용 CSS에 project/interview/detail card page-break 방지를 추가했습니다.
Local PDF zip에서 PDF 11개, main pageCount 6, 고유 프로젝트 웹 URL 10개, 상세 PDF 10개 모두 pageCount 1, 상세 back URL 10개, `/GoToR` 0개, unexpected action 0개를 확인했습니다.
Production alias `https://portfolio-ashy-five-87.vercel.app`는 `https://portfolio-461gleeyx-joinseong-s-projects.vercel.app`로 재배포했고, 동일 기준으로 재검증했습니다.
```

### Related Files

```text
- src/lib/pdf-export.ts
- docs/agent-status.md
- docs/agent-handoff.md
- docs/agent-messages.md
- docs/nextjs-notes.md
```

### Requested Action

```text
- QA 시 웹 PDF 뷰어에서 main PDF 프로젝트 카드 클릭이 웹 상세 페이지(`/projects/[slug]`)로 이동하는지 확인해주세요.
- QA 시 상세 PDF의 `프로젝트 목록` 클릭이 웹 메인 `/#projects`로 이동하는지 확인해주세요.
- QA 시 main PDF가 긴 단일 페이지가 아니라 여러 페이지로 나뉘어 브라우저 뷰어에서 덜 버벅이는지 확인해주세요.
```
