# Mariah Cox: Loop Technical Evaluation

## Overview

This project is a Playwright automation test suite built with TypeScript using a data-driven testing architecture.

The implementation focuses on reducing duplicated test logic through reusable helpers and dynamically generated test cases. The suite validates task cards, columns, and tags across multiple project boards in the provided demo application.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Git/GitHub

---

## Features

- Reusable login helper
- Data-driven test generation
- Multi-browser testing
- Scoped locator strategy
- Dynamic validation of:
  - Projects
  - Columns
  - Task cards
  - Tags

---

## Project Structure

```txt
tests/
├── asana.spec.ts      # Main Playwright test suite
├── testData.ts        # Externalized test scenarios
```

---

## Test Architecture

The suite uses a data-driven approach where test scenarios are stored in a separate data file instead of being hardcoded directly into the tests.

Each test case contains:
- Project name
- Column name
- Task name
- Expected tags

The test suite dynamically loops through these scenarios to generate validations automatically, improving maintainability and scalability as new cases are added.

---

## Locator Strategy

To avoid brittle selectors, the implementation uses scoped and chained Playwright locators.

Validations are scoped:
1. From the active project board
2. To the correct column
3. To the specific task card
4. To the expected tags inside the card

This ensures validations occur within the correct UI hierarchy rather than globally across the page.

---

## Multi-Browser Support

The suite runs successfully across:
- Chromium
- Firefox
- WebKit

using Playwright’s built-in cross-browser support.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/elizapieza/asana-playwright-tests.git
```

Install dependencies:

```bash
npm install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open the Playwright HTML report:

```bash
npx playwright show-report
```

---

## Demo Application

Application under test:

https://animated-gingersnap-8cf7f2.netlify.app/

---

## Goals of the Implementation

The primary goals of this implementation were:
- reducing duplicated test logic
- improving maintainability
- improving scalability
- implementing reusable automation architecture
- creating reliable UI validation using Playwright and TypeScript
