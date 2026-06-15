# Supabase

## 목적

포트폴리오에서 Contact form, Storage, 관리자 기능 등이 필요할 경우 사용하는 Supabase 구조입니다.

현재 포함된 migration은 Contact form 선택 시 문의를 저장하기 위한 `public.contact_inquiries` 테이블만 생성합니다.

## 구조

```text
supabase/
├─ migrations/
│  └─ 0001_create_contact_inquiries.sql
├─ rollback/
│  └─ 0001_drop_contact_inquiries.sql
├─ seed.sql
└─ README.md
```

## 보안 기준

```text
- RLS enabled
- anon role은 Contact form INSERT만 허용
- SELECT/UPDATE/DELETE public policy 없음
- service role key는 클라이언트 노출 금지
```
