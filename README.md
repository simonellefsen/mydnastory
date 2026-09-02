# myDNAStory

A bilingual archive for my own DNA history. Each published kit gets the same chapters: autosomal origins, ancient Europe, a maternal haplogroup, a paternal haplogroup when Big Y was tested, notable/ancient kin, and a chromosome skyline (autosomes and X).

Pernille and Helle now live at [pernille-helle.vercel.app](https://pernille-helle.vercel.app).

Project history, evidence boundaries, runbooks, and the v2-v4 improvement roadmap live in the [project wiki](wiki/index.md).

## Develop

```bash
npm install
npm run dev
```

- `/` — catalog (redirects to `/en` or `/da` from the browser language, then a `NEXT_LOCALE` cookie)
- `/en`, `/da` — English (default) and Danish
- `/en/<slug>` — one genome each

## Add a profile

1. Keep the kit under `ftdna/<first_last>/` (gitignored).
2. Add `lib/profiles/<slug>.ts` exporting a `Profile` (first name only).
3. Register it in `lib/profiles/index.ts` (`publishedProfiles` + `catalog`).
4. Shared landscapes live in `public/images/`; add a distinct hero if the geography needs it.
5. Danish overlay copy goes in `lib/i18n/da-profiles.ts`.

Coming kits can sit in `catalog` with `status: "coming"` until the story is written.

## Data boundary

- Do not add `ftdna/` to git.
- First names only. No living match names. No raw genotypes.
- Haplogroup “notable connections” are deep-time maternal fun facts, not close kinship.
