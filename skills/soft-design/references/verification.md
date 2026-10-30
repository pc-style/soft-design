# Acceptance checks

Judge the actual rendered UI, not just the CSS. Use the project's existing test and preview tooling. No particular browser automation package is required by this skill.

## Visual

- Both themes have readable primary and secondary text, clear selection, and visible focus.
- No oversized hero, unnecessary card grid, full-page glass treatment, or invented accent palette.
- At a desktop width and 390px, labels are readable, controls reachable, and there is no horizontal page overflow. A multi-pane app may become drill-down navigation on narrow screens.
- Inspect selected, disabled, empty, error, and open states relevant to the screen. Use asymmetric content and long labels, not only short placeholder strings.

## Behavior

- Search filters the actual data and has an empty result state.
- Switches and ranges update the indicated state. Any prototype-only behavior is stated clearly.
- Tabs have correct ARIA linkage, arrow-key navigation, and focus retention.
- A dialog supports Escape and focus return. Validation points to the actual invalid field.
- Reduced motion produces no content blur or dissolve. The new value still appears.

## Motion

Record changing two distinct pages or panels, then changing only a value. Move the actual pointer over neighboring controls before activation. Inspect intermediate frames, not only the settled end state.

- Changed content overlaps at the same origin with 300ms / 3px soft dissolve.
- Unchanged labels, borders, and navigation stay sharp and still.
- The panel bounds don't animate. No translation, scale, traveling light, wipe, or stagger.
- Repeatedly activating the same state does not trigger another dissolve.
- Rapid changes end on the latest requested state, remove outgoing snapshots, and preserve focus.
- Initial render does not dissolve.

Report the command and decisive result of executed checks. A screenshot demonstrates appearance; it does not prove keyboard behavior or persistence. A Chromium narrow viewport is not evidence of native mobile or native game-client integration.
