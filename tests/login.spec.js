const { test } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { InventoryPage } = require('../pages/InventoryPage')
const { CartPage } = require('../pages/CartPage')
const { CheckoutPage } = require('../pages/CheckoutPage')

test('Fluxo completo de compra', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  await loginPage.open()
  await loginPage.login('standard_user', 'secret_sauce')

  await inventoryPage.validateInventoryPageLoaded()
  await inventoryPage.addProductToCart()
  await inventoryPage.validateCartBadge('1')
  await inventoryPage.goToCart()

  await cartPage.validateCartPageLoaded()
  await cartPage.validateProductInCart()
  await cartPage.goToCheckout()

  await checkoutPage.validateCheckoutInfoPageLoaded()
  await checkoutPage.fillCheckoutInfo()

  await checkoutPage.validateCheckoutOverviewPageLoaded()
  await checkoutPage.finishPurchase()
  await checkoutPage.validateSuccess()
})