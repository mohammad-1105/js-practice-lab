# JavaScript Data Types Foundation Lab

Master JavaScript built-in methods through **12 real-world, story-based challenges**! From a coffee shop order system to a restaurant combo platter, each problem puts you in a practical scenario where you need to use built-in methods of String, Number, Array, and Object to get things done.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v20 or higher
- [Git](https://git-scm.com/)
- A code editor (VS Code recommended)

---

## Getting Started

### 1. Accept the assignment

Click the GitHub Classroom invitation link shared by your instructor. This will create a **personal copy** of this repository under your GitHub account.

### 2. Clone your repository
```bash
git clone <your-repo-url>
cd js-datatypes-foundation-lab
```

Replace `<your-repo-url>` with the URL from your GitHub Classroom repo (the green **Code** button).

### 3. Install dependencies
```bash
npm install
```

### 4. Verify everything works
```bash
npm test
```

You should see **all tests failing** — that's expected! Your job is to make them pass.

---

## How to Solve the Challenges

### Step 1 — Open a challenge file

All challenges live in the `src/` folder. Start with `src/01-coffee-order.js` and work your way up.
```
src/
├── 01-coffee-order.js           ← Start here
├── 02-border-maker.js
├── 03-taxi-meter.js
├── 04-grocery-cart.js
├── 05-train-coach.js
├── 06-store-bill.js
├── 07-membership-registry.js
├── 08-menu-builder.js
├── 09-postcard-writer.js
├── 10-zipcode-checker.js
├── 11-parcel-service.js
└── 12-combo-platter.js
```

### Step 2 — Read the story and rules

Each file has a detailed JSDoc comment at the top that explains:
- The **story** (a real-world scenario)
- The **rules** your function must follow
- The **parameters** and **return values**

Read it carefully — every edge case and requirement is described there.

### Step 3 — Write your solution

Replace `// Your code here` with your implementation:
```js
// Before
export function getCoffeeOrderLength(order) {
  // Your code here
}

// After (example)
export function getCoffeeOrderLength(order) {
  if (typeof order !== "string") return -1;
  return order.trim().length;
}
```

### Step 4 — Run the test for that challenge
```bash
npm test -- 01-coffee
```

You can use any part of the filename to match:
```bash
npm test -- 02-border
npm test -- 03-taxi
npm test -- grocery
npm test -- train-coach
npm test -- store
```

### Step 5 — Fix and repeat

If tests fail, read the error messages — they tell you exactly what was expected vs. what your function returned. Fix your code and run the test again.

### Step 6 — Move to the next challenge

Once all tests pass for a challenge, move on to the next one. They get progressively harder.

### Run all tests at once
```bash
npm test
```

### Watch mode (auto re-run on save)
```bash
npm run test:watch
```

This re-runs tests every time you save a file — very handy while working.

---

## Challenges

| #  | Challenge | File | Concept | Points |
|----|-----------|------|---------|--------|
| 01 | Coffee Shop Order System | `01-coffee-order.js` | String Basics: length, toUpperCase, toLowerCase, trim, includes, charAt, at | 7 |
| 02 | Decorative Border Maker | `02-border-maker.js` | String Transform: slice, split, join, replace, replaceAll, repeat | 7 |
| 03 | Taxi Fare Calculator | `03-taxi-meter.js` | Number & Math: parseFloat, parseInt, toFixed, Math.ceil, Math.max, Math.min, Math.abs | 8 |
| 04 | Grocery Shopping Cart | `04-grocery-cart.js` | Array Basics: push, pop, shift, unshift, indexOf, includes, concat, Array.isArray | 8 |
| 05 | Train Coach Finder | `05-train-coach.js` | Array Search: find, findIndex, some, every, filter | 8 |
| 06 | Store Billing System | `06-store-bill.js` | Array Transform: map, filter, reduce, sort, join | 9 |
| 07 | Membership Registry | `07-membership-registry.js` | Object Basics: Object.keys, Object.values, Object.entries, hasOwnProperty, delete | 9 |
| 08 | Restaurant Menu Builder | `08-menu-builder.js` | Object Transform: Object.assign, Object.freeze, spread, Object.fromEntries | 8 |
| 09 | Postcard Writer | `09-postcard-writer.js` | String Advanced: template literals, startsWith, endsWith, padStart, padEnd, match | 9 |
| 10 | Zipcode Type Checker | `10-zipcode-checker.js` | Type Checking: typeof, Number.isInteger, Number.isFinite, Number.isNaN, Array.isArray, Boolean | 9 |
| 11 | Parcel Delivery Service | `11-parcel-service.js` | JSON & Conversion: JSON.parse, JSON.stringify, String(), Number(), Array.from | 9 |
| 12 | Restaurant Combo Platter | `12-combo-platter.js` | Mixed Methods Capstone: all types combined | 9 |

---

## Submitting Your Work

### 1. Check your progress

Run all tests to see how many you've solved:
```bash
npm test
```

### 2. Stage your changes
```bash
git add src/
```

> **Important:** Only add files from `src/`. Do not modify or commit test files.

### 3. Commit your work
```bash
git commit -m "Complete datatypes foundation lab"
```

You can commit as many times as you want — each push triggers a new grading run.

### 4. Push to GitHub
```bash
git push origin main
```


---

## Windows Users

If you are on Windows and `npm test` fails, use the Windows-specific scripts instead:
```bash
npm run test:win
```

For watch mode on Windows:
```bash
npm run test:win:watch
```

---

## Tips for Success

- **Read the JSDoc carefully** — every rule and edge case is described there
- **Try methods in the console first** — open Node REPL (`node`) or browser console and experiment with `"hello".toUpperCase()`, `[1,2,3].map(x => x*2)`, etc. before writing your solution
- **MDN Docs are your best friend** — search "MDN String toUpperCase" or "MDN Array reduce" for detailed explanations and examples
- **Return types matter** — check the exact shape of what each function should return (string, number, array, object, or null)
- **Handle edge cases** — wrong types, empty strings, empty arrays — the JSDoc tells you what to return for each
- **Use `console.log()`** — add temporary logs to debug, then remove them before submitting
- **Don't modify the test files** — only edit files in `src/`
- **Commit often** — don't wait until you've solved everything to push

---

## Concepts Covered

- String Basics: length, toUpperCase, toLowerCase, trim, includes, charAt, at
- String Transform: slice, split, join, replace, replaceAll, repeat
- Number & Math: parseFloat, parseInt, toFixed, Math.ceil, Math.max, Math.min, Math.abs
- Array Basics: push, pop, shift, unshift, indexOf, includes, concat, Array.isArray
- Array Search: find, findIndex, some, every, filter
- Array Transform: map, filter, reduce, sort, join
- Object Basics: Object.keys, Object.values, Object.entries, hasOwnProperty, delete
- Object Transform: Object.assign, Object.freeze, spread, Object.fromEntries
- String Advanced: template literals, startsWith, endsWith, padStart, padEnd, match
- Type Checking: typeof, Number.isInteger, Number.isFinite, Number.isNaN, Array.isArray, Boolean
- JSON & Conversion: JSON.parse, JSON.stringify, String(), Number(), Array.from
- Mixed Methods Capstone: combining all data type methods together

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm test` shows "command not found" | Run `npm install` first |
| All tests fail with `undefined` | You haven't written your solution yet — that's expected |
| Tests say "expected X but received Y" | Your logic is close but not matching the rules — re-read the JSDoc |
| `git push` is rejected | Run `git pull origin main` first, then push again |
| Tests pass locally but fail on GitHub | Make sure you pushed all your changes (`git status` to check) |
| `npm test` fails on Windows | Use `npm run test:win` instead |

---

Good luck! And remember to take breaks while learning these methods — practice makes perfect!