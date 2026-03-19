const { expect } = require('@playwright/test')

class CheckoutPage {
  constructor(page) {
    this.page = page
    this.firstName = page.locator('#first-name')
    this.lastName = page.locator('#last-name')
    this.zipCode = page.locator('#postal-code')
    this.continueButton = page.locator('#continue')
    this.finishButton = page.locator('#finish')
    this.successMessage = page.locator('.complete-header')
    this.pageTitle = page.locator('.title')
  }

  async validateCheckoutInfoPageLoaded() {
    await expect(this.pageTitle).toHaveText('Checkout: Your Information')
  }

  async fillCheckoutInfo() {
    await this.firstName.fill('Mario')
    await this.lastName.fill('QA')
    await this.zipCode.fill('12345')
    await this.continueButton.click()
  }

  async validateCheckoutOverviewPageLoaded() {
    await expect(this.pageTitle).toHaveText('Checkout: Overview')
  }

  async finishPurchase() {
    await this.finishButton.click()
  }

  async validateSuccess() {
    await expect(this.successMessage).toHaveText('Thank you for your order!')
  }
}

module.exports = { CheckoutPage }