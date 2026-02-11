# JavaScript Data Types Intermediate Lab

Practice JavaScript data types and built-in methods through **12 product-engineering challenges** across fintech, retail, transit, messaging, and analytics workflows.

**Total: 100 points across 12 challenges**

---

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [Git](https://git-scm.com/)
- A code editor (VS Code recommended)

---

## Getting Started

### 1. Clone your repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests once

```bash
npm test
```

At the start, tests should fail because all `src/` functions are TODO stubs.

> Windows: if needed, run `npm run test:win`.

---

## Project Structure

Challenges are in `src/` and tests are in `tests/`.

```text
src/
├── 01-ssn-masker.js
├── 02-coffee-shop-menu.js
├── 03-movie-title-formatter.js
├── 04-sales-tax-calculator.js
├── 05-transit-pass.js
├── 06-chat-message-parser.js
├── 07-student-report-card.js
├── 08-team-budget-manager.js
├── 09-food-delivery-order.js
├── 10-digital-wallet-transactions.js
├── 11-signup-form-validator.js
└── 12-train-booking-status.js
```

---

## How to Solve

### 1. Open a challenge file

Start with `src/01-ssn-masker.js` and move in numeric order.

### 2. Read the JSDoc carefully

Each file defines:
- business context
- rules and edge cases
- validation behavior
- expected input/output shape

### 3. Implement the TODO stub

Replace the placeholder with your solution.

```js
// Before
export function maskSSN(id) {
  // TODO: implement
}

// After (example)
export function maskSSN(id) {
  if (typeof id !== 'string' || !/^\d{12}$/.test(id)) return 'INVALID';
  return `XXXX-XXXX-${id.slice(-4)}`;
}
```

### 4. Run tests for one challenge

```bash
npm test -- 01-ssn
```

You can filter with any part of the filename:

```bash
npm test -- coffee
npm test -- sales-tax
npm test -- transit
npm test -- wallet
```

### 5. Repeat

Fix failures, rerun tests, and move to the next challenge.

### Run all tests

```bash
npm test
```

### Watch mode

```bash
npm run test:watch
```

---

## Challenge Map

| # | File | Export | Domain | Core Concepts | Points |
|---|------|--------|--------|---------------|--------|
| 01 | `01-ssn-masker.js` | `maskSSN` | Fintech privacy | strings, regex, slice, repeat | 7 |
| 02 | `02-coffee-shop-menu.js` | `formatCoffeeMenu` | Cafe POS | arrays, filter, map, join | 7 |
| 03 | `03-movie-title-formatter.js` | `formatMovieTitle` | Streaming metadata | trim, split, casing, small-word rules | 8 |
| 04 | `04-sales-tax-calculator.js` | `calculateSalesTax` | Retail checkout | numbers, toFixed, parseFloat, validation | 8 |
| 05 | `05-transit-pass.js` | `generateTransitPass` | Transit ticketing | strings, template literals, object validation | 8 |
| 06 | `06-chat-message-parser.js` | `parseChatMessage` | Messaging analytics | parsing, index/slice, sentiment flags | 9 |
| 07 | `07-student-report-card.js` | `generateStudentReport` | School analytics | Object.keys/values/entries, reduce | 9 |
| 08 | `08-team-budget-manager.js` | `summarizeTeamBudget` | Sports ops budgeting | reduce, grouping, max/min, booleans | 8 |
| 09 | `09-food-delivery-order.js` | `buildDeliveryOrder` | E-commerce checkout | nested totals, coupons, tax/fees | 9 |
| 10 | `10-digital-wallet-transactions.js` | `analyzeWalletTransactions` | Wallet ledger analytics | filtering, aggregates, every/some | 9 |
| 11 | `11-signup-form-validator.js` | `validateSignupForm` | SaaS onboarding | validation, coercion, optional chaining | 9 |
| 12 | `12-train-booking-status.js` | `processTrainBooking` | Reservation status service | formatting, mapping, summary metrics | 9 |

---

## Submission Workflow

1. Run all tests:

```bash
npm test
```

2. Stage your source changes:

```bash
git add src/
```

3. Commit:

```bash
git commit -m "Complete datatypes intermediate lab"
```

4. Push:

```bash
git push origin main
```

---

## Tips

- Implement one challenge at a time.
- Keep return types exact (`string`, `object`, `null`, etc.).
- Follow validation rules before normal logic.
- Use built-in methods intentionally; most are hinted in JSDoc.
- Do not edit tests unless your instructor explicitly asks.

---

## Concepts Covered

- **Strings**: `slice`, `substring`, `split`, `join`, `trim`, casing helpers, template literals
- **Numbers**: `parseInt`, `parseFloat`, `toFixed`, `Number.isFinite`, `Math.round`, `Math.min`, `Math.max`
- **Arrays**: `map`, `filter`, `reduce`, `every`, `some`, `find`
- **Objects**: `Object.keys`, `Object.values`, `Object.entries`, spread/destructuring
- **Booleans and coercion**: truthy/falsy, `Boolean()`, `typeof`
- **Validation patterns** and edge-case handling

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm test` command not found | Run `npm install` |
| All tests fail with `undefined` | TODO stubs are still unimplemented |
| Expected vs received mismatch | Re-check that challenge JSDoc rules are followed exactly |
| Push rejected | `git pull origin main` then push again |

