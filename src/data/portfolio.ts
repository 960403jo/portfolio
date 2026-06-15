import type {
  ContactLink,
  DeveloperSignal,
  Experience,
  InterviewQna,
  NavItem,
  Project,
  SkillGroup
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "커리어", href: "#experience" },
  { label: "AI Delivery", href: "#ai-workflow" },
  { label: "Q&A", href: "#interview" },
  { label: "Contact", href: "#contact" }
];

export const profile = {
  name: "조인성",
  role: "Frontend Developer",
  headline: "UI와 데이터 흐름을 잇는 프론트엔드",
  summary: "React/TypeScript 기반 지도·관제·백오피스 UI",
  sourceStatus: "실무 프로젝트 기반",
  ctas: [
    { label: "대표 프로젝트", href: "#projects" },
    { label: "이메일", href: "#contact" }
  ]
};

export const aboutContent = {
  title: "사용자가 빠르게 이해하는 UI 흐름",
  body: "데이터 조회, 권한, 인터랙션의 자연스러운 연결",
  paragraphs: [
    "웹 서비스 및 백오피스 시스템 개발, 성능 최적화, 사용자 경험 개선",
    "주요 프로젝트 메인 개발, 일정 관리, 코드 리뷰, 공통 컴포넌트, 요구사항 조율",
    "새로운 라이브러리와 개발 방식의 실무 적용 검증"
  ],
  highlights: ["상태·API 흐름", "지도·관제 UI", "메인 개발 역할"]
};

export const heroSignals = [
  {
    label: "경력",
    value: "5년",
    caption: "React 운영형 웹"
  },
  {
    label: "역할",
    value: "프론트엔드 개발",
    caption: "React·TypeScript UI"
  },
  {
    label: "주요 경험",
    value: "지도·관제·백오피스 UI",
    caption: "운영형 화면 중심"
  }
];

export const developerSignals: DeveloperSignal[] = [
  {
    label: "Architecture",
    title: "복잡한 도메인을 기능 단위 구조로 분해",
    body:
      "철도 표준, 자율주행 관제, 버스 노선, 교통안전시설 UI의 컴포넌트·상태·API 흐름 분리",
    tags: ["기능 단위 구조", "상태 관리", "API 흐름"]
  },
  {
    label: "Data UX",
    title: "지도·관제·문서 기반 UI 경험",
    body:
      "Kakao Map, Leaflet, Naver Map, Dgraph 기반 위치 정보·계층형 문서·반복 조회 화면",
    tags: ["Map SDK", "Dgraph"]
  },
  {
    label: "Ownership",
    title: "메인 개발자 역할과 협업 실행",
    body:
      "주요 프로젝트 메인 개발, 일정 관리, 코드 리뷰, 공통 컴포넌트, 요구사항 조율",
    tags: ["일정 관리", "코드 리뷰", "공통 컴포넌트"]
  },
  {
    label: "Delivery",
    title: "프론트엔드 밖의 맥락까지 고려",
    body:
      "Spring Boot, RabbitMQ, Docker, Nginx, Kubernetes 기반 배포·운영 맥락",
    tags: ["Backend Context", "DevOps", "운영 환경"]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "React 화면 구조, 상태 관리, 데이터 패칭, 렌더링 흐름",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "TanStack Query", "Zustand", "Zod"],
    emptyText: ""
  },
  {
    title: "Backend",
    description: "API 계약, 서버 구조, 백엔드 협업 문맥",
    items: ["Spring Boot", "REST API", "Spring WebFlux", "RabbitMQ"],
    emptyText: ""
  },
  {
    title: "Database / Cloud",
    description: "관계형 데이터, 그래프 기반 데이터 구조, 화면 요구사항 연결",
    items: ["PostgreSQL", "Dgraph", "Oracle SQL"],
    emptyText: ""
  },
  {
    title: "DevOps",
    description: "Nginx, Docker, Kubernetes 기반 프론트엔드 배포 맥락",
    items: ["Docker", "Nginx", "Kubernetes"],
    emptyText: ""
  },
  {
    title: "Version / Collaboration",
    description: "버전 관리, 이슈 추적, 문서화, 실시간 커뮤니케이션",
    items: ["GitLab", "Bitbucket", "SVN", "Jira", "Confluence", "Slack"],
    emptyText: ""
  }
];

export const interviewQna: InterviewQna[] = [
  {
    question: "FRONT END 개발자가 된 이유",
    emphasis:
      "빠르게 변화하는 기술을 두려워하기보다 즐기며, 최적화된 웹으로 사용자 경험을 개선하는 데 보람을 느끼게 되었습니다.",
    paragraphs: [
      "Spring 기반 JSP로 웹 개발을 시작했지만, React 기반 웹 개발에 관심을 가지게 되었습니다. 공부할수록 효율적인 개발 방식에 매력을 느꼈고, 나아가 UI/UX까지 고민하는 일이 흥미로웠습니다."
    ]
  },
  {
    question: "업무 진행 시 가장 중요한 포인트",
    emphasis: "일은 혼자가 아니라 함께하는 것입니다. 협업의 역량을 가장 중요하게 생각합니다.",
    paragraphs: [
      "성공적인 프로젝트를 진행하기 위해 다양한 직군이 협력해야 하며, 원활한 소통, 서로에 대한 신뢰, 팀워크가 결국 좋은 결과로 이어진다고 생각합니다."
    ]
  },
  {
    question: "자신의 역량을 키우는 방법",
    emphasis:
      "꾸준한 학습과 열린 마음으로 배우려는 자세가 역량을 키우는 핵심 방법이라고 생각합니다.",
    paragraphs: [
      "업무를 진행하면서 가장 중요하게 생각한 것은 개발 기술의 기본적인 이해입니다. 기본 개념을 이해해야 새로운 기술을 빠르게 습득할 수 있고, 남의 방식만 따라 하는 것에는 한계가 있다고 느꼈습니다."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "taean-smart-city",
    name: "태안군 강소형 스마트시티 모험도시 플랫폼",
    period: "2026.05 ~",
    role: "Front End",
    tech: ["React", "TypeScript", "Vite", "Zustand", "TanStack Query", "Java", "Spring Boot", "Nginx"],
    description: "태안군 스마트시티 인프라 모니터링 서비스 개발",
    kpis: [
      {
        label: "Structure",
        value: "기능 단위 화면",
        detail: "화면, 상태, API 로직을 역할 기준으로 분리"
      },
      {
        label: "AI Delivery",
        value: "규칙 기반 코드 생성",
        detail: "프로젝트 규칙 문서를 기준으로 반복 화면 개발 지원"
      },
      {
        label: "Maintainability",
        value: "공통 구조 일관성",
        detail: "공통 컴포넌트와 상태관리 구조의 일관성 유지"
      }
    ],
    responsibilities: [
      "기능 단위 화면과 상태 구조 분리",
      "공통 영역, 기능, 페이지 단위 구조를 고려해 유지보수성과 확장성 개선",
      "UI 컴포넌트와 API·상태관리 로직을 분리해 역할 중심 구조 설계"
    ],
    outcomes: [
      "프로젝트 규칙 기반 AI 코드 생성 구조 운영",
      "반복 화면 개발 및 구조 개선 과정에서 AI 코드 생성 활용",
      "공통 컴포넌트 및 상태관리 구조의 일관성 유지"
    ]
  },
  {
    slug: "railway-standards-platform",
    name: "철도 기술기준·표준 개발·관리 플랫폼",
    period: "2025.05 ~ 2026.04",
    role: "Front End / Back End",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Spring WebFlux",
      "Dgraph",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "NHN Cloud"
    ],
    description: "철도 기술기준·표준 개발·관리 플랫폼 및 포털 서비스 개발",
    sourceUrl: "https://aback-yogurt-204.notion.site/2d60ad70a54b8094956ade069d63d9a0",
    kpis: [
      {
        label: "Rendering",
        value: "Next.js SSR/SSG",
        detail: "초기 로딩과 접근성을 고려한 렌더링 구조 적용"
      },
      {
        label: "Data Model",
        value: "계층형 문서 UI",
        detail: "문서, 목차, 요구사항, 버전 관계를 탐색하는 화면 구현"
      },
      {
        label: "Async Flow",
        value: "RabbitMQ 처리 흐름",
        detail: "대용량 문서 검증 및 데이터 처리 자동화 경험"
      }
    ],
    responsibilities: [
      "React, Next.js, TypeScript 기반 철도 기술기준 플랫폼 및 포털 서비스 개발",
      "공통 레이아웃, 공통 컴포넌트, 상태관리, API 연동 구조 설계",
      "문서, 목차, 요구사항, 버전 구조를 갖는 계층형 데이터 조회·관리 UI 개발",
      "Dgraph 기반 문서 참조 관계와 버전 구조 탐색 화면 구현",
      "RabbitMQ 기반 문서 검증 상태, 결과, 오류 흐름을 확인하는 UI 개발",
      "Zustand와 TanStack Query로 클라이언트 상태와 서버 상태를 분리해 관리"
    ],
    outcomes: [
      "Next.js SSR/SSG 구조 적용으로 포털 초기 렌더링, SEO, 접근성 개선",
      "Graph DB 기반 계층·참조 데이터 탐색 흐름을 화면에서 직관적으로 제공",
      "WebFlux와 RabbitMQ 조합의 비동기 처리 흐름을 사용자 확인 화면과 연결",
      "반복 조회 데이터의 응답성과 화면 상태 관리 일관성 개선",
      "Docker, Kubernetes, NHN Cloud 환경에서 운영·배포 협업 경험 확보"
    ]
  },
  {
    slug: "chuncheon-digital-id-admin",
    name: "춘천 디지털 신분증 관리자 시스템",
    period: "2024.10 ~ 2025.01",
    role: "Front End",
    tech: ["React", "JavaScript", "Vite", "Zustand", "TanStack Query", "Nginx"],
    description: "모바일시민증 기반 춘천시 통합 앱의 관리자 Back Office 시스템 개발",
    sourceUrl: "https://aback-yogurt-204.notion.site/1ad0ad70a54b81d7a882e97d58ccf25a",
    kpis: [
      {
        label: "Ownership",
        value: "메인 개발자",
        detail: "일정 관리, 코드 리뷰, 공통 컴포넌트 개발 수행"
      },
      {
        label: "Runtime",
        value: "WebView 대응",
        detail: "웹앱 공통 레이아웃과 JavaScript Interface 흐름 이해"
      },
      {
        label: "State",
        value: "TanStack Query + Zustand",
        detail: "데이터 패칭과 상태 관리 구조를 프로젝트에 적용"
      }
    ],
    responsibilities: [
      "춘천 디지털 신분증 관리자 Back Office 서비스 메인 개발 수행",
      "Grid 컴포넌트, 유틸성 공통 모듈, 권한 기반 화면 구조 개발",
      "컴포넌트 영역과 서비스 영역을 분리하는 디렉토리 구조로 유지보수성 개선",
      "Public Page와 Private Page를 구분해 권한에 따른 컴포넌트 노출 구조 설계",
      "App WebView 개발을 지원하며 JavaScript Interface 기반 모바일 기능 연동 흐름 이해",
      "카메라, 화면 밝기, OS별 WebView history 이슈 등 모바일 환경 차이를 고려한 개발 지원"
    ],
    outcomes: [
      "React Query에서 TanStack Query로 전환해 서버 상태 관리 구조 개선",
      "Zustand 도입으로 화면 상태와 전역 상태를 가볍게 관리하는 구조 적용",
      "스토리지 의존 로그인 유지 방식을 개선하고, 쿠키 토큰 상태를 API 요청으로 검증하는 흐름 적용",
      "PASS 인증 로그인과 권한 기반 화면 분리를 구현해 관리자 서비스 접근 흐름 정리",
      "Suspense와 QueryErrorResetBoundary를 활용한 사용자 경험 개선 시도"
    ]
  },
  {
    slug: "gunsan-iksan-bis-bms",
    name: "군산-익산 광역BIS 및 BMS",
    period: "2024.04 ~ 2025.07",
    role: "Front End",
    tech: ["React", "JavaScript", "Vite", "Zustand", "React Query", "Kakao Map SDK", "html2canvas", "Nginx"],
    description: "군산시청 버스 노선 관리 시스템 개발",
    sourceUrl: "https://aback-yogurt-204.notion.site/BIS-BMS-1ad0ad70a54b81eda490d57664d0755a",
    kpis: [
      {
        label: "Ownership",
        value: "메인 개발자",
        detail: "일정 관리, 코드 리뷰, 공통 컴포넌트 개발 수행"
      },
      {
        label: "Map UX",
        value: "Kakao Map SDK",
        detail: "Marker, Polyline, Polygon 기반 지도 기능 개발"
      },
      {
        label: "Data Cache",
        value: "React Query",
        detail: "반복 조회 화면의 데이터 캐싱 구조 적용"
      }
    ],
    responsibilities: [
      "군산-익산 광역 BIS/BMS 버스 노선 관리 Back Office 서비스 개발",
      "옵션 기반 Grid Component 등 반복 관리 화면을 위한 공통 컴포넌트 개발",
      "Kakao Map SDK를 활용해 노선, 정류장, 경로 시각화 등 지도 기반 기능 구현",
      "Marker, Polyline, 지도 캡처 등 운영자가 노선 정보를 확인하는 지도 기능 개발",
      "html2canvas 기반 지도 캡처 기능 구현 과정에서 SVG, CORS, 이미지 경로 이슈 처리",
      "로그인 유지 방식과 인증 상태 분기 구조 개선"
    ],
    outcomes: [
      "지도 기반 노선 관리와 시각화 기능으로 운영자의 정보 확인 흐름 개선",
      "웹 스토리지 중심 로그인 유지 방식의 한계를 파악하고 이후 프로젝트 인증 구조 개선으로 연결",
      "React Query를 도입해 서버 상태와 클라이언트 로직 분리를 시도",
      "데이터 캐싱 개념과 요청 방식 설계의 문제를 인식하고 다음 프로젝트에서 TanStack Query 전환으로 개선",
      "공통 Grid 구조의 장단점을 경험하며 UI 설계 변화에 대응 가능한 컴포넌트 구조 필요성 정리"
    ]
  },
  {
    slug: "traffic-safety-infra",
    name: "Lv4 대응 교통안전 인프라 표준 및 평가기술 개발",
    period: "2022.01 ~ 2024.12",
    role: "Front End / Back End",
    tech: ["React", "JavaScript", "Vite", "Zustand", "Spring Boot", "PostgreSQL", "Leaflet", "Nginx", "Docker"],
    description: "경찰청 교통안전시설 인프라 관리 시스템 개발",
    sourceUrl: "https://aback-yogurt-204.notion.site/Lv4-R-D-1ad0ad70a54b81a0a5aaeb03073ee7b6",
    kpis: [
      {
        label: "Migration",
        value: "JSP → React",
        detail: "JSP 기반 데모 웹을 React 기반 서비스로 전환"
      },
      {
        label: "Geo Data",
        value: "정밀 지도 DB",
        detail: "교통안전시설 인프라 정보 모델링, DB 고도화, 백엔드 연계"
      },
      {
        label: "Visualization",
        value: "Leaflet Map",
        detail: "Marker, Polyline, Polygon 기반 데이터 시각화 구현"
      }
    ],
    responsibilities: [
      "경찰청 교통안전시설 인프라 관리 웹 서비스 프론트엔드·백엔드 개발",
      "교통안전시설 관리운영 SW의 시설물 등록, 조회, 관리 화면 구현",
      "TB 정밀지도 기반 교통안전시설 인프라 정보 모델링과 DB 구축·고도화 참여",
      "시설물 관리 대장과 연계 데이터 흐름을 고려한 UI/UX 설계 및 구현",
      "웹 디자이너, 웹 퍼블리셔, I2X 연계 장치 서버 담당 백엔드 개발자와 협업",
      "Leaflet 기반 지도 화면에서 시설물 위치와 연계 데이터를 시각화"
    ],
    outcomes: [
      "정밀지도 기반 시설물 정보를 운영자가 지도와 관리 화면에서 함께 확인하는 흐름 구현",
      "Leaflet Map을 활용해 공공 인프라 데이터의 위치 기반 시각화 경험 확보",
      "기획, 디자인, 퍼블리싱, 백엔드 연계가 필요한 공공 R&D 웹 서비스를 협업으로 완성",
      "2023 쑤저우 ITS 세계총회 참여",
      "2024 국제 치안 산업대전(KPEX) 참여 및 전시"
    ]
  },
  {
    slug: "anyang-autonomous-driving",
    name: "안양시 자율주행 시범사업",
    period: "2023.06 ~ 2024.11",
    role: "Front End",
    tech: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Zustand",
      "React Query",
      "Keycloak SSO",
      "Java",
      "Spring Boot",
      "Nginx",
      "Docker"
    ],
    description: "자율주행 관제 모니터링, 운영 단말, 테스트 랩 시스템 개발",
    sourceUrl: "https://aback-yogurt-204.notion.site/1ad0ad70a54b8195851ffc580ef6681f",
    kpis: [
      {
        label: "Ownership",
        value: "1인 Front End",
        detail: "지도 협력 업체를 제외한 프론트엔드 개발 수행"
      },
      {
        label: "Monitoring",
        value: "실시간 관제",
        detail: "차량 상태와 돌발·긴급 상황 관제 화면 개발"
      },
      {
        label: "Auth",
        value: "Keycloak SSO",
        detail: "운영 환경 인증 흐름과 맞물린 화면 개발 경험"
      }
    ],
    responsibilities: [
      "자율주행 버스 관련 관제 모니터링, 운영 단말, 테스트랩 웹 서비스 개발",
      "차량 실시간 상태, 돌발 상황, 긴급 상황을 확인하는 관제 화면 구현",
      "차량과 통신하는 시설물의 상태 정보, 데이터 수집량, 현시 정보를 화면에 표출",
      "자율주행 차량 관련 시설물, 차량 기초 데이터, OpenAPI 운영 정보 관리 화면 개발",
      "V2X 단말 대여 신청과 운영 데이터 기반 가상 발생 데이터 반출 기능 개발",
      "3개 웹 서비스를 하나의 로그인 흐름으로 묶는 Keycloak SSO 적용"
    ],
    outcomes: [
      "외부 협력 범위 조정 이후 주요 프론트엔드 개발을 내부 주도로 수행",
      "초기 업무 흐름의 문제를 파악하고 백엔드, UI/UX 설계, PM과 지속적으로 조율해 프로젝트 진행",
      "SSO 로그인 배경 영상 초기 로딩 문제를 chunk streaming 방식으로 개선",
      "관제, 운영 단말, 테스트랩으로 나뉜 복수 업무 화면을 하나의 운영 흐름으로 정리",
      "안양시 자율주행 서비스 운영 화면과 데이터 관리 경험 확보"
    ]
  },
  {
    slug: "carbon-neutral-admin",
    name: "탄소중립 통합 플랫폼 관리자 시스템",
    period: "2023.02 ~ 2024.05",
    role: "Front End",
    tech: ["React", "JavaScript", "Vite"],
    description: "KT 탄소중립 앱 서비스 관련 관리자 Back Office 시스템 개발",
    kpis: [
      {
        label: "Component",
        value: "관리자 공통 UI",
        detail: "Grid, DatePicker, DropDownList 등 공통 컴포넌트 개발"
      },
      {
        label: "Admin",
        value: "이벤트 관리",
        detail: "앱 서비스 운영을 위한 이벤트 관리 기능 개발"
      },
      {
        label: "State",
        value: "React Hook",
        detail: "Hook 기반 상태와 화면 로직 관리"
      }
    ],
    responsibilities: [
      "Grid, DatePicker, DropDownList 등 공통 컴포넌트 개발",
      "앱 이벤트 관리 기능 개발",
      "React Hook 기반 상태 및 화면 로직 관리"
    ],
    outcomes: ["공통 컴포넌트 기반 관리자 서비스 개발 경험 확보"]
  },
  {
    slug: "daejeon-its",
    name: "대전시 ITS 고도화 및 자율협력주행 기반 구축",
    period: "2022.08 ~ 2023.06",
    role: "Front End",
    tech: ["React(CRA)", "JavaScript", "Naver Map"],
    description: "교통 데이터 기반 웹 서비스 개발",
    kpis: [
      {
        label: "Visualization",
        value: "Naver Map",
        detail: "교통 빅데이터 플랫폼의 대규모 데이터 시각화 구현"
      },
      {
        label: "Public API",
        value: "Open API",
        detail: "교통 공공 정보 Open API 신청 및 고객 응대 서비스 개발"
      },
      {
        label: "Adoption",
        value: "사내 첫 React 웹",
        detail: "사내 첫 React 기반 웹 서비스 개발 경험"
      }
    ],
    responsibilities: [
      "대전 교통 빅데이터 플랫폼에서 Naver Map 기반 대규모 데이터 시각화 구현",
      "교통 공공 정보 Open API 신청 및 고객 응대 서비스 개발",
      "대전 교통 정보 센터 개발 지원"
    ],
    outcomes: ["사내 첫 React 기반 웹 서비스 개발"]
  },
  {
    slug: "yongin-seoul-toll-system",
    name: "용인서울고속도로 영업시스템 대수선",
    period: "2021.07 ~ 2022.06",
    role: "Front End / Back End",
    tech: ["jQuery", "JavaScript", "Spring Boot", "JSP", "OZ Report", "Oracle SQL"],
    description: "고속도로 요금 정산 업무 시스템 개발",
    kpis: [
      {
        label: "Legacy",
        value: "JSP + jQuery",
        detail: "근무자 관리 및 시스템 관리 화면과 업무 기능 개발"
      },
      {
        label: "Integration",
        value: "결제 단말 전문 통신",
        detail: "API와 결제 단말 서버 간 전문 통신 구조 경험"
      },
      {
        label: "Report",
        value: "OZ Report",
        detail: "TCS/ETC 근무 보고서 및 전자결재 시스템 개발"
      }
    ],
    responsibilities: [
      "근무자 관리 및 시스템 관리 담당 화면과 업무 기능 개발",
      "API와 결제 단말 서버 간 전문 통신을 통한 시스템 개정 관리",
      "FTP 기반 차량 이미지 및 보고서 관리"
    ],
    outcomes: [
      "OZ Report 기반 TCS/ETC 근무 보고서 및 전자결재 시스템 개발",
      "고속도로 정산 업무 관련 Oracle SQL 작성 및 성능 향상 경험"
    ]
  },
  {
    slug: "jinju-transport-support",
    name: "진주시 운송관리지원시스템",
    period: "2021.04 ~ 2021.07",
    role: "Front End / Back End",
    tech: ["jQuery", "JavaScript", "Spring Boot", "JSP", "OZ Report", "Oracle SQL"],
    description: "진주시 시내버스 운송 관리 지원 시스템 웹 서비스 개발",
    kpis: [
      {
        label: "Domain",
        value: "운송 사업 계획",
        detail: "운송 사업 계획 관련 화면과 업무 기능 개발"
      },
      {
        label: "Report",
        value: "OZ Report 연동",
        detail: "웹과 리포트 도구를 하나의 서버로 활용하는 구조 적용"
      },
      {
        label: "Database",
        value: "Oracle SQL",
        detail: "운송 관리 지원 시스템의 기초 SQL 업무 수행"
      }
    ],
    responsibilities: [
      "운송 사업 계획 관련 담당 화면과 업무 기능 개발",
      "웹과 OZ Report Tool을 하나의 서버로 활용하는 구조 적용",
      "기초 Oracle SQL 업무 수행"
    ],
    outcomes: ["운송 관리 지원 시스템 개발과 리포트 서버 연동 경험 확보"]
  }
];

export const experiences: Experience[] = [
  {
    title: "과장",
    period: "2025.05 ~",
    organization: "(주)엠큐닉",
    summary: "AI & Ops Lab AX융합개발실 AI혁신개발팀 프론트엔드 개발"
  },
  {
    title: "선임 연구원",
    period: "2021.01 ~ 2025.02",
    organization: "네이버시스템(주)",
    summary: "META 기술 센터 개발2팀 교통·공공·백오피스 웹 서비스 개발"
  }
];

export const aiWorkflow = {
  title: "Frontend Harness Engineering",
  body:
    "프론트엔드 하네스 엔지니어링: 퍼블리싱 원본, FSD/shared-first 구현 규칙, ui-sync 검증을 하나의 루프로 묶어 AI 초안을 제품 코드로 정제",
  steps: [
    "SSOT 고정: 사용자 요구, 프로젝트 rules, Agent working agreement 기준으로 작업 범위 정렬",
    "구조 분해: 퍼블리싱 화면을 Header/LNB/Contents/Footer와 내부 블록으로 나누고 골격부터 고정",
    "shared-first 구현: shared/ui 재사용, widget 조합, feature hook/mapper로 상태와 DTO 분리",
    "상호작용 동등성: 탭, 검색, 정렬, 페이징, 상세 패널, 다운로드 액션을 원본 흐름 기준으로 연결",
    "하네스 게이트: lint/build/test/docs/ui-sync/harness와 visual diff 기준을 통과할 때만 완료"
  ]
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "joinsseong@gmail.com",
    href: "mailto:joinsseong@gmail.com"
  }
];
