# Playwright E2E Automation - E-commerce Flow

End-to-end test automation project using Playwright, simulating a complete e-commerce purchase flow with validations and negative scenarios.

## 🚀 Features

This project automates a full user journey:

- Login with valid credentials
- Add product to cart
- Validate cart badge and product
- Navigate to checkout
- Fill customer information
- Complete purchase
- Validate success message

## ✅ Test Coverage

### Positive Scenario
- Successful login
- Product added to cart
- Full checkout flow completed
- Order confirmation validated

### Negative Scenario
- Invalid login attempt
- Error message validation

## 🧠 Concepts Applied

- Page Object Model (POM)
- End-to-End Testing (E2E)
- Assertions with Playwright
- Test structure and organization
- UI automation best practices

## 🛠️ Tech Stack

- Playwright
- JavaScript (Node.js)
- Git & GitHub

## ▶️ How to Run

```bash
npm install
npx playwright test
