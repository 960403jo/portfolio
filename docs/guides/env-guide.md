# Environment Variables Guide

## Supabase 선택 사용 시

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

서버 전용이 필요한 경우:

```text
SUPABASE_SERVICE_ROLE_KEY=
```

## 주의

```text
- SUPABASE_SERVICE_ROLE_KEY는 NEXT_PUBLIC_ 접두사를 붙이지 않는다.
- .env.local은 커밋하지 않는다.
```
