# `@jonmatum/my-react-library`

Jonatan Mata presents a powerful library for enhancing React applications with pre-configured components and utilities.

![version](https://img.shields.io/badge/version-1.5.1-blue)
![license](https://img.shields.io/badge/license-ISC-green)

## Overview

This library encompasses a series of tools and components that help to streamline React development. With built-in FontAwesome icons, headless UI components, heroicons, and much more, you can focus on creating and scaling, while the library handles many of the intricacies.

## Installation

```bash
npm install @jonmatum/my-react-library
```

## Features

- **FontAwesome Integration**: Easily utilize FontAwesome icons within your React apps.
- **Headless UI & Heroicons**: Enhance your applications with flexible UI components and icons.
- **CSS Management**: With PostCSS and TailwindCSS integration, style your components seamlessly.
- **Testing & Linting**: Integrated with Jest and ESLint for efficient testing and code quality.

## Usage

Once installed, you can seamlessly integrate components and utilities within your React projects:

```javascript
import { SomeComponent, SomeUtility } from "@jonmatum/my-react-library";
```

For more in-depth documentation on components and utilities, stay tuned for updates.

## Development & Contribution

### Available Scripts

- `npm run release`: Version management with `standard-version`.
- `npm run build`: Bundles the library using Rollup.
- `npm run build:css`: Generates the CSS with PostCSS.
- `npm run watch:css`: Watches and builds the CSS on changes.
- `npm run test`: Runs tests via Jest.

### Styling

For style customization, modify the styles located in `src/styles.css`.

### Publishing

This library is designed to be published on GitHub's npm registry. Ensure you have appropriate permissions and credentials for publishing updates.

## Pre-commit Hook Configuration with Husky

This library uses Husky to manage git hooks. One of the essential hooks set up is the `pre-commit` hook. This hook ensures that before every commit, certain tasks like linting and formatting are executed to maintain code quality and consistency.

### Setting up Husky's pre-commit hook:

1. **Install Husky**: If not already added, you can install Husky using npm:

   ```bash
   npm install husky --save-dev
   ```

2. **Configure the `pre-commit` hook**:

   In the `package.json` file, you can find a `lint-staged` configuration:

   ```json
   "lint-staged": {
      "*.ts": [
         "eslint --fix",
         "prettier --write"
      ]
   }
   ```

   This means that for every TypeScript (`.ts`) file that's staged, ESLint will check the code, automatically fix any issues it can, and then Prettier will format the code.

3. **Activating the hook**:

   With Husky and `lint-staged` configurations in place, Husky will automatically activate the `pre-commit` hook. Every time you try to make a commit, the tasks defined under `lint-staged` will be executed.

### Working with the hook:

- **Committing**: When you attempt to commit your changes, the `pre-commit` hook will run. If there's an ESLint or Prettier error that can't be automatically fixed, the commit will fail, and you'll need to manually address the issue.
- **Bypassing the hook**: If you have a valid reason to skip the `pre-commit` checks (not generally recommended), you can use the `--no-verify` flag with the `git commit` command.

---

Note: Regularly updating Husky and related configurations ensures smooth functioning. Always refer to the official [Husky documentation](https://github.com/typicode/husky) for the most recent practices and updates.

## Dependencies

Key dependencies of this library include:

- FontAwesome for icons.
- `@headlessui/react` & `@heroicons/react` for UI components.
- React & ReactDOM as foundational libraries.

For a comprehensive list, please refer to `package.json`.

## License

Licensed under the ISC License.

---

Open to contributions and feature suggestions! Make sure to report any issues or enhancements you envision.

**Crafted with ❤️ by Jonatan Mata**
