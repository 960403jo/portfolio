# Next.js Notes

## 2026-06-11 16:16 KST - Next.js App Agent

### 구현 요약

```text
- Next.js App Router 기반 포트폴리오 메인 페이지와 프로젝트 상세 페이지 구현
- Notion 원본 기반 프로필, 기술 스택, 프로젝트, 경력, AI workflow 데이터 반영
- 프로젝트는 대표 4개 노출, 나머지는 더보기 영역으로 분리
- 각 프로젝트 카드 클릭 시 `/projects/[slug]` 상세 페이지로 이동
- 프로젝트별 KPI 3개를 추가하고 카드/상세 페이지에 표시
- Contact 전용 섹션 제거, Footer `#contact` 영역으로 email 이동
- Back to top은 우측 하단 fixed 원형 화살표 버튼으로 구현
- 큰 섹션 타이틀은 화면에서 숨기고 badge/description 중심으로 정리
- GraphQL, Feature-Sliced Design, FSD 화면 표기 제거
- Controlled Liquid Tech 스타일 적용: glass surface, flowing band background, pill nav/button
- Header는 scroll/resize 기준 active nav item을 aria-current로 표시
- 모바일 360px/390px 최적화
```

### 주요 파일

```text
- app/page.tsx
- app/globals.css
- app/projects/[slug]/page.tsx
- src/components/layout/Header.tsx
- src/components/layout/Footer.tsx
- src/components/project/ProjectCard.tsx
- src/components/ui/SectionHeader.tsx
- src/data/portfolio.ts
- src/types/portfolio.ts
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 확인
- 모바일 390px: 수평 오버플로 없음
- 모바일 nav active: Projects, Contact 변경 확인
- Footer contact email 표시 확인
- floating back-to-top 버튼 48px 원형 확인
- 메인 프로젝트 카드 KPI 노출 확인
- 프로젝트 상세 페이지 KPI 3개 노출 확인
- 화면 노출 기준 GraphQL/FSD/Feature-Sliced 없음 확인
```

### 남은 의존성

```text
- Contact form 사용 여부 미확정
- GitHub / Blog / LinkedIn / 이력서 PDF 링크 미확정
- QA-Security Agent의 원본 기반 문구 및 보안 검토 필요
```

## 2026-06-11 16:37 KST - Next.js App Agent

### 구현 요약

```text
- Footer를 간략한 copyright + email bar 형태로 재디자인
- 프로젝트 더보기 UI를 details/summary에서 client state 버튼 구조로 변경
- 더보기 클릭 후 상단 더보기 버튼은 숨기고 더보기 목록 마지막에 접기 버튼만 표시
- Hero signal 문구를 Operational Web App, Mission-Critical UX, AI-assisted Delivery로 개선
- AI section 문구를 AI Delivery 관점으로 수정
- 특정 2개 프로젝트에 한정되어 보이던 Ownership 문구를 주요 프로젝트 전반의 메인 개발자 역할로 수정
- 화면 노출 기준 SPA 표현 제거
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 확인
- 더보기 닫힘 상태: .project-more-trigger 1개, .project-more-list 0개
- 더보기 펼침 상태: .project-more-trigger 0개, .project-collapse-button 1개, 마지막 버튼 텍스트 "접기"
- 접기 후 닫힘 상태 복귀 확인
- Footer desktop height 약 75px, copyright/email만 노출 확인
- Back-to-top button 54px 원형 확인
- 모바일 390px 수평 오버플로 없음
- 화면 텍스트 기준 SPA, React SPA 구조화, 교통·공공·스마트시티, 특정 2개 프로젝트 한정 Ownership 문구, AI Workflow 미노출 확인
```

## 2026-06-11 16:50 KST - Next.js App Agent

### 구현 요약

```text
- 전체 green palette를 기존 톤다운 mint/teal에서 electric teal + lime accent 중심으로 개선
- CSS token: paper, ink, teal, teal-dark, mint, aqua, sea, lime, shadow 계열 조정
- Hero background, header active nav, brand mark, primary CTA, dossier header의 대비와 채도 강화
- Section band, project card, KPI chip, detail page, floating top button의 accent gradient 개선
- 모바일 hero shade와 shadow도 새 palette에 맞춰 조정
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 확인
- Desktop 1440px: 수평 오버플로 없음
- Mobile 390px: 수평 오버플로 없음
- CSS token 확인: --teal #00a88f, --teal-dark #006b5d, --lime #b9f63c
- 스크린샷 확인: tmp/qa/color-refresh-hero.png, tmp/qa/color-refresh-projects.png, tmp/qa/color-refresh-mobile.png
```

## 2026-06-11 17:08 KST - Next.js App Agent

### 구현 요약

```text
- 딱딱한 박스형 디자인을 줄이기 위해 hero dossier를 하나의 큰 card에서 분리형 liquid cell 구조로 변경
- 섹션 배경에 flowing band pseudo element를 추가해 단조로운 직선 섹션감을 완화
- About/Skills/Projects/Timeline 카드에 accent rail과 staggered spacing 적용
- 대표 프로젝트 4개를 균등 2열에서 12-column 비대칭 case-study layout으로 변경
- 모바일에서는 stagger/margin을 reset해 단일 흐름으로 표시
- 한글 줄바꿈 품질을 위해 h1/h2/h3/p/li에 word-break keep-all 적용
```

### 검증

```text
- cmux split runner phase3 실행 완료
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 확인
- Desktop 1440px: 수평 오버플로 없음
- Mobile 390px: 수평 오버플로 없음
- 프로젝트 더보기 펼침 상태: 더보기 버튼 0개, 접기 버튼 1개, more list 1개 확인
- 모바일: hero dossier/project stagger margin reset 확인
- 모바일 H1: word-break keep-all / overflow-wrap break-word 적용 확인
- 스크린샷 확인: tmp/qa/fluid-final-hero.png, tmp/qa/fluid-final-projects.png, tmp/qa/fluid-final-mobile-wrap.png
```

## 2026-06-11 17:21 KST - Next.js App Agent

### 구현 요약

```text
- 사용자 피드백에 따라 접근성, 명확성, 읽기 쉬움을 우선하는 warm orange/amber palette로 전환
- CSS token을 cream paper, dark brown ink, orange/coral accent, amber highlight 기준으로 재정리
- Hero/section/card/detail/mobile 배경 장식 opacity를 낮춰 텍스트 대비와 읽기 흐름 강화
- hero h1 및 project detail h1 line-height와 크기를 조정해 큰 제목의 가독성 개선
- hero dossier의 임의 좌우 stagger 제거
- Skills/Developer signal의 임의 stagger 제거, 대표 프로젝트의 비대칭 case-study 배치만 유지
- focus-visible outline 추가로 키보드 접근성 개선
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 확인
- Desktop 1440px: 수평 오버플로 없음
- Mobile 390px: 수평 오버플로 없음
- 프로젝트 더보기 펼침 상태: 더보기 버튼 0개, 접기 버튼 1개, more list 1개 확인
- 모바일 H1: word-break keep-all 유지 확인
- CSS token 확인: --paper #fff7ef, --teal #d95f18, --teal-dark #8f3511, --lime #ffd166
- 스크린샷 확인: tmp/qa/accessible-orange-hero.png, tmp/qa/accessible-orange-about.png, tmp/qa/accessible-orange-projects.png, tmp/qa/accessible-orange-mobile.png
```

## 2026-06-11 17:33 KST - Next.js App Agent

### 구현 요약

```text
- 패널별 같은 색상 반복을 줄이기 위해 CSS panel accent 변수를 추가
- warm orange/amber를 기본으로 유지하면서 hero signal, developer card, skill panel, featured project card에 orange/blue/sage/plum/amber 보조 accent 적용
- KPI chip, card rail, icon, 하단 accent line이 각 패널 accent를 상속하도록 정리
- Hero headline에서 이름 선노출을 제거하고 더 자연스러운 소개 문장으로 변경
- 프로젝트 상세 상단의 `Stack N items` 요약 제거, 기술은 하단 기술 스택 badge list로만 표시
- 스킬 카드의 숫자 index chip 제거
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px: 수평 오버플로 없음
- Mobile 390px: 수평 오버플로 없음
- Hero headline: "복잡한 업무 화면을 쓰기 좋은 제품 흐름으로 만듭니다" 확인
- 패널 accent unique count: hero signal 3, developer card 4, skill panel 5, featured project 4
- 프로젝트 상세: `Stack N items` 미노출, detail-kpi-grid Period/Role 2개만 표시
- 스킬 섹션: .skill-panel__index 0개 확인
- 스크린샷 확인: tmp/qa/panel-variation-home.png, tmp/qa/panel-variation-detail.png, tmp/qa/panel-variation-mobile.png
```

## 2026-06-11 17:53 KST - Next.js App Agent

### 구현 요약

```text
- 제공된 Notion DB 링크에서 대표 프로젝트 5개 상세 페이지의 `[주요 업무 및 성과]` 토글 내부 내용을 추출
- 철도 기술기준·표준 개발·관리 플랫폼 상세 업무/성과 보강
- 춘천 디지털 신분증 관리자 시스템 상세 업무/성과 보강
- 군산-익산 광역BIS 및 BMS 상세 업무/성과 보강
- Lv4 대응 교통안전 인프라 표준 및 평가기술 개발 상세 업무/성과 보강
- 안양시 자율주행 시범사업 상세 업무/성과 보강
- Project 타입에 `sourceUrl` optional field 추가
- 프로젝트 상세 페이지의 Notion 상세 원본 링크를 프로젝트별 sourceUrl 우선으로 변경
- 메인 프로젝트 카드에서는 담당 업무 3개, 성과 2개까지만 preview하도록 조정
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- 대표 프로젝트 5개 상세 페이지 담당 업무/성과 list count: 6/5 확인
- 프로젝트별 sourceHref가 개별 Notion 상세 URL로 연결되는지 확인
- 화면 텍스트 기준 GraphQL, SPA 미노출 확인
- Desktop 1440px: 상세 페이지 수평 오버플로 없음
- Mobile 390px: 철도 상세 페이지 수평 오버플로 없음
- 스크린샷 확인: tmp/qa/enriched-detail-desktop.png, tmp/qa/enriched-detail-mobile.png
```

## 2026-06-11 18:15 KST - Next.js App Agent

### 구현 요약

```text
- 사용자 피드백 "디자인도 너무 구식" 반영
- app/globals.css 전역 token을 더 밝은 neutral paper, deep ink, clear orange accent 기준으로 재정리
- body/section/hero/detail의 대각선 band와 과한 gradient overlay 제거
- Header, brand mark, nav active, CTA, project-more, source-link, floating top button을 solid color와 얇은 border 중심으로 단순화
- About/Skill/Project/Timeline/Detail 카드의 반복 gradient background와 무거운 shadow 제거
- card rail과 panel accent는 유지하되 flat surface 위의 얇은 포인트로 정리
- Hero headline을 "운영의 맥락이 바로 읽히는 화면을 만듭니다"로 변경
- AI 섹션에서 내부 Agent/cmux/handoff 기반 문구를 제거하고 개인의 AI-assisted 개발 활용 방식으로 재정리
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 확인
- Chrome desktop 1440px: 수평 오버플로 없음, 대표 프로젝트 4개, KPI 12개 확인
- Chrome mobile 390px: 수평 오버플로 없음, hero headline 줄바꿈 확인
- 프로젝트 더보기 펼침: project card 10개, 더보기 버튼 미노출, 접기 버튼 노출 확인
- 프로젝트 상세 desktop 1280px: 수평 오버플로 없음, 원형 back-to-top 유지 확인
- 화면 텍스트 기준 GraphQL, Feature-Sliced Design, FSD, SPA 구조화, Stack N items, 이전 hero 문구, 내부 Agent/cmux/handoff 문구 미노출 확인
- 스크린샷 확인: tmp/qa/modern-home-desktop.png, tmp/qa/modern-home-mobile.png, tmp/qa/modern-projects-expanded.png, tmp/qa/modern-detail-desktop.png
```

## 2026-06-12 09:47 KST - Next.js App Agent

### 구현 요약

```text
- 사용자 피드백 "메인 소개 화면에 주절주절이 너무 많음" 반영
- Hero headline을 "운영이 바로 읽히는 화면을 만듭니다"로 압축
- Hero summary를 한 문장으로 축소
- Hero CTA를 3개에서 2개(대표 프로젝트, 이메일)로 축소
- 우측 Hero dossier에서 상단 제목/보조 focus 카드를 제거하고 경력/역할/강점 3개 핵심 포인트만 표시
- About SectionHeader description을 짧게 변경
- About lead card의 긴 paragraph 목록을 화면에서 제거
- Developer Value card를 4개에서 3개로 축소
- Hero height, spacing, signal card min-height를 줄여 첫 화면 정보 밀도 개선
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Chrome desktop 1440px: 수평 오버플로 없음, hero summary 48자, CTA 2개, hero signal 3개 확인
- Chrome mobile 390px: 수평 오버플로 없음, hero height 708px, signal caption 모바일 숨김 확인
- About: 긴 paragraph 0개, developer card 3개 확인
- 제거 문구 확인: 운영의 맥락, Engineering profile, 구조를 설계하는 Frontend, Verified from Notion, 개발 강점 보기 미노출
- 스크린샷 확인: tmp/qa/concise-intro-desktop.png, tmp/qa/concise-intro-mobile.png
```

## 2026-06-12 09:53 KST - Next.js App Agent

### 구현 요약

```text
- Hero headline을 "상태가 많은 화면을 명확한 흐름으로 바꿉니다"로 변경
- Hero source badge를 "실무 프로젝트 기반"으로 변경해 Notion 직접 언급 제거
- About/Skills/Projects/Experience/AI Delivery SectionHeader의 description prop 제거
- 화면에서 설명형 섹션 보조 문구가 보이지 않도록 정리
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 확인
- Chrome desktop 1440px: 수평 오버플로 없음
- Hero headline: "상태가 많은 화면을 명확한 흐름으로 바꿉니다" 확인
- Hero badge: "실무 프로젝트 기반" 확인
- section-header description count: 0 확인
- 제거 문구 확인: Verified from Notion, Notion 기반 이력, 운영이 바로 읽히는 화면, 운영의 맥락이 바로 읽히는 화면, 대표 프로젝트는 구조 설계..., 회사/기간/역할 설명 문구 미노출
- 스크린샷 확인: tmp/qa/copy-cleanup-desktop.png
```

## 2026-06-12 10:00 KST - Next.js App Agent

### 구현 요약

```text
- 메인 화면의 `합니다/습니다/입니다` 계열 설명형 문구 제거
- Hero headline을 "UI와 데이터 흐름을 잇는 프론트엔드"로 변경
- Hero summary를 "React/TypeScript 기반 지도·관제·백오피스 UI"로 축약
- Hero 강점 value를 "상태·API 정리"에서 "화면 흐름 설계"로 변경
- About title/body를 명사형 카피로 변경
- Developer Value, Skills, Experience, AI Delivery의 body/description/summary를 키워드형 문구로 변경
- Projects 더보기 보조 문구와 EmptyState 문구를 명사형으로 정리
- metadata description도 문장형 어미를 줄인 형태로 변경
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Chrome desktop 1440px: 수평 오버플로 없음
- 메인 화면 body text 기준 `합니다/습니다/입니다/됩니다/만듭니다/바꿉니다/연결합니다/설계합니다/구현합니다` 매칭 0건 확인
- Hero headline: "UI와 데이터 흐름을 잇는 프론트엔드" 확인
- Hero summary: "React/TypeScript 기반 지도·관제·백오피스 UI" 확인
- Hero signal values: 5년, 메인 개발, 화면 흐름 설계 확인
- About title/body 명사형 카피 확인
- 스크린샷 확인: tmp/qa/no-explanatory-copy-desktop.png
```

## 2026-06-12 10:19 KST - Next.js App Agent

### 구현 요약

```text
- ProjectsSection의 client state 기반 더보기/접기 구조 제거
- featuredProjects와 remainingProjects를 합쳐 전체 프로젝트 10개를 horizontal rail에 노출
- project-rail__track에 overflow-x auto, scroll-snap, fixed card column width 적용
- project-more/project-collapse 관련 미사용 CSS 제거
- ProjectCard 하단 `상세 보기` 텍스트 제거
- ProjectCard 상단 meta 우측에 ArrowUpRight 아이콘 추가
- Experience Timeline title을 `회사명 | 직책` 형식으로 변경
- Hero signal 강점을 "협업 실행력" / "일정·리뷰·요구사항 조율"로 변경
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Chrome desktop 1440px: 프로젝트 카드 10개, ArrowUpRight 10개, rail scroll 가능, 페이지 수평 오버플로 없음
- Chrome mobile 390px: 프로젝트 카드 10개, ArrowUpRight 10개, rail scroll 가능, 페이지 수평 오버플로 없음
- 더보기/접기 텍스트 미노출 확인
- `상세 보기` visible text 미노출 확인
- Hero signal: 협업 실행력 / 일정·리뷰·요구사항 조율 확인
- Experience title: `(주)엠큐닉 | 과장`, `네이버시스템(주) | 선임 연구원` 확인
- 스크린샷 확인: tmp/qa/project-rail-desktop.png, tmp/qa/project-rail-mobile.png, tmp/qa/collaboration-signal-project-arrow.png
```

## 2026-06-12 10:50 KST - Next.js App Agent

### 구현 요약

```text
- 프로젝트 더보기 버튼을 82x40px 소형 pill로 축소
- 더보기 열린 UI를 absolute overlay에서 안정적인 side column/panel 구조로 변경
- 열린 패널의 상단 X/더보기 버튼 영역 제거, 하단 `접기` 버튼만 노출
- 우측 패널 compact project card에서 KPI 1개와 태그 일부만 노출해 목록 밀도 조정
- Skills에 Version / Collaboration 그룹 추가
- Version / Collaboration 스킬 항목: GitLab, Bitbucket, SVN, Jira, Confluence, Slack
- 마지막 영역에 Q&A InterviewSection 추가
- Q&A 항목: 프론트엔드 개발자가 된 이유, 업무에서 가장 중요한 기준, 역량을 키우는 방식
- Header navigation에 Q&A anchor 추가
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Browser 플러그인 백엔드가 비어 있어 로컬 Google Chrome + Playwright headless로 검증
- Desktop 1440px: 더보기 버튼 82x40px, 클릭 전 panel 미노출, 대표 프로젝트 4개 확인
- Desktop 1440px: 클릭 후 panel width 360px, 우측 container 내부 배치, 추가 프로젝트 6개, 하단 `접기`, 상단 close 버튼 없음, 수평 오버플로 없음
- Mobile 390px: 클릭 후 panel open, 추가 프로젝트 6개, trigger 미노출, `접기` 노출, 수평 오버플로 없음
- Skills: Version / Collaboration 그룹과 GitLab, Bitbucket, SVN, Jira, Confluence, Slack 노출 확인
- Q&A: 3개 카드 노출 확인
- 스크린샷 확인: tmp/qa/more-panel-qna-desktop.png, tmp/qa/more-panel-qna-mobile.png
```

## 2026-06-12 10:59 KST - Next.js App Agent

### 구현 요약

```text
- Q&A 답변을 짧은 키워드형에서 원문 문단형으로 확장
- InterviewQna 타입을 `emphasis` + `paragraphs` 구조로 변경
- InterviewSection을 질문 영역과 답변 영역이 분리된 document interview layout으로 변경
- About/Skills/Projects/Experience/AI Delivery/Q&A에 section-specific class 추가
- About: dark positioning board + 우측 signal list
- Skills: 12-column mosaic matrix, Frontend 강조 패널
- Projects: framed case board + right more panel
- Experience: vertical timeline line layout
- AI Delivery: dark process rail + numbered workflow cards
- Q&A: full-width document interview list
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px: About 2-column positioning board, Skills 12-column matrix, Projects framed board, Experience vertical timeline, AI dark process rail, Q&A document interview 확인
- Desktop 1440px: 수평 오버플로 없음
- Mobile 390px: Skills 1-column, AI steps 1-column, Q&A 1-column, 수평 오버플로 없음
- Q&A 원문형 문구 `Spring 기반 JSP로 웹 개발을 시작했지만`, `빠르게 변화하는 기술을 두려워하기보다 즐기며` 노출 확인
- 스크린샷 확인: tmp/qa/section-variety-desktop.png, tmp/qa/section-variety-mobile.png
```

## 2026-06-12 11:47 KST - Next.js App Agent

### 구현 요약

```text
- 프로젝트 더보기 버튼을 grid column에서 absolute overlay로 변경해 대표 프로젝트 영역을 차지하지 않도록 수정
- 더보기 panel을 760px overlay popup으로 확대
- 더보기 panel 내부 project card를 desktop 2열, mobile 1열로 조정
- 더보기 panel card h3/body font size와 padding을 키워 텍스트 눌림 완화
- Experience TimelineItem을 좌측 기간 레일 + 우측 본문 구조로 변경
- 기간 레일은 start/end period를 분리해 표시하며 end가 없으면 `현재`로 표시
- AI Delivery 좌측 icon 크기를 74px에서 52px로 축소
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px: project grid width 1126px, showcase inner width 1128px로 더보기 버튼이 영역 차지하지 않음 확인
- Desktop 1440px: 더보기 trigger 82x40px, overlay 위치 정상, 수평 오버플로 없음
- Desktop 1440px: click 후 panel width 760px, card width 353px, side panel card 6개, 2열 배치, title/card clipping 0건
- Desktop 1440px: Experience item columns 112px/734px, period rail이 content 왼쪽에 위치
- Desktop 1440px: AI Delivery icon 52x52px, workflow columns 96px/994px
- Mobile 390px: panel width 340px, card width 304px, Experience columns 72px/240px, AI icon 52px, 수평 오버플로 없음
- 스크린샷 확인: tmp/qa/project-overlay-experience-ai-desktop.png, tmp/qa/project-overlay-experience-ai-mobile.png
```

## 2026-06-12 11:50 KST - Next.js App Agent

### 모바일 CSS 검증

```text
- Chrome headless + Google Chrome executable로 모바일 360px, 390px, 430px viewport 검증
- 360px: document scrollWidth 360px, body overflow false, 주요 섹션 overflow 0건
- 390px: document scrollWidth 390px, body overflow false, 주요 섹션 overflow 0건
- 430px: document scrollWidth 430px, body overflow false, 주요 섹션 overflow 0건
- Header, Hero, About, Skills, Projects, Experience, AI Delivery, Q&A, Footer container width 정상
- 더보기 popup open 상태 검증: 360px panel 310px/card 274px, 390px panel 340px/card 304px, 430px panel 380px/card 344px
- 더보기 popup title/card clipping 0건
- 텍스트 clipping 탐지 항목은 sr-only heading만 해당, 실제 visible UI clipping 없음
- 스크린샷 확인: tmp/qa/mobile-css-360.png, tmp/qa/mobile-css-390.png, tmp/qa/mobile-css-430.png
```

## 2026-06-12 13:21 KST - Next.js App Agent

### 구현 요약

```text
- 프로젝트 더보기 popup의 `접기` 버튼을 우측 상단 header 영역으로 이동
- popup 하단 접기 버튼 제거
- popup 내부 프로젝트 카드 hover/focus 시 grid-column 전체 폭으로 확장
- hover/focus 상태에서 숨겨진 KPI/tag 항목을 추가 노출
- Experience timeline을 전역 카드 장식에서 분리해 기간 카드, 중앙 레일, 콘텐츠 카드 구조로 재정렬
- 모바일 Experience는 좌측 레일 + 상단 기간 pill + 콘텐츠 카드 구조로 변경해 날짜와 본문 겹침 제거
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px: Experience 수평 오버플로 0건, 텍스트 clipping 0건, period/content columns 132px/814px
- Mobile 390px: Experience 수평 오버플로 0건, 텍스트 clipping 0건, 기간 pill과 콘텐츠 카드 분리 확인
- Desktop popup: `접기` 버튼이 panel top 안에 있고 하단 direct collapse button 0개
- Desktop popup hover: card width 720px / scroll width 724px, KPI 3개, tag 9개 노출, clipping 0건
- Mobile popup: panel width 340px, card width 304px, 상단 `접기` 버튼 노출, clipping 0건
- 스크린샷 확인: tmp/qa/experience-desktop-after.png, tmp/qa/experience-mobile390-after.png, tmp/qa/project-popup-desktop-after.png, tmp/qa/project-popup-mobile390-after.png
```

## 2026-06-12 13:34 KST - Next.js App Agent

### 구현 요약

```text
- 프로젝트 카드 hover/focus z-index 적용: featured card 6, popup card 20
- 용인서울고속도로, 진주시, Lv4 대응 교통안전 인프라 표준 프로젝트 role을 Front End / Back End로 수정
- Skills desktop layout을 3열 균등 grid로 변경해 Version / Collaboration을 AI Development 옆에 배치
- Experience timeline marker를 CSS 변수 기반으로 line center와 period card/pill center에 정렬
- Q&A 질문을 `업무 진행 시 가장 중요한 포인트`로 변경
- 대표 프로젝트 메인 카드에서 `성과` preview 제거, 상세 페이지 `성과와 경험` 유지
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Featured project hover z-index 6 확인
- Popup card hover z-index 20, 전체 폭 확장 확인
- Skills: Version / Collaboration card x=923, y=478로 AI Development 옆 배치 확인
- Experience desktop marker deltaX 0, period centerY와 dot centerY 일치
- Experience mobile marker deltaX 0, period centerY와 dot centerY 차이 1px 이내
- traffic-safety-infra, yongin-seoul-toll-system, jinju-transport-support 상세 role Front End / Back End 확인
- 대표 프로젝트 card h4는 담당 업무만 노출, 성과 heading 0건
- 상세 페이지 `성과와 경험` 유지 확인
- Q&A 문구 `업무 진행 시 가장 중요한 포인트` 노출 확인
- 스크린샷 확인: tmp/qa/skills-inline-collaboration.png, tmp/qa/experience-dot-aligned.png, tmp/qa/experience-dot-aligned-mobile.png, tmp/qa/projects-no-outcomes-hover-layer.png
```

## 2026-06-12 13:38 KST - Next.js App Agent

### 구현 요약

```text
- 추가 프로젝트 hover 확장을 grid-column 재배치 방식에서 위치 고정 overlay 확장 방식으로 변경
- 왼쪽 열 hover card는 오른쪽으로 전체 폭 확장
- 오른쪽 열 hover card는 translateX로 왼쪽 확장해 hover 위치가 풀리지 않게 처리
- 모바일 1열에서는 hover width 확장을 비활성화해 수평 overflow 방지
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- 추가 프로젝트 6개 카드별 hover 테스트 완료
- 6개 카드 모두 isHovered true, z-index 20, widthDelta 4px, clipped 0건
- 6개 카드 모두 overflowLeft false, overflowRight false, topElementIsCard true
- 오른쪽 열 카드 transform matrix translateX -367px 적용 확인
- Mobile 390px: popup card 304px, scroll 308px, panel 340px, document overflowX 0
- 스크린샷 확인: tmp/qa/project-popup-hover-card-1.png ~ tmp/qa/project-popup-hover-card-6.png, tmp/qa/project-popup-hover-mobile-stable.png
```

## 2026-06-12 13:46 KST - Next.js App Agent

### 구현 요약

```text
- 프로젝트 상세 페이지에서 `Notion 상세 원본` 외부 링크 버튼 제거
- detail side panel을 기술 스택만 담는 2열 구조로 정리
- 추가 프로젝트 panel card에 width/max-width/transform transition 추가
- 왼쪽 카드도 오른쪽 카드와 동일한 동적 확장감을 갖도록 hover animation 보강
- Skills desktop layout을 Frontend left-large emphasis + right-aligned skill cards 구조로 변경
- nav label과 section eyebrow의 `Experience` 표기를 `커리어`로 변경
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- 상세 페이지: `Notion 상세 원본` 미노출, .source-link 0건
- Skills: Frontend card 475x698px left emphasis, 나머지 5개 card right area 정렬 확인
- Header nav: About, Skills, Projects, 커리어, AI Delivery, Q&A, Contact 확인
- Body visible text 기준 `Experience` 미노출, `커리어` 노출 확인
- 추가 프로젝트 6개 카드 재검증: 모두 isHovered true, width 720px, z-index 20, topElementIsCard true
- 추가 프로젝트 card transition property: width, max-width, box-shadow, transform, border-color 확인
- Mobile 390px: popup overflowX 0, panel 340px/card 304px 확인
- 스크린샷 확인: tmp/qa/skills-frontend-emphasis-right-aligned.png, tmp/qa/project-popup-left-right-same-effect.png, tmp/qa/project-detail-no-notion-source.png
```

## 2026-06-12 13:59 KST - Next.js App Agent

### 구현 요약

```text
- 외부 TASC 프로젝트(`/Volumes/Data/joinseong/000.source/005.TASC/tasc-platform`)의 하네스 방식 확인
- 확인 항목: eslint.config.js의 harness custom rule, ComponentManualView의 migration/completion checklist, package script의 lint/build/test/e2e/env check
- AI Delivery body를 컴포넌트 매뉴얼, 커스텀 lint rule, 테스트 명령을 하네스처럼 묶는 방식으로 변경
- AI Delivery steps를 요구사항 분해, 기존 구현 참조, ESLint rule 강제, lint/build/test/e2e/env 검증, 매뉴얼 재사용 흐름으로 재정리
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px AI Delivery: `하네스`, `ESLint`, `test:run` 노출, step count 5, clipping 0건, overflowX 0
- Mobile 390px AI Delivery: `하네스`, `ESLint`, `test:run` 노출, step count 5, clipping 0건, overflowX 0
- 스크린샷 확인: tmp/qa/ai-delivery-harness-desktop.png, tmp/qa/ai-delivery-harness-mobile390.png
```

## 2026-06-12 15:54 KST - Next.js App Agent

### 구현 요약

```text
- Projects 더보기 popup을 복잡한 2열/hover 확장형 카드에서 1열 flex list로 단순화
- desktop popup width 640px, mobile 390px popup width 340px 기준으로 정리
- popup compact card에서 KPI와 담당업무 preview 제거
- popup compact card 기술 태그를 최대 4개로 제한
- hover/focus 시 full-width 확장, translateX, z-index 상승 제거
- hover/focus는 border/shadow만 반응하도록 변경해 카드 겹침과 포인터 가로막힘 제거
- popup 카드 여백, meta, title, description, tag 간격을 줄여 빠르게 훑는 추가 프로젝트 리스트로 조정
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px: panel width 640px, card width 608px, scroll display flex/flex-direction column
- Desktop 1440px: 추가 프로젝트 card 6개, KPI 0건, 담당업무 detail 0건, max badge 4개
- Desktop 1440px: card title/description clipping 0건, document overflowX 0
- Desktop 1440px: 6개 card hover 시 width 변화 없음, transform none, z-index 0, centerHit 현재 card
- Mobile 390px: panel width 340px, card width 308px, scroll display flex/flex-direction column
- Mobile 390px: 추가 프로젝트 card 6개, KPI 0건, 담당업무 detail 0건, max badge 4개
- Mobile 390px: card title/description clipping 0건, document overflowX 0
- Mobile 390px: 6개 card hover 시 width 변화 없음, transform none, z-index 0, centerHit 현재 card
- 스크린샷 확인: tmp/qa/project-popup-simplified-desktop.png, tmp/qa/project-popup-simplified-mobile.png
```

## 2026-06-12 16:22 KST - Next.js App Agent

### 구현 요약

```text
- React Compiler 적용
- next.config.ts에 `reactCompiler: true` 추가
- `babel-plugin-react-compiler@1.0.0` devDependency 추가
- `ScrollReveal` client component 추가
- IntersectionObserver 기반으로 section header, About, Skills, Projects, Career, AI Delivery, Q&A reveal 처리
- fade/slide/scale/stagger를 약하게 적용하고 기존 hover transform과 충돌하지 않도록 CSS `translate`/`scale` 속성 사용
- Career timeline dot은 item reveal 시 opacity/scale 활성화
- AI Delivery step은 item reveal 시 border/background 활성화
- 모바일은 reveal 이동 거리 축소
- `prefers-reduced-motion: reduce`에서는 scroll-behavior/reveal transition 비활성화 및 콘텐츠 즉시 표시
```

### 검증

```text
- npm run lint
- npm run build
- `npm ls babel-plugin-react-compiler --depth=0` 확인: 1.0.0
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px: incremental scroll 후 scroll-reveal 30개 중 30개 is-visible, hidden 0, overflowX 0, console error 0
- Mobile 390px: incremental scroll 후 scroll-reveal 30개 중 30개 is-visible, hidden 0, overflowX 0, console error 0
- Mobile 390px reduced-motion: 최초 로드 후 scroll-reveal 30개 즉시 is-visible, hidden 0, overflowX 0
- 스크린샷 확인: tmp/qa/scroll-reveal-incremental-desktop.png, tmp/qa/scroll-reveal-incremental-mobile.png
```

## 2026-06-12 16:28 KST - Next.js App Agent

### 구현 요약

```text
- ScrollReveal one-shot 동작 수정
- IntersectionObserver를 첫 진입 후 해제하지 않고 유지
- viewport 이탈 시 is-visible 제거, 재진입 시 is-visible 재적용
- rootMargin을 `0px 0px -8% 0px`로 조정해 화면 진입 타이밍 보정
- Skills의 AI Development 카드 제거
- Skills 노출 카드: Frontend, Backend, Database / Cloud, DevOps, Version / Collaboration
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px: Skills 진입 1회차 firstSkillVisible true
- Desktop 1440px: Projects 진입 후 firstSkillVisible false
- Desktop 1440px: Skills 재진입 2회차 firstSkillVisible true
- Desktop 1440px: About 재진입 aboutCardVisible true
- Desktop 1440px: Skills title 5개만 노출, AI Development 미노출, 하네스 카드 문구 미노출
- Mobile 390px: Skills title 5개만 노출, AI Development 미노출, overflowX 0
- console error 0건
- 스크린샷 확인: tmp/qa/scroll-repeat-skills-no-ai-card-desktop.png, tmp/qa/scroll-repeat-skills-no-ai-card-mobile.png
```

## 2026-06-15 09:52 KST - Next.js App Agent

### 구현 요약

```text
- Hero 강점 signal을 `협업 조율` / `일정·리뷰·요구사항 조율`에서 `화면 완성도` / `상태·API·인터랙션 연결`로 변경
- 프론트엔드 개발자로서 화면 상태, API 연결, 인터랙션 완성도를 함께 묶는 강점으로 정리
- 추가 프로젝트 더보기 panel 내부 compact card의 period/role label, tech badge, arrow accent를 어두운 회색 계열로 분리
- 더보기 panel만 별도 CSS 변수(`--project-panel-gray`)를 사용해 대표 프로젝트 warm orange accent와 시각적 구분 유지
```

### 검증

```text
- npm run lint
- npm run build
- production server http://127.0.0.1:3005 재시작 확인
- Desktop 1440px: Hero `화면 완성도` 노출, 기존 `협업 조율`/`일정·리뷰·요구사항 조율` 미노출
- Desktop 1440px: 추가 프로젝트 panel card 6개, dark gray label/role/badge/arrow accent 적용, overflowX 0
- Mobile 390px: Hero `화면 완성도` 노출, 기존 문구 미노출, 추가 프로젝트 panel dark gray label tone 유지, overflowX 0
- 스크린샷 확인: tmp/qa/project-gray-labels-hero-strength-desktop.png, tmp/qa/project-gray-labels-hero-strength-mobile.png
```

## 2026-06-15 12:24 KST - Next.js App Agent

### 구현 요약

```text
- Hero 우측 핵심 포인트의 세 번째 label을 `강점`에서 `품질 기준`으로 변경
- 세 번째 포인트는 `품질 기준` / `화면 완성도` / `상태·API·인터랙션 연결`로 정리
- Hero dossier 접근성 label을 `핵심 강점`에서 `핵심 정보`로 변경
```

### 검증

```text
- npm run lint
- npm run build
- Desktop 1440px: Hero signal label `품질 기준` 노출, `강점` label 미노출
- Mobile 390px: Hero signal label `품질 기준` 노출, `강점` label 미노출, overflowX 0
- 기존 `협업 조율`/`일정·리뷰·요구사항 조율` 미노출
- 스크린샷 확인: tmp/qa/hero-quality-signal-desktop.png, tmp/qa/hero-quality-signal-mobile.png
```

## 2026-06-15 15:11 KST - Next.js App Agent

### 구현 요약

```text
- Hero 우측 핵심 포인트의 세 번째 label을 `품질 기준`에서 `주요 경험`으로 변경
- 세 번째 포인트는 `주요 경험` / `지도·관제·백오피스 UI` / `운영형 화면 중심`으로 정리
- 모바일 Hero signal caption 숨김 규칙을 해제해 `운영형 화면 중심`도 노출
```

### 검증

```text
- npm run lint
- npm run build
- Desktop 1440px: Hero signal label `주요 경험` 노출, value `지도·관제·백오피스 UI` 노출
- Mobile 390px: Hero signal label `주요 경험` 노출, value `지도·관제·백오피스 UI` 노출, caption `운영형 화면 중심` 노출, overflowX 0
- 기존 `품질 기준`/`화면 완성도`/`상태·API·인터랙션 연결` 미노출
- 스크린샷 확인: tmp/qa/hero-main-experience-desktop.png, tmp/qa/hero-main-experience-mobile.png
```

## 2026-06-15 15:51 KST - Next.js App Agent

### 배포 요약

```text
- GitHub repository: https://github.com/960403jo/portfolio
- Vercel project: joinseong-s-projects/portfolio
- Production URL: https://portfolio-ashy-five-87.vercel.app
- GitHub repository connection: Connected
- Production env: NEXT_PUBLIC_SITE_URL=https://portfolio-ashy-five-87.vercel.app
```

### 검증

```text
- npm run lint
- npm run build
- npx vercel deploy --prod --yes
- Production URL HTTP 200 OK
- sitemap.xml loc이 production URL 기준으로 생성됨
- robots.txt Sitemap이 production URL 기준으로 생성됨
- Desktop 1440px production render: Hero `경력 / 역할 / 주요 경험`, overflowX 0, console error 0
- Mobile 390px production render: Hero `경력 / 역할 / 주요 경험`, caption `운영형 화면 중심`, overflowX 0, console error 0
- 스크린샷 확인: tmp/qa/vercel-production-desktop.png, tmp/qa/vercel-production-mobile.png
```

## 2026-06-15 15:56 KST - Next.js App Agent

### 구현 요약

```text
- Header nav label `커리어`를 `Career`로 변경
- Experience section eyebrow `커리어`를 `Career`로 변경
```

### 검증

```text
- npm run lint
- npm run build
- Desktop 1440px local render: nav `Career` 노출, section eyebrow `Career` 노출, `커리어` 미노출, overflowX 0, console error 0
- Mobile 390px local render: nav `Career` 노출, section eyebrow `Career` 노출, `커리어` 미노출, overflowX 0, console error 0
- 스크린샷 확인: tmp/qa/career-label-desktop.png, tmp/qa/career-label-mobile.png
```

## 2026-06-15 16:06 KST - Next.js App Agent

### 구현 요약

```text
- Header nav에서 Contact 제거
- Footer contact 영역과 `#contact` target 제거
- Footer는 copyright와 back-to-top 버튼만 유지
- Hero 이메일 CTA는 클릭 시 `이메일` 텍스트가 `joinsseong@gmail.com`으로 변경되는 button으로 구현
- Header Q&A 클릭 시 하단 Contact active 보정이 끼어들지 않도록 active section 로직 수정
- section/footer scroll-margin-top 추가로 fixed header 기준 anchor 이동 보정
```

### 검증

```text
- npm run lint
- npm run build
- Desktop 1440px local render: nav Contact 미노출, `#contact` target 미노출, 이메일 button `이메일` -> `joinsseong@gmail.com`, Q&A click active `Q&A`, hash `#interview`, overflowX 0, console error 0
- Mobile 390px local render: nav Contact 미노출, `#contact` target 미노출, 이메일 button `이메일` -> `joinsseong@gmail.com`, Q&A click active `Q&A`, hash `#interview`, overflowX 0, console error 0
- 스크린샷 확인: tmp/qa/qna-email-contact-removed-desktop.png, tmp/qa/qna-email-contact-removed-mobile.png
```

## 2026-06-15 16:17 KST - Next.js App Agent

### 구현 요약

```text
- Skills 섹션 데스크톱 12-column grid에서 DevOps와 Version / Collaboration 카드 폭 조정
- DevOps는 3컬럼, Version / Collaboration은 4컬럼으로 배치해 Frontend 오른쪽 두 번째 줄의 남은 7컬럼을 모두 사용
- 기존 모바일/태블릿 breakpoint에서는 auto 배치를 유지해 2열/1열 흐름 보존
```

### 검증

```text
- npm run lint
- npm run build
- 현재 빌드 서버 http://127.0.0.1:3006 확인
- Desktop 1440px: Skills DevOps/Version Collaboration 같은 행, 우측 gap 0px, overflowX 0, console error 0
- Tablet 1024px: Skills 2열 흐름 유지, overflowX 0, console error 0
- Mobile 390px: Skills 1열 흐름 유지, overflowX 0, console error 0
```
