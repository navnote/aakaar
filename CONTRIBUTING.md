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

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable.
2. Update the documentation with any new features or changes.
3. The PR will be merged once you have the sign-off of at least one other developer.

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker](https://github.com/navnote/aakaar/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/navnote/aakaar/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License

By contributing, you agree that your contributions will be licensed under its MIT License. 