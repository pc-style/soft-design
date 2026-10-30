---
name: soft-design
description: "Builds restrained, tactile product interfaces with quiet hierarchy and selective soft-dissolve transitions. Use when creating or redesigning application screens, settings, dashboards, tools, or components in the soft-design style."
license: MIT
---

# Soft Design

Quiet structure. Tactile controls. Content changes without traveling.

This is an implementable system, not a moodboard. The resources here are the source of truth; no reference website or previous conversation is needed. Keep the user's product, terminology, workflows, and information density. Change the design, not the product.

## Start here

1. Inspect the existing interface and identify its tasks, navigation, controls, and states. A supplied screenshot is evidence of functionality, not a mandate to preserve its layout or colors.
2. Read [foundations](references/foundations.md) and [components](references/components.md). For any changing content, read [motion](references/motion.md).
3. Open [the runnable example](examples/index.html) through a local HTTP server when possible. Its source includes both themes, settings, validation, keyboard tabs, and the selected transition. It demonstrates rules; do not copy its subject or layout into every product.
4. Implement using the project's stack. Copy [tokens](assets/tokens.css), then adapt the relevant [component recipes](assets/components.css). Preserve token roles. Use the bundled Inter font and retain its license, or the product's existing neutral UI font if replacing it would be disruptive.
5. Render and verify the [acceptance checks](references/verification.md). Inspect screenshots and a recording of actual interaction, including narrow layouts and reduced motion. Do not claim a motion implementation works from a static image.

## The taste, in constraints

- Default to near-black `#050505` with `#101010` grouped surfaces, `#232323` decorative borders, `#e2e2e2` text, and `#888888` supporting text. A complete light theme is included; use it when the user's product or reference calls for it.
- Use 16px/24px reading text and headings; 14px/20px controls and metadata. Weight, spacing, and contrast establish hierarchy. No oversized hero, tiny uppercase labels, or ornamental type system.
- Use an 8px spacing rhythm: 8, 16, 24, 32, 48, 64. Prose tops out near 550px. Operational screens and grouped lists use the available width; never squeeze a multi-pane tool into a blog column.
- Related settings share one surface with rows and hairline dividers. Do not wrap every label in a card. The selected navigation row gets a subtle fill, not a glowing pill.
- Keep reading surfaces flat. Depth belongs on a popup or the small control the user touches. A polished neutral switch thumb, graphite button, or pale-lime action can be the exception. Never make the whole interface glassy or green.
- Controls have at least 48px hit targets even if the visible track or icon is smaller. Focus must be visible; native semantics and keyboard behavior are part of the design.
- Keep primary actions scarce. Use ordinary product language, not invented metrics, generic productivity copy, or a new brand name the user did not request.

## Signature motion: selective soft dissolve

**This is the chosen effect. Do not substitute a sweep, slide, scale, stagger, spring, or full-page blur.**

- Only changed content crossfades: **300ms**, **3px → 0px** incoming blur, **0px → 3px** outgoing blur, `cubic-bezier(.4,0,.2,1)`.
- Shared labels, controls, selection chrome, borders, and layout remain untouched. A small count update must not fade the entire panel.
- Keep the same bounds for alternate content in a tab or settings region. Do not animate `height`, `width`, or positional offsets. Allow normal responsive layout; do not force unrelated pages to have identical heights.
- The new state is available immediately. Rapid input replaces the previous transition; it never queues. Respect reduced motion with an immediate swap and no blur. Do not animate initial page load.
- Normal controls use their own local feedback: 200ms micro-feedback, 240ms switches, 300ms indicators, `cubic-bezier(.22,1,.36,1)`. Sliders track input immediately.

See [motion.md](references/motion.md) for layering, accessibility, framework guidance, and limits of the included [vanilla implementation](assets/motion.js). It exports the exact keyframes for use in another framework. Do not mutate framework-owned DOM with the vanilla helper.

## Adaptation, not imitation

Build the user's screen, not a copy of this example or a reference author's site. An operational tool may need a wide list and detail area. A document app may need a reading column. The design language stays consistent; the architecture follows the task.

Preserve working controls. If implementing a visual prototype without a backend, provide meaningful local behavior and identify its limits. Do not claim that UI-only switches change a real application.

## Finish with evidence

Show the implemented interface, describe any product assumptions, and report the checks you actually ran. Include a live preview when the user should explore. Keep screenshots of the default state and important changed states together. Report unverified environments honestly.
