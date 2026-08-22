@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

링크나무 — a Link in Bio service (like Linktree). Users collect all their links on a single page shareable via one URL. See `PRD.md` for full product requirements. See `wireframe.png` for the main page layout.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — lint

## Tech Stack

- Next.js 16.3.2 (App Router)
- TypeScript
- Tailwind CSS
- MongoDB Atlas (stores link click counts)
- Vercel (deployment)

## Conventions

- Components live under `src/components/`.
- Environment variables go in `.env.local` and must never be committed.
- Design mobile-first, responsive.

## Core Features

- Profile display (name, bio, photo)
- List of link cards
- Link click count aggregation (persisted to MongoDB Atlas)

## MongoDB

- Connection helper: `src/lib/mongodb.ts` (caches the client across dev hot-reloads via a global).
- Click tracking endpoint: `POST /api/links/[id]/click` (`src/app/api/links/[id]/click/route.ts`) upserts into the `linkClicks` collection, incrementing `count`.
- Requires `MONGODB_URI` (and optionally `MONGODB_DB`, defaults to `linknamu`) in `.env.local` — see `.env.local.example`.
