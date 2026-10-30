# Selective soft dissolve

The approved motion combines a soft dissolve with selective replacement. It is not a glimm/WebGL sweep and does not require a rendering library.

## Exact recipe

| Property | Outgoing | Incoming |
| --- | --- | --- |
| Opacity | 1 → 0 | 0 → 1 |
| Filter | blur(0px) → blur(3px) | blur(3px) → blur(0px) |
| Duration | 300ms | 300ms |
| Easing | cubic-bezier(.4,0,.2,1) | same |
| Position/scale | unchanged | unchanged |

Both layers occupy the same origin. The old layer is absolute, visual-only, inert, and hidden from accessibility. The new layer is the actual content and receives interaction immediately. Clean up the old layer at completion or interruption. Never duplicate accessible IDs or tab stops.

If only “24” changes to “25”, animate that value. Do not animate its label, its row, or its whole inspector. If both title and explanation change, animate those fields separately while keeping their parent stable. A wholly different page can replace its content region; its persistent navigation/header controls remain outside the transition.

Use stable bounds for alternate tab panels and consistent line-height. Keep the shared DOM mounted. An unchanged value must not animate. Responsive reflow is normal; animated layout interpolation is not part of this system. For differently sized pages, use the destination's natural layout rather than adding a large permanent minimum height.

## Vanilla reference

```js
import { replaceContent } from './assets/motion.js';

// Apply to the smallest changed region. A repeated value is a no-op.
replaceContent(document.querySelector('#item-title'), 'Saved links');
replaceContent(document.querySelector('#item-count'), '18');
```

`replaceContent(element, trustedHTML, animate = true)` updates immediately, snapshots the outgoing content in an inaccessible shadow tree, and crossfades it. Call with `false` on initial render. Import `tokens.css` first. The function consumes `--content-duration`, `--content-blur`, and `--content-ease`.

This is a small **static DOM reference**, not a universal UI renderer. It copies computed styles into the outgoing snapshot, so scoped selectors and external stylesheets do not need to be read or recreated. Pass trusted, pre-rendered HTML. Escape user text before passing it; it is not a sanitizer. Do not pass a page root, a focused form, live media, a canvas, or a framework-owned tree. Pseudo-elements are not captured. Keep active controls outside a replaced region. For those cases, use framework state and the exported keyframes instead.

`dissolveFrames(incoming, blur)` exports the exact keyframes. In React/Vue/Svelte, render keyed old/new layers with your framework, use these frames or their CSS equivalent, and preserve shared components. There is no requirement to add a motion dependency. Do not call the vanilla DOM helper behind the framework's renderer.

## Interruptions and accessibility

- A new update supersedes the old one. No animation queue, disabled navigation, or artificial delay before applying state.
- Reduced motion swaps immediately with no blur. Changing the OS preference during an animation settles it immediately.
- Resize settles a DOM snapshot; don't stretch it across a new layout.
- Focus stays with the initiating control. Screen readers get only the new live content. Use a concise status announcement when the change matters; don't announce entire pages twice.
- Do not animate initial load, keystrokes, range dragging, or every hover.

## Control feedback is separate

200ms micro-feedback, 240ms switches, 300ms tab indicators; `cubic-bezier(.22,1,.36,1)`. A switch thumb can translate within its track. This exception does not authorize sliding page content. Range input follows the pointer immediately. Sound is optional, opt-in, and never the only feedback.
