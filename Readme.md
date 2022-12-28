# StackOverlfow Clone

---

- 클론 사이트: [stackoverflow](https://stackoverflow.com/)
- 클론한 사이트: [stackoverflow-clone](https://stackoverflow-clone-phi.vercel.app/)
- 기간: 12.26 - 12.29
- HTML, SCSS

## File Tree

---

- `public/*` - svg, png 관련 img 폴더
- `scss/*` - globals, layout, util 컴포넌트화, 최종 style.scss 로 forward

```bash
// scss/*
├── globals
│   ├── _boilerplate.scss
│   ├── _colors.scss
│   ├── _index.scss
│   └── _typography.scss
├── layout
│   └── _index.scss
├── style.scss
└── util
    ├── _breakpoints.scss
    ├── _fonts.scss
    └── _index.scss
```

## Overview

---

- responsive layout

breakpoints: 992px, 978px, 640px

![Alt Text](/public/stackoverflow-clone.gif)

## Running Locally

---

```bash
git clone <repo address>
cd <repo address>
yarn
yarn run dev
```
