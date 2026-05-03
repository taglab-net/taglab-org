# Apply Taglab Launchpad visual system to taglabstudio

## What changes

The current site uses a warm cream + forest/coral editorial palette with serif Fraunces. Taglab Launchpad uses a brighter, more modern system: white background, vibrant green primary, full-pill buttons, gradient hero on dark green, layered card shadows. We'll port that visual language while keeping all current copy, sections, and nonprofit positioning.

## Visual changes

**Color palette (src/styles.css)**
- Background: warm cream → near-white (`oklch(0.99 0.005 150)`)
- Primary: muted moss → vibrant green (`oklch(0.62 0.17 145)`) with a `--primary-glow` lighter variant and `--primary-deep` darker variant
- Add `--gradient-primary` (green → glow) and a darker `--gradient-hero` (deep green tones)
- New shadow tokens: `--shadow-soft`, `--shadow-elegant`, `--shadow-card`
- Drop the coral ember accent (replace accent with soft green tint to match Launchpad)
- Keep dark mode support but align it with the new green-based system

**Typography**
- Switch headings from Fraunces (serif) to the same Inter family used for body, with bold weights and tight tracking — matches Launchpad's modern sans-serif look
- Update `__root.tsx` font preconnect link to load Inter weights only (drop Fraunces)
- Update `--font-display` to Inter in styles.css

**Border radius**
- Bump `--radius` so buttons go fully pill-shaped (Launchpad uses `9999px`); cards stay rounded-3xl

**Buttons (src/components/ui/button.tsx)**
- Add `hero` variant: solid primary with soft shadow, lifts on hover with elegant shadow, swaps to glow color
- Add `heroOutline` variant: transparent white border with backdrop blur for use over the dark gradient hero
- Add `xl` size (h-14, px-10, rounded-full) and make `lg`/`sm` rounded-full too

## Section-level updates (src/routes/index.tsx)

**Hero (lines 55–124)**
- Apply dark green gradient background (`linear-gradient(135deg, deep-green, darker-green)`) so the hero pops like Launchpad's
- White headline text with a green-gradient highlighted phrase (`bg-clip-text text-transparent`)
- Replace existing CTA buttons with `variant="hero"` and `variant="heroOutline"`, size `xl`
- Add the small uppercase pill badge above the headline (e.g. "Donor CRM · Campaigns · Storytelling · Stewardship")
- Keep all current copy and the nonprofit-focused trust line

**Services (lines 125–159)**
- Switch cards to white `rounded-3xl` with `shadow-card`, hover lifts with `shadow-elegant` and green border accent
- Icon tile: 14×14 rounded-2xl with `--gradient-primary` background and white icon (matches Launchpad Services exactly)
- Add the small green uppercase eyebrow above the section heading

**Capabilities (lines 160–547)**
- Apply the same card treatment (white surface, rounded-3xl, soft shadow, hover lift)
- Use the gradient-primary icon tiles in place of any current icon styling

**Approach section (lines 548–669, currently dark on primary)**
- Keep dark treatment but use the new deep-green gradient instead of flat primary
- Update inner accent dots/badges to match new accent green

**Impact section (lines 670–739, two case-study boxes)**
- Convert boxes to the same elevated white card style with green icon tiles for stats
- Keep the LA toy drive + Middle East NGO copy verbatim

**Contact section (lines 740+)**
- Replace `bg-gradient-warm` with a subtle off-white; CTA button uses new `hero` variant
- Footer: keep the "taglabstudio (a Taglab agency)" branding; restyle link as green primary

## Technical changes (consolidated)

1. `src/styles.css` — replace `:root` and `.dark` color tokens, add `--primary-glow`, `--primary-deep`, `--gradient-primary`, `--shadow-card`, `--shadow-elegant`. Set `--radius` higher. Change `--font-display` to Inter.
2. `src/routes/__root.tsx` — update Google Fonts link to Inter only (drop Fraunces).
3. `src/components/ui/button.tsx` — add `hero`, `heroOutline` variants and `xl` size; round `sm`/`lg` to full.
4. `src/routes/index.tsx` — restyle Hero, Services, Capabilities, Approach, Impact, Contact, Footer per above. No copy changes; only className/structure updates around existing text.

## What stays the same

- All copy and section ordering
- Site title, meta, OG image
- The "taglabstudio (a Taglab agency)" footer branding
- The two case studies (LA toy drive, Middle East NGO) — same wording
- The `+22%` avg gift value uplift stat and other metrics
- Section IDs and anchor navigation

## Out of scope

- No new pages or routes
- No new images (we'll use CSS gradients for the hero background instead of importing a hero image to avoid asset dependencies)
- No content rewrites
