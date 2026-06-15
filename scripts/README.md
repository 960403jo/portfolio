# scripts

## 목적

cmux에서 phase별 Agent workspace를 자동 생성하고 Codex를 실행하기 위한 스크립트입니다.

## 실행

```bash
chmod +x scripts/*.sh
./scripts/cmux-phase-runner.sh phase1
./scripts/cmux-phase-runner.sh phase2
./scripts/cmux-phase-runner.sh phase3
./scripts/cmux-phase-runner.sh phase4
./scripts/cmux-phase-runner.sh phase5
```

## phase3

`phase3`은 Next.js App Agent와 Supabase Agent를 병렬로 실행합니다.

```bash
./scripts/cmux-phase-runner.sh phase3
```

## 주의

cmux 버전에 따라 `cmux send`, `cmux send-key`, `cmux set-status` 명령 옵션이 다를 수 있습니다.  
명령이 다르면 `scripts/cmux-phase-runner.sh`의 `cmux_send_line()` 함수만 수정하면 됩니다.
