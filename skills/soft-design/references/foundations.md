# Foundations

## Color roles

| Token | Dark | Light | Role |
| --- | --- | --- | --- |
| `--background` | #050505 | #ffffff | Application canvas |
| `--muted` | #101010 | #f5f5f5 | Related rows, selected navigation |
| `--foreground` | #e2e2e2 | #505050 | Reading and control labels |
| `--strong` | #f4f4f4 | #202020 | Important labels, headings |
| `--muted-foreground` | #888888 | #6e6e6e | Supporting copy, not disabled opacity |
| `--border` | #232323 | #e4e4e4 | Decorative grouping, not the only control boundary |
| `--ring` | #aaaaaa | #737373 | Visible keyboard focus |
| `--accent` | #dced9f | #dced9f | Rare pale-lime primary action |
| `--accent-foreground` | #35451c | #35451c | Text on lime |
| `--destructive` | #ff9b90 | #b43c2f | Error with accompanying words |

Read `assets/tokens.css` for the complete set. Normal text needs at least 4.5:1 contrast; focus and meaningful non-text marks need 3:1. Decorative dividers can be quieter. Do not make an unavailable action indistinguishable from an enabled one.

## Type and spacing

Use the bundled variable Inter (`assets/fonts/inter.ttf`, OFL license beside it). Keep weights 400 for reading and 500 for headings; 560 is an occasional emphasis. Use monospace for code or values that benefit from it, not every label. Counts and numeric outputs use tabular numerals.

16/24 and 14/20 are the primary type styles. Avoid shrinking text to fit dense content; improve grouping, use scrolling, or adjust the layout instead. Use 24px mobile gutters where space permits. A dense embedded tool can use 16px gutters without shrinking hit targets.

Spacing is 8-based. Labels and their explanation: 4–8px. Title to content: 16px. Related controls: 16–24px. Separate groups: 32–48px. Section separation: 48–64px. Do not turn these into arbitrary padding on every wrapper.

## Layout decisions

| Content | Layout |
| --- | --- |
| Reading or a single study | Roughly 550px column |
| Settings | One grouped surface, labels left, controls right |
| Long collection | Wide rows, not a dashboard grid |
| Tool with categories and selected item details | Stable navigation + list + inspector, if the available width supports it |
| Narrow tool | Stack or drill into a selected item with a clear back path; do not squeeze three columns until labels become tiny |

A 232px navigation rail is a useful desktop starting point, not a compulsory sidebar for every screen. Keep the user's top navigation if it fits the job better. A blank area is not an invitation to add charts or decorative panels.

## Surface rules

8px controls, 12px popups, 16px groups, full-round switch thumbs. A subtle border identifies groups. Shadows belong to floating UI or tactile controls, not all content containers.

Choose at most one focal material per region: a softly highlighted switch thumb, graphite primary, or pale-lime action. Everything around it stays neutral. Soft design is **not** low contrast, neumorphism, frosted-glass backgrounds, colorful gradients, or floating cards everywhere.

## Originality

Derive hierarchy from the actual product. Do not import another designer's navigation, showcase text, signature color composition, or demo names. References shaped these rules; they are not templates to recreate.
