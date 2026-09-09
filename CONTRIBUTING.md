# Contributing to MARSA

Thank you for your interest in contributing to MARSA! We welcome contributions from the community.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Follow the [Setup Guide](./docs/SETUP.md)** to set up your development environment
4. **Read the [Development Guide](./docs/DEVELOPMENT.md)** for coding standards

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feat/your-feature-name
```

### 2. Make Your Changes
- Write clean, well-documented code
- Follow the coding standards in [Development Guide](./docs/DEVELOPMENT.md)
- Keep commits atomic and focused

### 3. Test Your Changes
```bash
npm run typecheck
npm run build
```

### 4. Commit Your Changes
Use conventional commit messages:
```bash
git commit -m "feat(scope): description"
```

### 5. Push to Your Fork
```bash
git push origin feat/your-feature-name
```

### 6. Create a Pull Request
- Provide a clear description of your changes
- Reference related issues using `#issue-number`
- Ensure CI checks pass

## Pull Request Guidelines

### PR Title
Use conventional commit format for clarity:
- `feat(scope): description`
- `fix(scope): description`
- `docs(scope): description`

### PR Description
Include:
- What problem does this solve?
- How does it solve it?
- Related issues (use `Closes #123`)
- Screenshots (if applicable)

### Code Quality
- TypeScript strict mode compliance
- No unused variables or imports
- Follow existing code patterns
- Add comments for complex logic

## Reporting Issues

### Bug Reports
Use the [bug report template](./.github/ISSUE_TEMPLATE/bug_report.md)

Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, versions)

### Feature Requests
Use the [feature request template](./.github/ISSUE_TEMPLATE/feature_request.md)

Include:
- Clear description of the feature
- Problem it solves
- Proposed implementation
- Alternative solutions

## Code Standards

### TypeScript
- Strict mode enabled
- No implicit `any` types
- Use interfaces for object shapes
- Document complex logic

### Components
- Standalone components only
- OnPush change detection
- Proper cleanup on destroy
- Clear input/output contracts

### Services
- Use dependency injection
- Export as singleton when appropriate
- Handle errors gracefully
- Document public API

### Naming
- PascalCase for classes and interfaces
- camelCase for variables and methods
- kebab-case for file names
- Descriptive names that convey intent

## Commit Message Format

```
type(scope): subject

body

footer
```

**Type**: feat, fix, docs, style, refactor, test, chore  
**Scope**: Optional - which part of the app  
**Subject**: Imperative, present tense, < 50 chars  

**Body**: Detailed explanation (if needed)  
**Footer**: Reference issues, breaking changes

Example:
```
feat(components): add bilingual label component

Implemented new label component that supports both
English and Arabic text with automatic RTL support.

Closes #45
```

## Review Process

1. **Automated Checks**: CI/CD pipeline runs
2. **Code Review**: Maintainers review code quality
3. **Feedback**: Comments and suggestions provided
4. **Revisions**: Address feedback with new commits
5. **Merge**: Approved PRs are merged to main

## Community Guidelines

- Be respectful and professional
- Assume good intentions
- Focus on code, not the coder
- Help others learn and grow
- Report concerns to maintainers

## Questions?

- Check [Setup Guide](./docs/SETUP.md)
- Read [Development Guide](./docs/DEVELOPMENT.md)
- Review [Architecture Guide](./docs/ARCHITECTURE.md)
- Open a discussion issue

Thank you for contributing! 🎉
