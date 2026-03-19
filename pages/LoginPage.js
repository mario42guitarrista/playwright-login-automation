class LoginPage {
  constructor(page) {
    this.page = page
    this.username = page.locator('[data-test="username"]')
    this.password = page.locator('[data-test="password"]')
    this.loginButton = page.locator('[data-test="login-button"]')
    this.errorMessage = page.locator('[data-test="error"]')
    this.productsTitle = page.locator('.title')
  }

  async open() {
    await this.page.goto('https://www.saucedemo.com/')
  }

  async login(user, pass) {
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.loginButton.click()
  }
}

module.exports = { LoginPage }