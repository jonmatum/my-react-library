# `@jonmatum/my-react-library`

Jonatan Mata presents a powerful library for enhancing React applications with pre-configured components and utilities.

![version](https://img.shields.io/badge/version-1.5.0-blue)
![license](https://img.shields.io/badge/license-ISC-green)

## Overview

Streamline your React development with a suite of tools and components. Focus on crafting your applications while this library handles intricacies with features like FontAwesome icons, headless UI components, heroicons, and more.

## Features

- **FontAwesome Integration**: Embed FontAwesome icons with ease.
- **Headless UI & Heroicons**: Upgrade your apps with adaptable UI components and icons.
- **CSS Management**: Seamlessly style with PostCSS and TailwindCSS.
- **Testing & Linting**: Adopt Jest and ESLint for top-tier testing and pristine code quality.

## Installation

```bash
npm install @jonmatum/my-react-library
```

## Usage

Incorporate components and utilities effortlessly:

```javascript
import { SomeComponent, SomeUtility } from "@jonmatum/my-react-library";
```
Detailed documentation on components and utilities is on its way. Stay tuned!

## Development & Contribution

### Available Scripts

- `npm run release`: Version management with `standard-version`.
- `npm run build`: Library bundling via Rollup.
- `npm run build:css`: Generate CSS using PostCSS.
- `npm run watch:css`: Continuous CSS builds on changes.
- `npm run test`: Test suites execution with Jest.

### Styling

Alter styles in `src/styles.css` for personalization.

### Publishing

Ready to be published on GitHub's npm registry. Verify your permissions and credentials beforehand.

## Pre-commit Hook Configuration with Husky

Maintain the highest quality and consistency using Husky for git hooks. The `pre-commit` hook plays a vital role, ensuring linting and formatting precede every commit.

### Husky's Pre-commit Hook:

1. **Install**:
   ```bash
   npm install husky --save-dev
   ```

2. **Configuration**:

   Located in `package.json`:

   ```json
   "lint-staged": {
      "*.ts": [
         "eslint --fix",
         "prettier --write"
      ]
   }
   ```

3. **Activation**:

   With configurations in place, Husky activates the `pre-commit` hook automatically.

### Utilizing the Hook:

- **Commit Process**: Address any ESLint or Prettier errors that halt commits.
- **Bypassing**: In special cases, use the `--no-verify` flag to skip checks. Use sparingly!

For optimal results, keep Husky configurations updated. Refer to the [Husky documentation](https://github.com/typicode/husky) for the latest best practices.

## Testing Requirements and Guidelines

Ensuring resilience and dependability is paramount. Our commitment to rigorous testing ensures this library's excellence. 

### 1. **Framework & Tools**:
- Primarily powered by **Jest**.
- Complemented with **@testing-library/react** and **@testing-library/user-event** for genuine user interactions.

### 2. **Test Writing**:
- Tests for every component/utility are mandatory.
- Strive for extensive coverage, considering all potential scenarios.

### 3. **Mocking**:
- Isolate tests by mocking unrelated external functionalities or dependencies.

### 4. **Test Execution**:
```bash
npm run test
```

### 5. **Continuous Integration**:
Consider CI for extensive changes to automate testing with every push.

### 6. **Pull Requests**:
Ensure all new or altered components are thoroughly tested before proposing.

Testing goes beyond mere code coverage. It's about reliability. Value it!

## Dependencies

Essential dependencies:

- FontAwesome for icons.
- `@headlessui/react` & `@heroicons/react` for UI tools.
- The foundational React & ReactDOM.

For a full list, see `package.json`.

## License

ISC License.

---

Open to contributions and suggestions! Report issues or propose enhancements.

**Crafted with ❤️ by Jonatan Mata**.
