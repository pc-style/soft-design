# Components

Use `assets/components.css` as the starting recipe, not a global reset for an existing app. It is scoped to `.soft-ui`. The runnable example shows the markup and real behavior.

## Navigation and grouped rows

Use ordinary links for routes and buttons for in-place state changes. Selected navigation gets a quiet surface fill and `aria-current="page"`. A sidebar is optional. Search belongs near the list it filters; provide a real empty state and a clear reset.

One outlined group can contain several rows. Keep labels left and controls right with a stable control column. A title and helper text belong to the same row. Split groups by purpose; don't add a floating card around each switch.

## Buttons

- Secondary: neutral background, hairline border, 8px radius, 48px minimum target.
- Primary: graphite or the rare pale-lime fill. Keep polished materials local to the action.
- Destructive: explicit wording and appropriate destructive color. Do not rely on color alone.
- Disabled: native `disabled`, distinguishable styling, no hover/press response.
- Icon-only: accessible name and 48px target. Decorative icons are hidden from assistive technology.

Avoid hover lifts. Use a surface or text change. If a press scale is used, keep it very small and only on the button—not the containing card. The content dissolve never scales.

## Switch and range

Use a native checkbox or a button with `role="switch"`, `aria-checked`, and an accessible label. Space and Enter work naturally on the button. Keep a 48px outer hit area even for a 28–32px visible track. A light thumb and restrained inset highlight make it tactile; do not put glass behind the whole settings group.

Use a native range input with label, min/max/step, and a value output. Arrow keys and Home/End must work. Update the output and fill synchronously. Never dissolve or tween slider values while dragging.

## Tabs and inspectors

Use `tablist`, `tab`, `tabpanel`, connected IDs, and one selected tab in the tab order. Left/Right and Home/End move selection. Keep focus on the selected tab. An underline can move in 300ms, but its panel content uses selective soft dissolve independently.

In an inspector, changing one value should only transition that value. Switching to another item can transition its title and body while the list and controls remain stable. Do not blur selected navigation or move the inspector itself.

## Forms and dialogs

Labels are persistent; placeholder text is not a label. Validation sits beside its field, explains how to recover, and sets `aria-invalid` and `aria-describedby`. Keep successful feedback local. A demo should say that it saved locally instead of implying a server write.

Use a native dialog or the project's established accessible dialog component. Escape closes it, focus enters it and returns to the trigger, background content is inert. A popup may use the layered shadow token and 12px corners. Don't add a large blur to the entire app behind it.

## Things to avoid

- Decorative statistics or charts in a tool that has no such data.
- A marketing hero above an operational screen.
- Rounded pills for every menu item, card, and label.
- Tiny muted text used to manufacture hierarchy.
- Fake controls that never change state.
- Renaming the user's product or dropping inconvenient functionality during a redesign.
