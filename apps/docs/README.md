# Vuzeno Docs

Nuxt documentation site deployed to **Cloudflare Workers**.

## Development

From the monorepo root:

```bash
bun install
bun run docs:dev
```

## Build & preview (Workers)

```bash
bun run registry:build && bun run docs:build
bun run docs:preview:cf
```

## Deploy

```bash
bun run docs:deploy
```

### Workers Builds (Git)

Configure the Worker `vuzeno` with:

| Setting | Value |
| --- | --- |
| Root directory | `/` (repo root) |
| Build command | `bun run registry:build && bun run docs:build` |
| Deploy command | `cd apps/docs && bunx wrangler deploy` |
| `BUN_VERSION` | `1.3.10` |
| `NODE_OPTIONS` | `--max-old-space-size=8192` |

Nuxt Content requires the D1 binding `DB` (database `vuzeno-docs`, configured in `nuxt.config.ts`). Attach custom domain `vuzeno.com` in the Worker settings when ready to cut over from Vercel.

### Analytics

Use [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/) with automatic snippet injection once `vuzeno.com` is proxied through Cloudflare. No app-side analytics package.
