# Supabase Design

## 사용 여부

1차 포트폴리오는 정적 데이터만으로 구현 가능하다.

Supabase는 아래 기능이 필요한 경우 사용한다.

```text
- Contact form 문의 저장
- 관리자 페이지
- 프로젝트 데이터 CMS화
- 이미지/이력서 파일 Storage 관리
```

## 기본 포함

```text
supabase/migrations/0001_create_contact_inquiries.sql
supabase/rollback/0001_drop_contact_inquiries.sql
```
