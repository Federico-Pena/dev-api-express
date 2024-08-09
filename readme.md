# dev-api-express

## Table of Contents

- [Usage](#usage)
- [Overview](#overview)
- [Features](#features)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Usage

You can use **dev-api-express** directly with `npx`, so there's no need to install it globally.

The CLI will guide you through selecting the language (TypeScript or JavaScript).

```bash
npx dev-api-express
```

## Overview

**dev-api-express** is a CLI tool designed to quickly generate an Express API template with support for TypeScript or JavaScript. It comes pre-configured with ESLint and Prettier. This tool simplifies the setup process, allowing developers to focus on building their applications.

## Features

- **Express API Template**: Quickly generate a new Express API project.
- **TypeScript or JavaScript**: Choose between TypeScript and JavaScript for your project.
- **ESLint and Prettier**: Integrated ESLint and Prettier configurations for code linting and formatting.
- **No Installation Required**: Use via `npx` without needing to install globally.

## Project structure

### TypeScript

```
├── .vscode
│ ├── extensions.json
│ └── settings.json
│ ├── public
│ │ ├── 404.html
│ │ ├── index.css
│ │ ├── index.html
│ │ |── index.js
│ │ └── node-icon.ico
├── src
│ ├── config
│ │ └── apiConfig.ts
│ ├── controllers
│ │ ├── someController.ts
│ │ └── someController.test.ts
│ ├── middlewares
│ │ ├── otherMiddleware.ts
│ │ └── sometMiddleware.ts
│ ├── routes
│ │ └── someRouter.routes.ts
│ ├── index.ts
│ ├── test.test.ts
├── build
│ └── (Compiled TypeScript)
├── .env.example
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package-lock.json
├── package.json
├── readme.md
└── tsconfig.json
```

### Javascript

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
│ ├── config
│ │ └── apiConfig.js
│ ├── controllers
│ │ ├── someController.js
│ │ └── someController.test.js
│ ├── middlewares
│ │ ├── otherMiddleware.js
│ │ └── sometMiddleware.js
│ ├── routes
│ │ └── someRouter.routes.js
│ ├── index.js
│ ├── test.test.js
├── .env.example
├── .eslintrc
├── .gitignore
├── .prettierrc
├── package-lock.json
├── package.json
└── readme.md
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
