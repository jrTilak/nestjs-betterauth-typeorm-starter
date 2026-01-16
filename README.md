## NestJS BetterAuth + TypeORM starter (short)

- Purpose: ready-to-ship NestJS API with BetterAuth + TypeORM + PostgreSQL, unified responses, and strict validation.
- Stack: NestJS 11, TypeORM 0.3, PostgreSQL, BetterAuth, Biome (lint/format), Jest, pnpm.

### Getting started
- Install deps: `pnpm install`
- Copy env: `cp .env.example .env` and fill DB creds.
- Run migrations (after any entity change or new pull):

### Responses
- Global `ResponseInterceptor` wraps all JSON responses as `{ message, data, error? }` and logs errors.
- For success, return your DTO or `new ApiResponse(dto)`; empty objects become `null` to keep payloads clean.
- Errors bubble into the interceptor and become `{ message, error }` with proper status.

### Validation
- Global `AppValidationPipe` (whitelist + transform) shapes validation errors as an array of `{ field, errors[] }` and raises `422` with a combined message.
- Use class-validator decorators on DTOs; nested DTOs are supported.

### Auth
- BetterAuth + TypeORM wired in; configure credentials/strategies in your BetterAuth setup and ensure migrations are applied for auth tables.

### Lint/format
- Check: `pnpm run lint`
- Auto-fix lint: `pnpm run lint:fix`
- Format: `pnpm run format`
