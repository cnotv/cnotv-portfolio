# cnotv portfolio

The portfolio site at [cnotv.xyz](https://cnotv.xyz): a Vue 3 page with a Three.js hero and
skills city, built on [`@webgamekit/threejs`](https://www.npmjs.com/package/@webgamekit/threejs)
and [`@webgamekit/animation`](https://www.npmjs.com/package/@webgamekit/animation).

[![Performance](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cnotv/cnotv-portfolio/badges/badges/lighthouse-performance.json)](https://cnotv.xyz/)
[![Accessibility](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cnotv/cnotv-portfolio/badges/badges/lighthouse-accessibility.json)](https://cnotv.xyz/)
[![SEO](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cnotv/cnotv-portfolio/badges/badges/lighthouse-seo.json)](https://cnotv.xyz/)

## Related sites

| Site                                           | Repository                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------- |
| [games.cnotv.xyz](https://games.cnotv.xyz)     | [cnotv/games-lobby](https://github.com/cnotv/games-lobby)                 |
| [strudel.cnotv.xyz](https://strudel.cnotv.xyz) | [cnotv/strudel-node-editor](https://github.com/cnotv/strudel-node-editor) |
| [lab.cnotv.xyz](https://lab.cnotv.xyz)         | [cnotv/generative-art](https://github.com/cnotv/generative-art)           |

## Run it

```bash
pnpm install
```

```bash
pnpm dev --port 5317 --strictPort
```

Checks: `pnpm lint`, `pnpm lint:css`, `pnpm test:unit`, `pnpm build`. How this page was built
is documented in generative-art's
[journey docs](https://cnotv.github.io/generative-art/docs/docs/journey/homepage-sleeping-logo-and-skills-city).
