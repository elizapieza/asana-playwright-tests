# Loop Technical Evaluation 


## Overview

This project is a Playwright automation test suite built with TypeScript using a data-driven testing architecture.

The goal of the implementation was to create a reusable, scalable, and maintainable automation framework that minimizes duplicated test logic by dynamically generating test cases from structured test data.

The suite validates task cards, column names, and expected tags across multiple project boards in a demo project management application.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Git/GitHub

---

## Features

- Reusable login helper function
- Data-driven test generation
- Cross-browser testing support
- Scoped locator strategy
- Dynamic validation of:
  - Projects
  - Columns
  - Task cards
  - Tags

tests/
├── asana.spec.ts      # Main Playwright test suite
├── testData.ts        # Externalized test scenarios
