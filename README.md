<h1>Create Nextjs Markox App</h1>
<p>Nextjs App with <span style="color:#0470d6; font-weight: 700;">typescript</span> configure with redux, styled-components, linterns, formatters and much more...</p>

## 1. Installation

```js
// Creates a folder inside the route
npx create_next_markox_app folder_name
// Clone in the actual route without creating a new folder
npx create_next_markox_app .
```

## 2. Execution

```js
npm start // run compiled app
npm run build // build app
npm run lint // run lintern and check code errors
npm run lint:install // install linterns (there are pre-installed, for updates or errors)
```

## 3. Configuration

.env.example:

You must **create two** files `.env.production` and `.env.development` with the following parameters:

```js
NEXT_PUBLIC_WEB_URL= // url of your web (if development probably http://localhost:3000)
NEXT_PUBLIC_IS_PRODUCTION= // true or false
```

## 4. Structure

```js
├── .next
├── node_modules
├── public
├── src
│   ├── components
│   ├── hooks
│   ├── lib
│   ├── pages
│   ├── redux
│   ├── styles
│   │	├── global
│   │	├── pageStyled
│   ├── types
│   ├── utils
├── .editorconfig
├── .env.development
├── .env.example
├── .env.production
├── .eslintrc.js
├── .gitignore
├── .lintstagedrc.js
├── manifest.config.cjs
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── sitemap.config.cjs
```

# 5. Related

- [create-next-app](https://www.npmjs.com/package/create-next-app) - Create Next.js apps in one command
- [Nextjs](https://nextjs.org/) - The React Framework for Production
- [Typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [Styled-components](https://styled-components.com/) - Visual primitives for the component age.
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code.
- [Rome](https://rome.tools/) - An experimental JavaScript toolchain.

# 6. Maintainers

- [Markox](https://github.com/Markox36) - **Markox** (author)
- [Tutitoos](https://github.com/Tutitoos) - **Tutitoos** (contributor)