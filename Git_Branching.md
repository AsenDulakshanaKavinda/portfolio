# Git Branching Strategy

This project follows a structured Git workflow to keep the production branch stable and development organized.

---

# Branch Structure

```text
main
 └── dev
      ├── feature/login
      ├── feature/dashboard
      └── feature/api
```

---

# Branch Purpose

## `main`

Production-ready branch.

Rules:

- Must always be stable
- Only tested code should be merged here
- Represents the production version of the application

---

## `dev`

Development integration branch.

Rules:

- All feature branches merge into `dev`
- Used for testing and integration
- Can contain unstable or in-progress features

---

## `feature/*`

Feature development branches.

Examples:

```text
feature/login
feature/dashboard
feature/payment-api
```

Rules:

- Always create from `dev`
- One feature per branch
- Merge back into `dev` after completion

---

# Workflow

## 1. Switch to `dev`

```bash
git switch dev
```

---

## 2. Create a Feature Branch

```bash
git switch -c feature/login
```

Explanation:

- `-c` = create branch + switch to it

---

## 3. Push Feature Branch

```bash
git push -u origin feature/login
```

Explanation:

- `-u` = set upstream tracking

After this, you can simply use:

```bash
git push
git pull
```

---

## 4. Develop the Feature

```bash
git add .
git commit -m "add login page"
```

Push changes:

```bash
git push
```

---

## 5. Merge Feature into `dev`

```bash
git switch dev
git merge feature/login
git push origin dev
```

---

## 6. Merge `dev` into `main`

After testing is complete:

```bash
git switch main
git merge dev
git push origin main
```

This deploys the latest stable version to production.

---

# Important Rules

## Always Branch From `dev`

Correct:

```bash
git switch dev
git switch -c feature/new-feature
```

Wrong:

```bash
git switch main
git switch -c feature/new-feature
```

---

# Branch Naming Convention

## Feature Branches

```text
feature/auth
feature/ui
feature/payment-api
```

## Bug Fixes

```text
bugfix/login-error
bugfix/navbar
```

## Hot Fixes

```text
hotfix/security-patch
```

## Refactoring

```text
refactor/database-layer
```

---

# Useful Commands

## Show All Branches

```bash
git branch -a
```

---

## Delete Local Branch

```bash
git branch -d feature/login
```

---

## Delete Remote Branch

```bash
git push origin --delete feature/login
```

---

# Recommended Workflow Summary

```text
feature/*  →  dev  →  main
```

- `feature/*` = development
- `dev` = integration/testing
- `main` = production

---

# Best Practices

- Keep `main` stable
- Use small feature branches
- Commit frequently
- Write meaningful commit messages
- Pull latest changes before starting work
- Delete merged feature branches

---

# Example Full Workflow

```bash
# switch to dev
git switch dev

# create feature branch
git switch -c feature/auth

# work
git add .
git commit -m "add authentication"

# push branch
git push -u origin feature/auth

# merge into dev
git switch dev
git merge feature/auth
git push origin dev

# production release
git switch main
git merge dev
git push origin main
```