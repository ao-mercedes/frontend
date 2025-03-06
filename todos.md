# Changelog 27 February 2025

- [x] Wireframe
- [x] Body1 (masthead, entry point)
    - [x] layering
    - [x] scroll guide
- [x] Navigation Hamburger
    - [x] Modal pin top right
    - [x] Expandable
    - [x] Mobile
        - [x] Horizontal Bar
            - [x] `RARROW <- [WA <- IG <- TG <- FB <- TWITTER] <- PIVOT`
        - [x] Icon Color: White
    - [x] Tablet
        - [x] Vertical Bar
      ```
          PIVOT
          -
          WA
          IG
          TG
          FB
          TWITTER
          -
          UARROW
      ```
        - [x] Icon Color: Black
    - [x] Desktop
        - [x] Bar same as Tablet
        - [x] Icon Color: Black

# Changelog 28 February 2025 - 2 March 2025

- [ ] Body2 - First Pitch
    - [x] Download images and text content
    - [ ] Components (From top to bottom) - Mobile
        - [ ] Container flex
            - [x] Byline
            - [x] Pitch Information
            - [x] Carousel
                - [x] Static Component
                    - [x] Pin to after Pitch Information
                - [x] Animation, Transit on scroll
                - [x] Interaction
                - [x] Margins
                - [ ] Lines
    - [ ] Components (From top to bottom) - Tablet
        - [ ] Container flex
            - [x] Byline
            - [x] Pitch Information
            - [x] Carousel
                - [x] Static Component
                    - [x] Pin to after Pitch Information
                - [x] Animation, Transit on scroll
                - [x] Interaction
                - [x] Margins
                - [ ] Lines
    - [ ] Components (From top to bottom) - Desktop
        - [ ] Container flex
            - [x] Byline
            - [x] Pitch Information
            - [x] Carousel
                - [x] Static Component
                    - [x] Pin to after Pitch Information
                - [x] Animation, Transit on scroll
                - [x] Interaction
                - [x] Margins
                - [ ] Lines
    - [x] Wireframe + add background

# Changelog 28 February 2025 - 2 March 2025

- [ ] Body3 - Pedigree
    - [ ] Mobile
        - [x] Header
        - [x] Content: Porsche
            - [x] Text
            - [x] Image
        - [x] Omit Content: Mercedes
        - [x] BottomGuide
            - [x] Text
            - [x] Animation
    - [x] Tablet
        - [x] Header
        - [x] Content: Porsche
            - [x] Text
            - [x] Image
        - [x] Content: Mercedes
            - [x] Text
            - [x] Image
        - [x] BottomGuide
            - [x] Text
            - [x] Animation
    - [x] Desktop
        - [x] Header
        - [x] Content: Porsche
            - [x] Text
            - [x] Image
        - [x] Content: Mercedes
            - [x] Text
            - [x] Image
        - [x] BottomGuide
            - [x] Text
            - [x] Animation

# Changelog 3 March 2025

- [ ] Body4
    - [ ] Mobile
        - [x] Header
        - [ ] 1:FrontSeatBackView
            - [x] background
            - [x] text
            - [x] white bubble
            - [x] black bubble
            - [ ] lines
        - [ ] 2:FrontSeatFrontView
            - [x] background
            - [x] text
            - [x] white bubble
            - [x] black bubble
            - [ ] lines
    - [ ] Tablet
        - [x] Header
        - [ ] 1:FrontSeatBackView
            - [x] background
            - [x] text
            - [x] white bubble
            - [x] black bubble
            - [ ] lines
        - [ ] 2:FrontSeatFrontView
            - [x] background
            - [x] text
            - [x] white bubble
            - [x] black bubble
            - [ ] lines
    - [ ] Desktop
        - [x] Header
        - [ ] 1:FrontSeatBackView
            - [x] background
            - [x] text
            - [x] white laser
            - [x] bubble
            - [ ] lines
        - [ ] 2:FrontSeatFrontView
            - [x] background
            - [x] text
            - [x] white laser
            - [x] bubble
            - [ ] lines

# Changelog 4 March 2025

- [ ] Body5
    - [x] Mobile
        - [x] Content (Full Height)
            - [x] Content 1
            - [x] Youtube
            - [x] Content 2
            - [x] With yellow car fixed at bottom
        - [x] Footer
    - [x] Tablet
        - [x] Content (Full Height)
            - [x] Content 1
            - [x] Youtube
            - [x] Content 2
            - [x] With yellow car fixed at bottom
        - [x] Footer
    - [x] Desktop
        - [x] Content (Full Height)
            - [x] Content 1
            - [x] Youtube
            - [x] Content 2
            - [x] With yellow car fixed at bottom
        - [x] Footer

# Changelog 5-6 March 2025

- [ ] Body6
    - [ ] Desktop
        - [ ] Content (Full Height)
            - [x] Header
            - [x] Paragraphs
            - [x] Bubbles
                - [x] Modal
                - [x] Animation/Transitions
                - [ ] Lines
            - [x] Summary
                - [x] Animation/Transitions
            - [x] Advertisement
    - [ ] Tablet
        - [ ] Content (Full Height)
            - [x] Header
            - [x] Paragraphs
            - [ ] Bubbles
                - [ ] Modal
                - [ ] Animation/Transitions
                - [ ] Lines
            - [ ] Summary
                - [ ] Animation/Transitions
            - [ ] Advertisement
    - [ ] Mobile
        - [ ] Content (Full Height)
            - [ ] Header
            - [x] Paragraphs
            - [ ] Bubbles
                - [ ] Modal
                - [ ] Animation/Transitions
                - [ ] Lines
            - [ ] Summary
                - [ ] Animation/Transitions
            - [ ] Advertisement
          
- [ ] Footer
  - [x] Mobile
  - [ ] Tablet
  - [x] Desktop
# Issues

- [x] [Issue-0001] [Component] Circle Marker Obstructing Clicks
    - ClassName Ref: `focus-center-circle-mark-wrapper` \
      On `Body2`'s `Carousel`, the circle marker is blocking mouse clicks on Carousel Dots.
      This is due to circle marker having an absolute position.
    - Fixed with `pointer-events: none` on `focus-center-circle-mark-wrapper`

- [x] [Issue-0002] On leaving viewport, animated carousel image dissapears and excessive rerenders.
    - In `Body2`, when at least 50% of the carousel placeholder is in viewport (intersection), the car image scrolls
      in. \
      If the intersection becomes less 50%, the car image dissapears because
      `setStartTransitionStep1(entry.isIntersecting)` restarts animation on leave. looks not very appealing.
    - Fixed with

```
                if (entry.isIntersecting) {
                    setStartTransitionStep1(entry.isIntersecting);
                }
```

- [ ] [Issue-0003] [Component] Lines are not working
    - branch:
      `(body2-carousel-lines)`
    - svg lines are not in the correct position. need to research
        1. how to set starting x an y
        2. calculate x offset L, y offset W, direction
    - Example

```
            (L = 10, W = 0, direction = right)
    (x,y) --------------------------------------------- (x+L,y+W,right)
```

= [ ] [Issue-0006] [Component::Rendering] Same state rerendering

- Component `Body2.Carousel`
- [ ] When the focused item and the next focus item is the same, an unnecessary trigger of `setFocusItem` is executed.
- [ ] TODO, change `items: []ItemData` -> `items: {data: []ItemData, focusIdx: number}`, then check if next focus is the
  same
  as `items.focusIdx`

- [ ] [Issue-0007] [Performace] Large Chunk on Build

when running `pnpm build`, the warning appears:

```
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
```

- [ ] [Issue-0008] [DevOps] pre-commit hook linting continues when error

This will cause false positives during CI/CD where the release process will run a malformed artefact.

Sample when execute `./pre-commit`:

Error:

```
/Users/univ/asiaone-technical-assessment/mercedes-frontend/src/layoutComponents/Body4/index.tsx
  83:40  error  'bubbleText' is defined but never used  @typescript-eslint/no-unused-vars

✖ 1 problem (1 error, 0 warnings)

 ELIFECYCLE  Command failed with exit code 1.
```

Commit still success:

```
[body4 7eb538b] body4: big bubble styling
 2 files changed, 85 insertions(+), 33 deletions(-)
 create mode 100644 src/layoutComponents/Body4/index.css
```

- [ ] [Issue-0009] [Component::Display] Image shows partial text

Device Size: Tablet
Page: Body4

![](./planning/assets/issue_0009.png)

- [ ] [Issue-0010] TODO refactor and test if can use `useIntersectingRef` for Component: `Body4`::`ContentEndMarker`

- [ ] [Issue-0011] [Component::Display] ContentImage border color is not gradient.

- Device: Desktop
- Component: `Body6`::`ImageContent`, event: hover
- Problem:

When hovering over image of content, the border color should be with gradient ascent.

- Want:
    - image size remains
    - border overlaps inner and outer
    - border color gradient brown -> gold

- Got:
    - image size remains
    - border overlaps inner and outer
    - border color gradient brown
      ![](./planning/assets/issue_0011.png)

- [ ] [Issue-0012] [Component::Display] Missing advertisement image for tablet and mobile

Advertisement image is missing from provided materials.

Device: Tablet, Mobile
Component: `Body6`


- [ ] [Issue-0012] [Component::Display] Missing footer image for tablet

image is missing from provided materials.

Device: Mobile
Component: `Footer`