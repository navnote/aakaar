# Aakaar

Aakaar is a modern, modular monorepo project built with TypeScript, React, and Turborepo. It provides a collection of tools and packages for building scalable applications.

## 🚀 Features

- **Monorepo Architecture**: Built with Turborepo for efficient package management and build optimization
- **TypeScript Support**: Full TypeScript support across all packages
- **React Components**: Reusable React components library
- **CLI Tools**: Command-line interface for project management
- **Dictionary Package**: Language and localization utilities
- **Global Utilities**: Shared utilities and helpers
- **Documentation**: Comprehensive documentation system

## 📦 Packages

The project is organized into several packages:

- `@aakaar/react`: React components library
- `@aakaar/cli`: Command-line interface tools
- `@aakaar/dictionary`: Tokens for the design system
- `@aakaar/global`: Shared types and utilities

## 🛠️ Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

## 🏗️ Installation

1. Clone the repository:
```bash
git clone git@github.com:navnote/aakaar.git
cd aakaar
```

2. Install dependencies:
```bash
pnpm install
```

## 🚀 Development

### Start Development Server
```bash
pnpm dev
```

### Build Project
```bash
pnpm build
```

### Type Checking
```bash
pnpm ts
```

### Code Quality
```bash
# Check code quality
pnpm check

# Fix code quality issues
pnpm check:fix
```

### Local Development with Registry
```bash
# Start local registry
pnpm local-registry

# Publish packages locally
pnpm publish:local
```

## 📚 Documentation Website

Documentation is present in the `apps/docs` directory. To view the documentation locally run the following command:

```bash
pnpm dev
```

## 📦 Publishing

### Publish to NPM
```bash
pnpm publish:internet
```


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Turborepo](https://turbo.build/repo)
- [pnpm](https://pnpm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) 

# Contributing to Aakaar

We love your input! We want to make contributing to Aakaar as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 22
- pnpm >= 9.0.0

### Getting Started

1. **Clone the repository**
   ```bash
   git clone git@github.com:navnote/aakaar.git
   cd aakaar
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up pre-commit hooks** (automatically installed via `setup` script)
   ```bash
   pnpm setup
   ```

## 🔧 Pre-commit Hooks

This project uses Husky to manage Git hooks that ensure code quality. The pre-commit hook will:

- Run `pnpm check:fix` to format and lint your code
- Stage any formatting changes automatically
- Prevent empty commits (when only formatting was changed)

### How it works

When you make a commit, the pre-commit hook will:
1. **Format your code** using Biome
2. **Stage formatting changes** for files you intended to commit
3. **Prevent empty commits** if only formatting was changed
4. **Allow the commit** if all checks pass

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the project
- `pnpm ts` - Type checking
- `pnpm check` - Check code formatting and linting
- `pnpm check:fix` - Fix code formatting and linting issues
- `pnpm setup` - Install Husky hooks manually
- `pnpm local-registry` - Start local registry
- `pnpm publish:local` - Publish packages locally
- `pnpm publish:internet` - Publish to NPM

## 🎯 Code Quality

- **Formatting**: We use Biome for code formatting and linting
- **TypeScript**: All code should be written in TypeScript
- **Tests**: Please add tests for new features
- **Documentation**: Update documentation for any API changes

## 🚀 Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (pre-commit hooks will run automatically)
5. Run `pnpm ts && pnpm build` to ensure build 
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📋 Pull Request Guidelines

- Provide a clear description of the changes
- Include tests if applicable
- Update documentation if needed
- Ensure all CI checks pass
- The PR will be merged once you have the sign-off of at least one other developer

## 🐛 Reporting Bugs

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/navnote/aakaar/issues/new).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## 📦 Project Structure

The project is organized into several packages:

- `@aakaar/react`: React components library
- `@aakaar/cli`: Command-line interface tools
- `@aakaar/dictionary`: Tokens for the design system
- `@aakaar/global`: Shared types and utilities
- `@aakaar/scripts`: Scripts for the project

## 📚 Documentation

Documentation is present in the `apps/docs` directory. To view the documentation locally run:

```bash
pnpm dev
```

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License. In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project.

## 🙏 Acknowledgments

- [Turborepo](https://turbo.build/repo)
- [pnpm](https://pnpm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

Thank you for contributing to Aakaar! 🎉 