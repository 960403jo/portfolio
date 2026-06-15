# API / Server Action Contract

## Contact Form 선택 시

### Contract Name

```text
Contact Inquiry Create
```

### Type

```text
Server Action 또는 Route Handler
```

### Path or Function

```text
POST /api/contact
또는
createContactInquiry(input)
```

### Input

```json
{
  "name": "홍길동",
  "email": "user@example.com",
  "message": "문의 내용"
}
```

### Output

```json
{
  "success": true
}
```
