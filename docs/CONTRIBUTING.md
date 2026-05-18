# Contributing to StackSprint

Welcome! This document outlines the engineering standards and workflows for contributing to the StackSprint ecosystem.

## Git Workflow

We follow a feature-branch workflow.

1. **Main Branch (`main`)**: This branch is protected and always reflects the production-ready state.
2. **Branch Naming Convention**:
   - `feat/<module>/<description>` (e.g., `feat/auth/jwt-login`)
   - `fix/<module>/<description>` (e.g., `fix/tasks/status-bug`)
   - `chore/<description>` (e.g., `chore/update-dependencies`)

## Commit Message Standards

We strictly adhere to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). This allows us to auto-generate changelogs and automate semantic versioning.

**Format:**
`<type>(<scope>): <subject>`

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

**Examples:**
- `feat(user-service): implement JWT generation`
- `test(task-service): add unit tests for task resolver`
- `docs(readme): update project structure`

## Code Review Process

1. Create a Pull Request (PR) against the `main` branch.
2. Ensure CI/CD checks (linting, tests) pass.
3. PRs must be reviewed by at least one other engineer.
4. Address feedback and squash commits before merging to keep the history clean.

## Code Quality Standards

- **Clean Architecture**: Respect the boundaries between layers (Domain, Application, Infrastructure).
- **SOLID Principles**: Design classes and modules that are single-purpose, open for extension, and depend on abstractions.
- **Testing**: We aim for 80%+ test coverage. All new features MUST be accompanied by unit tests.
- **Logging**: Use structured logging (JSON format) and proper log levels (`INFO`, `WARN`, `ERROR`).