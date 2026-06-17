# Agent Handoff

## 목적

Agent 간 전달사항을 기록한다.

## 작성 규칙

```text
- 전달하는 Agent와 받는 Agent를 명확히 적는다.
- 필요한 파일, 타입, API, Supabase 테이블, 환경변수를 구체적으로 적는다.
- 불확실한 내용은 open-questions.md에도 기록한다.
```

---

## Notion Analysis Agent → Planning Agent

### 전달사항

```text
- 
```

### 확인 필요

```text
- 
```

---

## Planning Agent → Next.js App Agent

### 전달사항

```text
- 사이트맵:
- 페이지 구조:
- 컴포넌트 구조:
- 디자인 방향:
- SEO 기준:
```

---

## Planning Agent → Supabase Agent

### 전달사항

```text
- Supabase 사용 여부:
- Contact form 필요 여부:
- Storage 필요 여부:
- Auth 필요 여부:
```

---

## Supabase Agent → Next.js App Agent

### 전달사항

```text
- 테이블:
- 컬럼:
- RLS 정책:
- Storage bucket:
- 환경변수:
```

### Type Hint

```ts
// 필요 시 작성
```

---

## Next.js App Agent → QA-Security Agent

### 전달사항

```text
- 구현 페이지: `/`, `/projects/[slug]`, `/api/portfolio-pdf-zip`
- 구현 컴포넌트: Header, Footer, Container, HeroSection, AboutSection, SkillsSection, ProjectsSection, ExperienceSection, AIWorkflowSection, InterviewSection, ProjectCard, TimelineItem, ButtonLink, Badge, EmptyState, SectionHeader, ScrollReveal
- 데이터 파일: src/data/portfolio.ts, src/lib/projects.ts
- 타입 파일: src/types/portfolio.ts
- GitHub: `https://github.com/960403jo/portfolio` public repository 생성 및 main branch push 완료
- Vercel: `joinseong-s-projects/portfolio` project 생성, GitHub repository 연결 완료, production 배포 완료
- Production URL: `https://portfolio-ashy-five-87.vercel.app`
- Vercel env: `NEXT_PUBLIC_SITE_URL=https://portfolio-ashy-five-87.vercel.app` production 설정 후 재배포 완료
- Next 설정: `next.config.ts`에서 `reactCompiler: true` 활성화. `babel-plugin-react-compiler` 1.0.0을 devDependency로 추가
- 프로젝트 표시: 기존 대표 4개 비대칭 그리드 디자인 유지. 더보기 버튼은 프로젝트 그리드 영역을 차지하지 않는 absolute overlay pill로 배치. 클릭 시 나머지 6개 프로젝트가 데스크톱 640px, 모바일 340px 기준의 우측 overlay panel로 열림. 패널 내부는 flex column 1열 compact card 리스트로 단순화. 열린 패널에서는 `접기` 버튼을 우측 상단에 노출하고 하단 접기 버튼은 제거. 패널 compact card는 KPI/담당업무 preview를 숨기고 기술 태그는 최대 4개만 표시. 패널 compact card의 기간/role/tech badge/arrow/left rail은 대표 프로젝트 accent와 분리해 어두운 회색 라벨 톤으로 표시. 패널 카드 hover/focus는 폭 확장, translateX, z-index 상승 없이 border/shadow만 반응해 카드 겹침과 포인터 가로막힘을 방지. 대표 프로젝트 카드 hover/focus는 z-index 6으로 다른 카드에 가려지지 않게 처리. 프로젝트 카드 하단 `상세 보기` 텍스트는 제거하고 상단 우측 ArrowUpRight 아이콘으로 상세 이동 표시. 대표 프로젝트 메인 카드에는 `담당 업무` preview만 노출하고 `성과` preview는 상세 페이지에서만 노출
- 프로젝트 상세: slug 기반 SSG, KPI 3개, 담당 업무, 성과와 경험, 기술 스택 badge list 표시. `Notion 상세 원본` 외부 링크 버튼은 제거. 상단 핵심 정보는 Period/Role만 표시하고 `Stack N items` 요약 제거
- PDF: 전용 `/pdf` 화면과 프로젝트별 `/projects/[slug]/pdf` 화면은 제거. 실제 사용자 다운로드 흐름은 footer `PDF 다운로드` 버튼 하나로 정리했고, `/api/portfolio-pdf-zip`에서 Puppeteer + headless Chromium으로 현재 HTML 라우트(`/`, `/projects/[slug]`)를 그대로 print-to-PDF 출력해 메인 PDF 1개와 프로젝트 상세 PDF 10개를 zip으로 반환. Footer 버튼은 클라이언트 컴포넌트로 `PDF 생성 중...` 상태를 표시하고 blob 다운로드를 실행. Hero `PDF 저장` CTA와 프로젝트 상세 `프로젝트 PDF` 버튼은 제거
- 상세 콘텐츠: 제공된 Notion DB에서 대표 프로젝트 5개(철도, 춘천 디지털 신분증, 군산-익산 BIS/BMS, Lv4 교통안전 인프라, 안양 자율주행)의 `[주요 업무 및 성과]` 토글 내부까지 추출해 담당 업무 6개/성과 5개 중심으로 정리
- 스타일: modern editorial warm orange palette. 대각선 band, 반복 그라디언트 카드, 무거운 shadow를 제거하고 flat surface, 얇은 border, 명확한 orange accent, restrained panel accent system(orange/blue/sage/plum/amber) 중심으로 정리. About/Skills/Projects/Experience/AI Delivery/Q&A가 같은 카드 반복으로 보이지 않도록 section-specific layout 적용
- 모바일: Header 52px, nav 가로 스크롤, active menu aria-current, 프로젝트 카드 상세 목록 모바일 숨김
- Contact: Header nav와 Footer contact 영역 제거. Footer는 copyright와 back-to-top만 유지. Hero 이메일 CTA는 클릭 시 `이메일` 텍스트가 `joinsseong@gmail.com`으로 변경
- Back to top: 우측 하단 fixed 원형 화살표 버튼
- Hero/About 문구: Hero headline은 "UI와 데이터 흐름을 잇는 프론트엔드"로 변경. Hero badge는 "실무 프로젝트 기반"으로 변경해 Notion 직접 언급 제거. Hero summary는 "React/TypeScript 기반 지도·관제·백오피스 UI". CTA는 대표 프로젝트/이메일 reveal 2개, 우측 핵심 포인트는 경력/역할/주요 경험 3개만 표시. 역할 value는 "프론트엔드 개발", caption은 "React·TypeScript UI". 주요 경험 value는 "지도·관제·백오피스 UI", caption은 "운영형 화면 중심". About 소개 문단은 화면에서 제거하고 Developer Value를 3개 핵심 카드로 축소
- Hero profile: 공개 Notion 페이지의 `프로필사진_조인성.jpg`를 추출하고 배경 제거 후 `public/images/profile/joinseong-profile-hero.webp`로 저장. 선명한 프로필 카드 노출은 제거하고 Hero 배경 레이어 `hero-portrait-bg`로 배치. 최신 피드백 기준으로 opacity 1, filter none, mask none, glow pseudo display none으로 조정해 투명도/blur 효과 없이 노출. 모바일은 선명 이미지가 헤드라인과 직접 겹치지 않도록 top 300px로 하향 조정
- Skills: AI Development 카드는 제거. Frontend, Backend, Database / Cloud, DevOps, Version / Collaboration 5개 그룹 노출. Version / Collaboration에는 GitLab, Bitbucket, SVN, Jira, Confluence, Slack 노출. 데스크톱에서는 Frontend를 왼쪽 대형 강조 카드로 배치하고 나머지 스킬을 오른쪽 영역에 정렬. DevOps와 Version / Collaboration은 두 번째 줄의 남은 폭을 모두 채워 우측 빈 영역이 생기지 않도록 span 조정
- Q&A: 마지막 영역에 InterviewSection 추가. 프론트엔드 전환 이유, 업무에서 중요한 기준, 역량을 키우는 방식 3개 카드 노출. 사용자가 제공한 원문 답변을 잘라낸 키워드형이 아니라 문단형 인터뷰 노트로 확장
- Section-specific design: About은 dark positioning board, Skills는 12-column mosaic matrix, Projects는 framed case board + right panel, Experience는 vertical timeline, AI Delivery는 dark process rail, Q&A는 document interview list 형태
- SectionHeader: About/Skills/Projects/Experience/AI Delivery의 보조 설명 문구를 제거하고 eyebrow badge만 노출
- Copy tone: 메인 화면 기준 `합니다/습니다/입니다` 계열 설명형 문구 제거, 키워드/명사형 카피 중심
- Career: 화면 노출 표기는 영문 `Career`. Timeline title은 `회사명 | 직책` 형식으로 표시. 데스크톱은 좌측 기간 카드, 중앙 레일, 우측 콘텐츠 카드로 분리해 같은 기준선에 정렬. 원형 마커는 CSS 변수 기반으로 레일 중앙과 기간 카드 중앙에 맞춤. 모바일은 좌측 레일과 상단 기간 pill, 하단 콘텐츠 카드 구조로 날짜/본문 겹침 없이 노출하며 원형 마커를 기간 pill 중앙에 정렬
- Project role correction: `traffic-safety-infra`, `yongin-seoul-toll-system`, `jinju-transport-support` role은 `Front End / Back End`
- Q&A copy: 두 번째 질문은 `업무 진행 시 가장 중요한 포인트`
- AI 문구: AI 섹션은 내부 Agent/cmux/handoff 기준 표현을 제거하고 개인의 AI-assisted 개발 활용 방식으로 재정리. TASC 프로젝트(`/Volumes/Data/joinseong/000.source/005.TASC/tasc-platform`) 확인 결과를 반영해 컴포넌트 매뉴얼, 커스텀 ESLint rule, `lint`/`build`/`test:run`/e2e/env check를 하네스처럼 묶어 AI 초안을 검증하는 방식으로 정리
- Ownership 문구: 특정 2개 프로젝트 한정 표현을 제거하고 주요 프로젝트 전반의 메인 개발자 역할로 정리
- 제거 표기: GraphQL, Feature-Sliced Design, FSD, SPA 화면 노출 없음
- 큰 섹션 타이틀: SectionHeader h2는 sr-only 처리
- 텍스트 줄바꿈: h1/h2/h3/p/li에 word-break keep-all 적용
- 스크롤 이펙트: `src/components/ui/ScrollReveal.tsx`에서 IntersectionObserver 기반 reveal 처리. SectionHeader, About signal, Skills, Projects card, Career timeline, AI Delivery step, Q&A card에 fade/slide/scale/stagger 적용. viewport 이탈 시 is-visible을 해제하고 재진입 시 다시 reveal. 모바일은 이동 거리 축소, `prefers-reduced-motion: reduce`에서는 모든 reveal 즉시 표시
- 테스트 명령: npm run lint, npm run build
- 브라우저 확인: production server http://127.0.0.1:3005, 현재 빌드 확인 server http://127.0.0.1:3006, 모바일 360px/390px/430px 기준 수평 오버플로 없음, 주요 섹션 overflow 0건, active menu Projects/Q&A 변경 확인, Q&A 클릭 시 hash `#interview`와 active `Q&A` 유지 확인, Header nav Contact 미노출, `#contact` target 미노출, Hero 이메일 버튼 클릭 전 `이메일`/클릭 후 `joinsseong@gmail.com` 확인, Hero `주요 경험` / `지도·관제·백오피스 UI` / `운영형 화면 중심` 노출 및 이전 `품질 기준`/`화면 완성도`/`협업 조율`/`일정·리뷰·요구사항 조율`/`강점` label 미노출, 대표 프로젝트 4개 기본 노출, 더보기 클릭 전 panel 미노출/overlay trigger 노출, 더보기 클릭 후 panel 6개 카드 노출, 데스크톱 panel width 640px/card width 608px, 모바일 390px panel width 340px/card width 308px, panel scroll display flex/flex-direction column, 추가 프로젝트 label/role/badge/arrow color rgb(52,57,65)/rgb(96,104,115) dark gray 계열 확인, panel card title/description clipping 0건, 우측 상단 `접기` 버튼 노출, 하단 접기 버튼 미노출, compact card KPI 0건/담당업무 detail 0건/기술 태그 최대 4개, 추가 프로젝트 6개 카드별 hover 시 width 변화 없음/transform none/z-index 0/centerHit 현재 카드/overflow false, featured hover z-index 6, 대표 카드 `성과` heading 0건/상세 페이지 `성과와 경험` 유지, 상세 페이지 `Notion 상세 원본` 미노출/source-link 0건, Skills에서 Frontend 왼쪽 대형 카드와 나머지 오른쪽 정렬 확인, Skills 데스크톱 1440px에서 DevOps/Version Collaboration 두 번째 줄 우측 gap 0px 확인, Skills title은 Frontend/Backend/Database / Cloud/DevOps/Version / Collaboration 5개만 노출, AI Development 및 하네스 카드 문구 미노출, `Career` 화면 노출 및 `커리어` 미노출, Career desktop/mobile 원형 마커 deltaX 0 및 period centerY 기준 0~1px 이내, Career desktop/mobile 수평 오버플로 0건 및 텍스트 clipping 0건, Career 좌측 기간 레일/모바일 기간 pill 노출, AI Delivery 하네스 문구(`하네스`, `ESLint`, `test:run`) 노출 및 desktop/mobile clipping 0건, AI Delivery icon 52px 확인, Version / Collaboration 스킬 그룹 노출, Q&A 카드 3개와 원문형 문단 답변 노출, Q&A 질문 `업무 진행 시 가장 중요한 포인트` 노출, 세 프로젝트 role `Front End / Back End` 확인, 섹션별 레이아웃 차별화 확인, scroll reveal skills-enter-1 true -> projects 진입 후 false -> skills-enter-2 true 반복 확인, reduced-motion 30개 즉시 표시, console error 0건, Footer copyright/back-to-top 확인, concise hero/intro desktop/mobile 스크린샷 확인, 제거 요청 문구(GraphQL/Feature-Sliced Design/FSD/SPA/Stack/이전 hero 문구/내부 Agent 문구/Notion 상세 원본) 미노출 확인
- 추가 브라우저 확인: 현재 빌드 확인 server http://127.0.0.1:3006, desktop 1440px/mobile 390px에서 Hero 프로필 WebP 200 OK, content-type image/webp, alt `조인성 프로필 사진`, overflowX 0, console error 0 확인
- 추가 브라우저 확인: 현재 빌드 확인 server http://127.0.0.1:3006, desktop 1440px/mobile 390px에서 Hero 프로필 배경 레이어 노출, 선명한 `.hero-profile` 카드 0개, overflowX 0, console error 0 확인
- 추가 브라우저 확인: 현재 빌드 확인 server http://127.0.0.1:3006, desktop 1440px/mobile 390px에서 Hero 프로필 배경 desktop opacity 0.48/blur 5px, mobile opacity 0.34/blur 6px, 선명한 `.hero-profile` 카드 0개, overflowX 0, console error 0 확인
- 추가 브라우저 확인: 현재 빌드 확인 server http://127.0.0.1:3006, desktop 1440px/mobile 390px에서 Hero 프로필 배경 desktop/mobile opacity 0.1, 선명한 `.hero-profile` 카드 0개, overflowX 0, console error 0 확인
- 추가 브라우저 확인: 현재 빌드 확인 server http://127.0.0.1:3006, desktop 1440px/mobile 390px에서 Hero 프로필 배경 opacity 1, filter none, mask none, glow pseudo display none, 선명한 `.hero-profile` 카드 0개, overflowX 0, console error 0 확인
- 추가 브라우저 확인: 현재 빌드 확인 server http://127.0.0.1:3006, `/pdf`, `/projects/railway-standards-platform/pdf`, `/projects/railway-standards-platform`에서 PDF source routes/print media toolbar hidden/overflowX 0/console error 0 확인. Footer `PDF 다운로드` 버튼 노출, Hero PDF CTA 미노출 확인. `/api/portfolio-pdf-zip` 응답 200, application/zip, 약 1.97MB, 메인 PDF 1개 + 프로젝트 상세 PDF 10개 포함 확인
- Production 확인: `https://portfolio-ashy-five-87.vercel.app/api/portfolio-pdf-zip` 응답 200, application/zip, 1.25MB, 메인 PDF 1개 + 프로젝트 상세 PDF 10개 포함 확인. Production footer `PDF 다운로드` 버튼 노출, Hero PDF CTA 미노출, overflowX 0, console error 0 확인
- Local 실제 클릭 확인: footer `PDF 다운로드` 클릭 시 `PDF 생성 중...` 상태 표시 후 `joinseong-portfolio-pdf.zip` 다운로드, zip 내부 PDF 11개, console error 0 확인
- Production 재배포 확인: `https://portfolio-ashy-five-87.vercel.app` alias가 새 배포로 연결됨
- Production 실제 클릭 확인: footer `PDF 다운로드` 클릭 시 `PDF 생성 중...` 상태 표시 후 `joinseong-portfolio-pdf.zip` 다운로드, zip 내부 PDF 11개, console error 0 확인
- 최신 Production 재배포 확인: `https://portfolio-24zn6z21w-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- 최신 Production 실제 클릭 재확인: footer `PDF 다운로드` -> `PDF 생성 중...` -> `joinseong-portfolio-pdf.zip`, zip 내부 PDF 11개, console error 0 확인
- Local 확인: `/pdf`와 `/projects/taean-smart-city/pdf`는 404, sitemap에는 PDF 전용 경로 미노출
- Local 실제 클릭 확인: 현재 HTML 라우트 기준 footer `PDF 다운로드` -> `PDF 생성 중...` -> `joinseong-portfolio-pdf.zip`, zip 내부 PDF 11개, console error 0 확인
- Production timeout 확인: 현재 HTML 출력 방식은 기존 60초 제한에서 `FUNCTION_INVOCATION_TIMEOUT` 발생
- Timeout 대응: `/api/portfolio-pdf-zip` `maxDuration` 120초 조정, Puppeteer navigation을 `domcontentloaded` 기준으로 변경하고 fonts/images 준비만 확인
- Local API 재검증: 현재 HTML 라우트 기준 zip 생성 5.9초, 내부 PDF 11개 확인
- Production 재배포 확인: `https://portfolio-5x7508n6l-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production API 재검증: 현재 HTML 라우트 기준 zip 생성 46.8초, 내부 PDF 11개 확인
- Production 실제 클릭 확인: footer `PDF 다운로드` -> `PDF 생성 중...` -> `joinseong-portfolio-pdf.zip`, zip 내부 PDF 11개, console error 0 확인
- PDF 한글 깨짐 대응: `@fontsource-variable/noto-sans-kr` self-host 폰트 추가, Inter latin-only body class 제거, body 기본 폰트를 Noto Sans KR로 변경
- PDF 비율: A4 print media 출력이 아니라 1440px desktop web screen layout을 그대로 긴 PDF 페이지로 출력. MediaBox 폭은 1080pt로 확인
- PDF 메뉴바 숨김: PDF 생성 직전 Puppeteer에서 `.site-header`, `.footer-download-wrap`, `.back-to-top-floating`을 강제 숨김 처리
- Production 재배포 확인: `https://portfolio-93qtr7q67-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production API 재검증: zip 생성 74.2초, 내부 PDF 11개, PDF 내부 `Noto Sans KR` 폰트 포함 확인
- Production 실제 클릭 확인: footer `PDF 다운로드` -> `PDF 생성 중...` -> `joinseong-portfolio-pdf.zip`, zip 내부 PDF 11개, console error 0 확인
- 프로젝트 상세 hero의 `Project Detail` eyebrow 문구 제거
- Local `/projects/taean-smart-city` 확인: `Project Detail` 미노출, hero eyebrow 0개, console error 0
- Production 재배포 확인: `https://portfolio-i6lq8vpax-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production `/projects/taean-smart-city` 확인: `Project Detail` 미노출, hero eyebrow 0개, console error 0
- PDF 프로젝트 링크: Chromium PDF 출력 후 `pdf-lib`으로 main PDF annotation URI를 후처리해 `projects/01-*.pdf` zip 내부 상대 경로로 변경
- PDF layout 보강: PDF 캡처용 body width/min-width 1440px 고정, `.project-showcase` layout containment 추가
- Local/Production layout 비교: web prepared 1080x4389, PDF render 1080x4389, meanAbsDiff 3.18 수준
- Production 재배포 확인: `https://portfolio-no8h92w8u-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production API 확인: zip 내부 PDF 11개, main PDF URI 4개 모두 `projects/01-*.pdf`, 외부 project URL 0개
- Production 실제 클릭 확인: footer `PDF 다운로드` -> `PDF 생성 중...` -> zip 다운로드, 내부 PDF 11개, zip 내부 상대 링크 유지, console error 0
- macOS Preview `-50` 오류 대응: main PDF 프로젝트 카드 링크를 URI action에서 PDF remote go-to action(`/S /GoToR`)으로 변경
- Production 재배포 확인: `https://portfolio-jpirzdbpk-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias API 확인: zip 내부 PDF 11개, main PDF 프로젝트 링크 4개 모두 `/GoToR`, `/F projects/01-*.pdf`, `/D [0 /Fit]`, project URI 0개, failures 0
- Q&A 섹션 CSS 조정: 1040px 이하에서 `.interview-card`를 1컬럼으로 전환하고 답변 영역 divider/padding/line-height를 조정해 태블릿·모바일에서 질문/답변이 밀려 보이지 않게 수정
- Local 확인: 1440/1024/768/430/390/360px에서 Q&A overflowX 0, 카드 내부 overflow 0, 질문/답변 겹침 0, console error 0
- Production 재배포 확인: `https://portfolio-mliqyl7w5-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias 확인: 768/390/360px에서 Q&A overflowX 0, 카드 내부 overflow 0, 질문/답변 겹침 0, console error 0
- PDF 내 더보기 처리: 추가 프로젝트 패널을 조건부 렌더링에서 항상 DOM에 두는 구조로 변경. 일반 화면은 `.project-side:not(.project-side--open) .project-side-panel { display: none; }`으로 접고, PDF 캡처 CSS는 패널을 정적 2열 목록으로 펼침
- Local 확인: 일반 화면 desktop/390/360px에서 더보기 접힘/열림 정상, PDF zip main PDF 프로젝트 링크 10개 모두 `/GoToR`, 추가 프로젝트 6개가 PDF 렌더링 이미지에 노출
- Production 재배포 확인: `https://portfolio-mjvimk9c9-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: zip 내부 PDF 11개, main PDF 프로젝트 링크 10개 모두 `/GoToR`, failures 0
- macOS Preview 권한 오류 대응: main PDF가 외부 `projects/*.pdf`를 열지 않도록 변경. main PDF 뒤에 프로젝트 상세 PDF 10개를 append하고, 프로젝트 카드 링크는 같은 PDF 내부 page destination(`/GoTo`)으로 이동
- 프로젝트 상세 페이지의 목록 복귀 링크도 외부 URL이 아닌 main PDF 1페이지 내부 이동으로 변경
- Local 확인: zip 내부 PDF 11개 유지, `00-joinseong-portfolio-main.pdf`는 11페이지, 프로젝트 내부 이동 10개, 목록 복귀 내부 이동 10개, `/GoToR`/URI/file action 0개
- Production 재배포 확인: `https://portfolio-5upz721x4-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: zip 내부 PDF 11개, main PDF 11페이지, 프로젝트 내부 이동 10개, 목록 복귀 내부 이동 10개, 외부 URL/file action 0개
- PDF Projects/Q&A 배경 보정: PDF 캡처 CSS에서 `.section--projects`, `.section--interview`, `.project-showcase`, `.interview-grid`, project/interview card의 gradient/shadow를 제거하고 흰색 배경으로 고정
- Local 확인: PDF link action 구조 유지, QuickLook 렌더링 이미지에서 Projects/Q&A 회색 가로 띠 미노출
- Production 재배포 확인: `https://portfolio-k8p3vh4ld-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: zip 내부 PDF 11개, main PDF 11페이지, 프로젝트 내부 이동 10개, 목록 복귀 내부 이동 10개, 외부 URL/file action 0개
- 사용자 최신 요청 반영: main PDF에 상세 PDF를 append하지 않고 `00-joinseong-portfolio-main.pdf`는 1페이지 메인 화면만 포함
- PDF annotation 정리: main 프로젝트 카드 href와 상세 PDF 목록 링크 href를 PDF 캡처 시 제거해 main/detail PDF 모두 action 0개
- 상세 PDF 회색 배경 제거: project detail page/hero/section/panel/KPI card 배경을 흰색으로 고정하고 shadow 제거
- Local 확인: zip 내부 PDF 11개, main pageCount 1/action 0, 상세 PDF 10개 모두 pageCount 1/action 0, `05-traffic-safety-infra.pdf` QuickLook 렌더링에서 회색 배경 미노출
- Production 재배포 확인: `https://portfolio-llg0wbl6a-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: zip 내부 PDF 11개, main pageCount 1/action 0, 상세 PDF 10개 모두 pageCount 1/action 0
- 사용자 최신 요청 반영: main PDF 프로젝트 카드 링크를 ZIP 내부 `projects/*.pdf`로 복구
- 상세 PDF `프로젝트 목록` 링크를 `../00-joinseong-portfolio-main.pdf`로 복구
- Local 확인: zip 내부 PDF 11개, main pageCount 1/action 10, 상세 PDF 10개 모두 pageCount 1/action 1, `05-traffic-safety-infra.pdf` 회색 배경 미노출
- Production 재배포 확인: `https://portfolio-d6oiqke48-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: zip 내부 PDF 11개, main project link 10개, detail back link 10개, unexpected action 0개
- 웹 PDF 뷰어 기준 PDF 이동 안정화: ZIP 내부 remote PDF action(`/GoToR`) 후처리를 제거하고 main/detail PDF 링크를 웹 URL annotation으로 유지
- main PDF는 한 장짜리 긴 페이지 대신 1200px 높이 기준 6페이지로 분할해 브라우저 PDF 렌더링 부담 완화
- PDF 캡처 전용 CSS에서 project/interview/detail card의 page break 방지 적용
- Local PDF zip 재검증: zip 내부 PDF 11개, main pageCount 6, 고유 프로젝트 웹 URL 10개, 상세 PDF 10개 모두 pageCount 1, 상세 back URL 10개, `/GoToR` 0개, unexpected action 0개
- Production 재배포 확인: `https://portfolio-461gleeyx-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: zip 내부 PDF 11개, main pageCount 6, 고유 프로젝트 웹 URL 10개, 상세 PDF 10개 모두 pageCount 1, 상세 back URL 10개, `/GoToR` 0개, unexpected action 0개
- 사용자 정정 반영: 프로젝트 카드 클릭은 ZIP 내부 PDF 상대 이동이 맞으므로 main/detail PDF 링크를 절대 웹 URL이 아닌 상대 `/URI` annotation으로 변경
- main PDF 프로젝트 링크는 `projects/01-*.pdf`, 상세 PDF 목록 링크는 `../00-joinseong-portfolio-main.pdf`로 설정
- Local PDF zip 재검증: zip 내부 PDF 11개, main pageCount 6, 고유 프로젝트 상대 URI 10개, 상세 상대 URI 10개, `/GoToR` 0개, absolute URI 0개, unexpected action 0개
- Production 재배포 확인: `https://portfolio-b7q8tb93c-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: zip 내부 PDF 11개, main pageCount 6, 고유 프로젝트 상대 URI 10개, 상세 상대 URI 10개, `/GoToR` 0개, absolute URI 0개, unexpected action 0개
- macOS Preview `-50` 오류 대응: 상대 `/URI`가 앱 실행 링크처럼 처리되는 문제를 피하기 위해 FileSpec dictionary 기반 상대 `/GoToR`로 변경
- main PDF 프로젝트 링크는 FileSpec `projects/01-*.pdf`, 상세 PDF 목록 링크는 FileSpec `../00-joinseong-portfolio-main.pdf`로 설정
- Local PDF zip 재검증: zip 내부 PDF 11개, main pageCount 6, 고유 프로젝트 FileSpec 10개, 상세 back FileSpec 10개, URI action 0개, unexpected action 0개
- Production 재배포 확인: `https://portfolio-ck8h6iwp4-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: zip 내부 PDF 11개, main pageCount 6, 고유 프로젝트 FileSpec 10개, 상세 back FileSpec 10개, URI action 0개, unexpected action 0개
- 웹 PDF 뷰어에서 FileSpec `/GoToR`가 열리지 않는 문제 대응: 기본 PDF 다운로드를 `viewer=web` 상대 `/URI` 링크 모드로 전환하고 `viewer=preview` 옵션에서만 FileSpec 링크 사용
- 이메일 버튼 클릭 후 PDF 다운로드 시 `revealEmail=1`로 상태를 전달해 PDF 캡처에서 이메일 주소가 노출되도록 처리
- PDF 캡처 전용 CSS에서 About `Data UX` / `Ownership` 카드 grid gap/min-height/page-break를 고정해 겹침 방지
- Local 검증: `npm run lint`, `npm run build`, web mode 상대 URI 10개/detail back URI 10개, preview mode FileSpec 10개/detail back FileSpec 10개, 이메일 클릭 후 API `viewer=web&revealEmail=1`, About 카드 overlapY 0
- Production 재배포 확인: `https://portfolio-aly2fneeh-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: web mode zip 내부 PDF 11개, main pageCount 7, 프로젝트 상대 URI 10개, detail back URI 10개, FileSpec action 0개
- PDF 다운로드 시 Skills/Projects 라벨과 본문 사이 간격 과다 문제 보정: PDF 캡처 전용 CSS에서 해당 section header margin-bottom을 14px로 축소하고 header/body page-break 분리 방지 적용
- Local 검증: `npm run lint`, `npm run build`, web mode zip 내부 PDF 11개, main pageCount 7, 프로젝트 상대 URI 10개, detail back URI 10개, FileSpec action 0개, Skills/Projects header-body gap 14px
- Production 재배포 확인: `https://portfolio-izg7e5wev-joinseong-s-projects.vercel.app`, alias `https://portfolio-ashy-five-87.vercel.app`
- Production alias PDF 확인: web mode zip 내부 PDF 11개, main pageCount 7, 프로젝트 상대 URI 10개, detail back URI 10개, FileSpec action 0개
- PDF Skills 라벨 페이지 분리 보정: Skills 라벨만 이전 페이지에 남고 카드가 다음 페이지로 밀리는 문제를 막기 위해 PDF 캡처 전용 CSS에서 `.section--skills`를 새 PDF 페이지에서 시작하도록 고정
- Local 검증: `npm run lint`, `npm run build`, web mode zip 내부 PDF 11개, main pageCount 7, 고유 프로젝트 상대 URI 10개, detail back URI 10개, FileSpec action 0개
- Local Chrome PDF viewer 스크린샷 확인: Skills 라벨과 스킬 카드가 같은 PDF 페이지 상단에서 함께 시작
```

### 확인 필요

```text
- KPI는 원본 기반 역할/구현/기술 포인트이며 임의 정량 성과가 없는지 확인 필요
- Hero 이메일 reveal 버튼과 floating back-to-top 버튼이 모바일에서 콘텐츠를 가리지 않는지 확인 필요
- 모바일 360px/390px/430px에서 실제 기기 스크롤 감각상 답답하거나 겹치는 구간이 없는지 확인 필요
- GraphQL/FSD/SPA 및 기존 Domain/Core 문구가 화면에 다시 노출되지 않는지 확인 필요
- 변경된 modern warm orange 색상이 텍스트 가독성과 대비를 해치지 않는지 확인 필요
- flat surface와 보조 accent가 반복감을 줄이면서도 과하게 산만해지지 않는지 확인 필요
- 프로젝트 상세와 스킬 섹션에서 `Stack N items`, 스킬 번호 칩이 다시 노출되지 않는지 확인 필요
- 프로젝트 카드에서 하단 `상세 보기` 텍스트가 보이지 않고 상단 우측 화살표 affordance가 모바일/데스크톱에서 명확한지 확인 필요
- 프로젝트 overlay 더보기 버튼이 대표 프로젝트 카드 탐색을 방해하지 않는지 확인 필요
- 더보기 패널이 충분히 넓고 카드 텍스트가 잘리지 않는지 확인 필요
- 더보기 패널의 1열 리스트 밀도가 적절하고, 대표 프로젝트 영역을 과하게 가리지 않는지 확인 필요
- 더보기 패널 compact card가 KPI/담당업무를 숨긴 뒤에도 상세 페이지 진입 유도가 충분한지 확인 필요
- Experience 좌측 기간 레일이 회사/직책 본문과 명확히 구분되는지 확인 필요
- Experience 모바일 기간 pill과 좌측 레일이 날짜/본문을 가리지 않고 자연스럽게 읽히는지 확인 필요
- Experience 원형 마커가 데스크톱/모바일에서 레일 중심과 어긋나지 않는지 확인 필요
- Skills Frontend 대형 강조 카드와 오른쪽 스킬 카드 정렬이 균형 있게 보이는지 확인 필요
- 대표 프로젝트 메인 카드에서 성과 preview가 사라진 뒤 상세 페이지 진입 유도가 충분한지 확인 필요
- 상세 페이지에서 Notion 상세 원본 링크 제거 후 기술 스택 패널이 허전하지 않은지 확인 필요
- AI Delivery 좌측 icon 크기가 과하게 튀지 않는지 확인 필요
- AI Delivery의 TASC 하네스 문구가 실제 프로젝트 방식으로 읽히고 과한 자동화 주장처럼 보이지 않는지 확인 필요
- Q&A 섹션이 원문형 답변을 충분히 살리면서도 마지막 영역에서 과하게 늘어지지 않는지 확인 필요
- Version / Collaboration 스킬 그룹이 기존 기술 스택 흐름과 자연스럽게 연결되는지 확인 필요
- About/Skills/Projects/Experience/AI Delivery/Q&A가 각자 다른 정보 구조로 읽히고, 반복 카드 템플릿처럼 보이지 않는지 확인 필요
- Experience title이 `회사명 | 직책` 형식으로 일관되게 보이는지 확인 필요
- 대표 프로젝트 5개 상세 보강 bullet이 Notion 원문 의미를 과장하지 않았는지 확인 필요
- 메인 프로젝트 카드 preview가 너무 장황하지 않고 상세 페이지로 자연스럽게 유도하는지 확인 필요
- 대표 프로젝트 비대칭 배치 외 영역이 일관된 읽기 기준선을 유지하는지 확인 필요
- Hero/About를 줄인 뒤 핵심 포인트가 충분히 전달되는지 확인 필요
- Hero 프로필 흐림 배경이 desktop/mobile에서 너무 강하거나 너무 약하지 않고, 텍스트 흐름을 방해하지 않는지 확인 필요
- AI 섹션이 개인의 실제 개발 활용 방식으로 읽히고, 현재 포트폴리오 제작 Agent 운용 설명으로 오해되지 않는지 확인 필요
- React Compiler 적용 후 상호작용 컴포넌트(Header active nav, Projects 더보기 panel, ScrollReveal)가 실제 브라우저에서 안정적인지 확인 필요
- 스크롤 이펙트가 과하게 느껴지지 않고 정보 읽기 흐름을 보조하는 수준인지 확인 필요
- Skills에서 AI Development 카드 제거 후 빈 공간이 어색하지 않고 5개 스킬 그룹 균형이 맞는지 확인 필요
- Contact form과 Contact 영역은 사용자 요청으로 미구현/미노출
- Footer zip 다운로드를 실제 브라우저에서 클릭했을 때 다운로드 UX, 압축 파일명, 내부 PDF 파일명, 페이지 분할이 제출 용도에 적절한지 확인 필요
- ZIP 압축 해제 후 웹 PDF 뷰어에서 `00-joinseong-portfolio-main.pdf` 프로젝트 카드 클릭 시 `projects/01-*.pdf` 상대 파일로 이동하는지 확인 필요
- ZIP 압축 해제 후 상세 PDF의 `프로젝트 목록` 클릭 시 `../00-joinseong-portfolio-main.pdf` 상대 파일로 이동하는지 확인 필요
- 이메일 버튼 클릭 후 PDF 다운로드 시 main PDF에 `joinsseong@gmail.com`이 노출되는지 확인 필요
- main PDF의 About 영역에서 `Data UX`와 `Ownership` 카드가 겹치지 않는지 확인 필요
- main PDF의 Skills/Projects 라벨과 본문 사이 간격이 과하게 벌어지지 않는지 확인 필요
```

---

## Supabase Agent → QA-Security Agent

### 전달사항

```text
- migration:
- RLS:
- rollback:
- 확인 필요한 보안 항목:
```

---

## QA-Security Agent → Release-Review Agent

### 전달사항

```text
- QA 결과:
- Security 결과:
- 병합 가능 여부:
- 남은 이슈:
```
