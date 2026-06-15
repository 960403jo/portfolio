# Next.js App Design

## 설치 후 권장 소스 구조

이 압축 파일에는 `app/`, `src/` 소스를 포함하지 않는다.  
Next.js 설치 후 아래 구조를 권장한다.

```text
app/
├─ layout.tsx
├─ page.tsx
├─ globals.css
├─ sitemap.ts
└─ robots.ts

src/
├─ components/
│  ├─ layout/
│  ├─ sections/
│  ├─ ui/
│  └─ project/
├─ data/
│  ├─ profile.ts
│  ├─ skills.ts
│  ├─ projects.ts
│  ├─ experience.ts
│  └─ ai-workflow.ts
├─ lib/
│  ├─ utils.ts
│  └─ supabase/
├─ types/
└─ styles/
```
