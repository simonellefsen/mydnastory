# myDNAStory

An archive of DNA stories, one first name at a time. Each published kit gets the same chapters: autosomal origins, ancient Europe, a maternal haplogroup, notable/ancient kin, and a chromosome skyline.

Raw FTDNA exports and screenshots live in a local `ftdna/` folder that is **not** committed.

## Develop

```bash
npm install
npm run dev
```

- `/` — catalog of stories
- `/pernille`, `/helle`, … — one genome each
- `/shared` — Helle (paternal grandmother) and Pernille compared

## Add a profile

1. Keep the kit under `ftdna/<first_last>/` (gitignored).
2. Add `lib/profiles/<slug>.ts` exporting a `Profile` (first name only).
3. Register it in `lib/profiles/index.ts` (`publishedProfiles` + `catalog`).
4. Shared landscapes live in `public/images/`; add a distinct hero if the geography needs it.

Coming kits can sit in `catalog` with `status: "coming"` until the story is written.

## Data boundary

- Do not add `ftdna/` to git.
- First names only. No living match names. No raw genotypes.
- Haplogroup “notable connections” are deep-time maternal fun facts, not close kinship.
