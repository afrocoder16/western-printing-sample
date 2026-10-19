# Western Printing design direction: “Process Color”

Western Printing’s own logo is four brush strokes in the four process inks (yellow, magenta, cyan, black), and its site is built on a dark press-room photo with a cyan accent. This design takes that seriously: **the four inks are the entire palette, the layout language, and the story.**

## Palette

| Role | Color | Notes |
| --- | --- | --- |
| Cyan | `#00AEEF` | Printing. Text-safe version `#00678F` |
| Magenta | `#EC008C` | Signs. Text-safe version `#B0006A` |
| Yellow | `#FFE600` | Promotional. Always a fill, never text on white |
| Black | `#231F20` | Design, type, and the “key” plate |
| Blue | `#2E3192` | Mailing & Finishing. Cyan + magenta overprint |
| Ink | `#141313` / `#0D0C0C` | Body text, dark sections |
| Paper | `#F2F4F5` | Quiet section backgrounds |

Each service owns one ink (Printing = cyan, Signs = magenta, Promotional = yellow, Design = black, Mailing & Finishing = overprint blue). A `t-cyan` / `t-magenta` / `t-yellow` / `t-ink` / `t-blue` class on any block sets `--tone` (fill), `--on` (text on the fill), and `--tone-text` (readable on white).

## Type

- **Display:** Barlow Condensed 800, uppercase. Signage-strong and compact, which is what Western’s own site does with its all-caps headings.
- **Body/UI:** Public Sans. Neutral and highly legible at small sizes.

## Signature devices

- **The color bar.** A four-segment strip (C, M, Y, K) caps the header, closes the footer, finishes every hero, and underlines nav items on hover. It is the strip printers put on a press sheet.
- **Four steps, four colors.** Western’s real process (The Process, The Idea, Proof, Finalize) maps one-to-one onto C, M, Y, K.
- **Halftone dots** as a quiet texture on dark sections.
- **Highlight strokes** under the hero’s three promises, slanted like the logo’s strokes.

## Interactive labs

Every service page has one hands-on demo that explains the service by letting the visitor try it:

| Service | Lab | What it shows |
| --- | --- | --- |
| Printing | Plates | A poster built from four ink plates, with a misregistration slider |
| Signs | Sign Studio | Storefront / yard / banner / window preview with live text and colors |
| Promotional | Merch Studio | Tee / cap / tote / mug with screen print vs embroidery |
| Design | Proof Room | Spot three proof errors, fix them, approve the proof |
| Mailing & Finishing | Bindery Bench | Folding, booklets, die cut, laminating, plus a kit builder |

## Generic-default check

The easy answer for a printer is a navy-and-orange “craft” template with a serif headline. Western’s real brand is the opposite: loud, saturated, and built from process ink. The design keeps that energy, then gives it structure with a strict four-ink system so it never turns into a rainbow.
