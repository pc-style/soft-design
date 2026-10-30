# soft-design

A portable design skill for quiet product interfaces: neutral surfaces, tactile controls, and content that changes without sliding around.

The signature transition is **selective soft dissolve**: only changed content blends over 300ms with a 3px blur. Shared labels, borders, and navigation stay still.

## Install

With Bun:

```sh
bunx skills add pc-style/soft-design --skill soft-design
```

For Amp across your projects:

```sh
bunx skills add pc-style/soft-design --skill soft-design -a amp -g
```

The CLI lets you choose other supported agents. Project-local installation is the default. A private repository requires GitHub access in your Git environment.

Then ask your agent:

> Use soft-design to redesign this screen. Keep its functionality, implement the controls, and show the rendered result.

## Included

- `skills/soft-design/SKILL.md` — the design rules and implementation workflow.
- `references/` — foundations, components, motion, and verification.
- `assets/` — semantic tokens, scoped component CSS, selective-dissolve JavaScript, and self-hosted Inter with its OFL license.
- `examples/` — a working, dependency-free example with light/dark themes, settings, tabs, validation, and motion.

All paths below `SKILL.md` travel with the skill. No original conversation, design portal, reference site, CDN, or package install is needed to use the example.

## Run the example

From this repository:

```sh
python3 -m http.server 8080
```

Open `/skills/soft-design/examples/` on that server. Use an HTTP server, not `file://`, because the example imports JavaScript modules.

The code is a reference implementation, not a framework component package. Copy only the recipes your product needs. The motion notes explain how to use the same frames in React, Vue, or Svelte without mutating framework-owned DOM.

## Provenance

Developed from pcstyle's preferences, with inspiration from [Dhruv Suthar](https://dhrv.pw/design), [his experiments](https://dhrv.pw/experiments), [Glaze](https://design.how/systems/glaze), [Lime](https://design.how/systems/lime), [Gil Rodrigues](https://gildrb.com/), and an early [glimm](https://glimm.dev/) motion reference. The selected effect is an original in-place soft dissolve, not glimm's shader sweep. These links are credits, not required inputs or templates to copy.

MIT for the skill and original code. Inter retains its SIL Open Font License in `assets/fonts/OFL.txt`.
