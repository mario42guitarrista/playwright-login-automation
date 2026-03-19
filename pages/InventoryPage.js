const { expect } = require('@playwright/test')

class InventoryPage {
  constructor(page) {
    this.page = page
    this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
    this.cartIcon = page.locator('.shopping_cart_link')
    this.cartBadge = page.locator('.shopping_cart_badge')
    this.pageTitle = page.locator('.title')
  }

  async validateInventoryPageLoaded() {
    await expect(this.pageTitle).toHaveText('Products')
  }

  async addProductToCart() {
    await this.addToCartButton.click()
  }

  async validateCartBadge(quantity) {
    await expect(this.cartBadge).toHaveText(quantity)
  }

  async goToCart() {
    await this.cartIcon.click()
  }
}

module.exports = { InventoryPage }