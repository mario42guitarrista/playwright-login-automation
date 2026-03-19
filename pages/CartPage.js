const { expect } = require('@playwright/test')

class CartPage {
  constructor(page) {
    this.page = page
    this.productName = page.locator('.inventory_item_name')
    this.checkoutButton = page.locator('#checkout')
    this.pageTitle = page.locator('.title')
  }

  async validateCartPageLoaded() {
    await expect(this.pageTitle).toHaveText('Your Cart')
  }

  async validateProductInCart() {
    await expect(this.productName).toHaveText('Sauce Labs Backpack')
  }

  async goToCheckout() {
    await this.checkoutButton.click()
  }
}

module.exports = { CartPage }