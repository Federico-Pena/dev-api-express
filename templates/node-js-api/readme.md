# Template for Api with JavaScript

Basic JavaScript express api template, standard for linting and prettier config for formatting. You must install eslint and prettier extension.

## Table of contents

- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Project structure](#project-structure)

## Scripts

To run tests, run the following command

```bash
  npm run test
```

To run development server, run the following command

```bash
  npm run dev
```

## Dependencies

#### Dependencies

- cors
- express

#### Dev Dependencies

- standard
- supertest
- vitest

## Project structure

```
├── .vscode
│ ├── extensions.json
│ └── settings.json
├── public
│ ├── 404.html
│ ├── index.css
│ ├── index.html
│ |── index.js
│ └── node-icon.ico
├── src
│ ├── app
│ │ └── app.js
│ ├── config
│ │ └── apiConfig.js
│ ├── controllers
│ │ └── someController.js
│ ├── middlewares
│ │ └── logger.js
│ ├── routes
│ │ └── someRouter.routes.js
│ ├── index.js
├── tests
│ ├── controllers
│ │ └── someController.test.js
│ ├── middlewares
│ │ └── logger.test.js
├── .env
├── .eslintrc
├── .gitignore
├── .prettierrc
├── package.json
├── readme.md 
└── vitest.config
```
