# Content guide

Edit **data files only**. Do not change components to add a paper, project, or role. After you save, the page updates on its own.

For shapes and folder layout, see [architecture.md](architecture.md).

## Which file to open

| I want to change | Open |
| --- | --- |
| Name, quote, hero photo, email, LinkedIn, nav labels | [src/data/site.js](src/data/site.js) |
| Bio, education, tech stack | [src/data/about.js](src/data/about.js) |
| Papers, academic projects, articles | [src/data/academic.js](src/data/academic.js) |
| Engineering projects | [src/data/engineering.js](src/data/engineering.js) |
| Roles, workshops, organizations | [src/data/leadership.js](src/data/leadership.js) |

## Add, edit, remove

**Edit:** change the text (or `href`) on an existing object. Keep the `id`.

**Add:** paste a new object into the array. Give it a unique `id` (for example `eng-5`, not another `eng-1`). Put a comma after the previous object.

**Remove:** delete the whole `{ ... }` object. If it was in the middle of the array, leave commas valid — no trailing comma after a missing item, no double commas.

Lists with more than **3** items get a **Show more** button. That limit lives in the UI, not in the data files.

- `image: null` — gray placeholder thumbnail
- `href: null` — title/role is not a link
- Education `kind: "major"` — featured block at the top of Education (use one major)

## Site (name, quote, contact)

File: [src/data/site.js](src/data/site.js)

Change `name`, `quote`, `email`, and `linkedin` in place. Leave `nav` alone unless you rename a section label.

## Bio, education, tech stack

File: [src/data/about.js](src/data/about.js)

Replace the `bio` string with your paragraph.

### Education template

```js
{
  id: 'edu-cert-3',
  kind: 'cert', // 'major' | 'cert' | 'course'
  title: 'Certificate title',
  org: 'Issuer',
  status: 'completed', // or 'ongoing'
  year: '2025',
},
```

### Tech stack template

```js
{ id: 'tech-rust', name: 'Rust', icon: 'Rs' },
```

`icon` is a short label shown in the circle. A globe can reuse this list later.

## Cards (papers, academic projects, writing, engineering)

Files:

- Research / implementations / writing → [src/data/academic.js](src/data/academic.js) (`research`, `implementations`, or `writing` array)
- Engineering → [src/data/engineering.js](src/data/engineering.js)

Same object shape for all of these:

```js
{
  id: 'eng-5',
  title: 'Project title',
  summary: 'One or two sentences.',
  image: null,
  href: 'https://example.com/project',
  tags: ['Tag'],
},
```

## Leadership

File: [src/data/leadership.js](src/data/leadership.js)

```js
{
  id: 'lead-5',
  role: 'Role title',
  org: 'Organization',
  period: '2024 — present',
  summary: 'One or two sentences about the work.',
  href: null,
},
```

## Images

1. Put the file in [src/assets](src/assets) (for example `src/assets/project-alpha.png`).
2. **Hero:** in [src/data/site.js](src/data/site.js), keep `import heroImage from '../assets/hero.png'` and swap the filename.
3. **Card:** in that data file, import the image and set `image` on the item:

```js
import projectAlpha from '../assets/project-alpha.png';

// then on the item:
image: projectAlpha,
```

## What not to edit

- Do not add list items inside `src/components/`.
- Do not add a new top-level section for the digital twin. That placeholder stays in [src/components/twin/DigitalTwinSlot.jsx](src/components/twin/DigitalTwinSlot.jsx), at the bottom of Contact.
