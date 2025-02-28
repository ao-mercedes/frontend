# Changelog 27 February 2025

- [x] Wireframe
- [ ] Body1 (masthead, entry point)
    - [x] layering
    - [x] scroll guide
- [ ] Navigation Hamburger
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

# Changelog 28 February 2025

- [ ] Body2 - First Pitch
    - [ ] Download images and text content
    - [ ] Components (From top to bottom) - Mobile
        - [ ] Container flex
            - [ ] Byline
            - [ ] Pitch Information
            - [ ] Carousel
                - [ ] Static Component
                    - [ ] Pin to after Pitch Information
                - [ ] Animated, Transit on scroll
                - [ ] Interaction
                - [ ] Margin
    - [ ] Components (From top to bottom) - Tablet
        - [ ] Container flex
            - [ ] Byline
            - [ ] Pitch Information
            - [ ] Carousel
                - [ ] Static Component
                    - [ ] Pin to after Pitch Information
                - [ ] Animated, Transit on scroll
                - [ ] Interaction
                - [ ] Margin
    - [ ] Components (From top to bottom) - Desktop
        - [ ] Container flex
            - [ ] Byline
            - [ ] Pitch Information
            - [ ] Carousel
                - [ ] Static Component
                    - [ ] Pin to after Pitch Information
                - [ ] Animated, Transit on scroll
                - [ ] Interaction
                - [ ] Margin
        - [ ] Wireframe + add background

# Issues

- [x] [Issue-0001] Circle Marker Obstructing Clicks
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