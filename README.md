# Creator Collab Matchmaker

Next.js interactive matching demo. It scores shared niche/style/goal words and audience-size proximity, then sorts potential matches. Profiles are fictional and collaboration requests are local-only.

Run `pnpm install`, `pnpm --filter creator-collab-matchmaker dev`, and open `http://127.0.0.1:3007`. Run `pnpm --filter creator-collab-matchmaker test` for the ranking test.

The supplied prompt asks for Supabase Auth, Row Level Security, pgvector, and OpenAI embeddings. Those services are not configured here; this demo does not create accounts or send requests to other people. Before public production use, add consent-aware profiles, account security, abuse limits, messaging, and deletion controls.
