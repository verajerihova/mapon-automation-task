### To setup project you need

1. git installed
2. node installed: brew install node

### Installation guide

1. Download git repository: `git clone https://github.com/verajerihova/mapon-automation-task.git`
2. cd mapon-automation-task
3. Install npm modules: `npm install`
4. Run tests: `npx playwright test`
5. Open test report: `npx playwright show-report`

### Project structure

```
.
├── README.md
├── package-lock.json
├── package.json
├── playwright.config.ts
└── tests
    └── test-task.spec.ts
```

### How to run tests

1. To run all test:

```
npx playwright test
```
