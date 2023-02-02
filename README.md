## Introduction

This app was generated with the Vite preset `react-ts`. It also uses `material-ui`'s handy UI elements, `emotion` for custom styles, and `vitest` for a basic integration test suite.

There's a deployed version available at https://majestic-nasturtium-e760f0.netlify.app/.

### Running locally

To install dependencies: `yarn`

To run: `yarn dev`

To test: `yarn test`

## Approach

- The assignment left me with a lot of freedom, so I started by playing around with ideas for different layouts until I landed on a simple accordion-style "stack of options". It looked compact, yet still elegant. It can be used as an overview as well as a "documentation" of the different intents.
- As far as components go, I didn't need to extract too many "reusable" pieces, as many were readily available `material-ui`, and I only have a single page, so not much chance for reuse. Instead, I tried to identify the distinct pieces that make up the page - `SelectableIntent`, `ChatBubble`, etc. - and extract these for better readibility.
- The `intents` constant was very well-formed and followed a predictable format, so in some cases (like the chat bubble previews) I could get away with [accessing properties directly](https://github.com/abelerdesz/intent-wizard/blob/main/src/components/SelectableIntent.tsx#L85).
- The assignment mentioned tests as a plus, but I decided to include a very basic test suite to cover a few basic cases.

## What I would improve

- Some files, like `SelectableIntent`, are still a bit cluttered for my taste - I tried to strike a balance between readibility and time-efficiency, but I'm sure things could have been even better organized.
- Similarly, there's no real reason for an index.css - parts of it could safely be merged with the MUI theme, I think.
- I didn't put a strong emphasis on accessibility, so I'm sure things like `label`s for the checkboxes would make for a better experience.
- I wanted to build a better "selection" experience (where the whole row becomes highlighted in some way), but I decided to call it a day and add tests instead. It would've also been fun to build more of the "fake" wizard UI.
