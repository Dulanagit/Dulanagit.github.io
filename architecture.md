# Architecture

This site is a single-page React app. Layout is fixed; **content lives in data files**. Add or remove items by editing those files — do not hard-code lists in components.

## Folder map

```
src/
  App.jsx                         # Header + sequential sections + Footer
  data/
    site.js                       # name, quote, hero image, nav, email, linkedin
    about.js                      # bio, education, techStack
    academic.js                   # research, implementations, writing
    engineering.js                # engineering project cards
    leadership.js                 # roles / orgs / workshops
  components/
    layout/Header.jsx, Footer.jsx
    ui/Section.jsx, Card.jsx, ShowMore.jsx
    sections/Hero, About, Academic, Engineering, Leadership, Contact
    twin/DigitalTwinSlot.jsx      # reserved mount for a future agent
```

Navigation is hash links (`#about`, `#academic`, …) with `scroll-margin-top` on sections. There is no router.

## Data shapes

### `site` (`src/data/site.js`)

```js
{
  name, quote, heroImage, email, linkedin,
  nav: [{ id, label, href }]
}
```

### Education (`about.education[]`)

```js
{ id, kind: "major" | "cert" | "course", title, org, status, year }
```

The first `kind: "major"` item is rendered as a featured block. Certs and courses are pills.

### Tech stack (`about.techStack[]`)

```js
{ id, name, icon }
```

`icon` is a short label for the grid. An interactive globe can reuse this array later.

### Cards (research, implementations, writing, engineering)

```js
{ id, title, summary, image?, href, tags? }
```

Omit `image` (or set `null`) to show a placeholder thumbnail.

### Leadership (`src/data/leadership.js`)

```js
{ id, role, org, period, summary, href? }
```

## How to add a project or paper

1. Open the matching file (`engineering.js` or `academic.js`).
2. Append an object with a unique `id`.
3. Save. The grid and Show more control update from the array length.

Same pattern for education, tech stack, and leadership.

## Show more

`ShowMore` wraps any list. It shows the first `N` items (`limit` prop, default `3`) and expands in place. The threshold is **not** stored in data files.

## Digital twin mount

The agent belongs in `src/components/twin/DigitalTwinSlot.jsx`, rendered at the bottom of Contact (`#contact`). Replace the placeholder well inside that component. Do not move Contact or add a new top-level section for the twin.
