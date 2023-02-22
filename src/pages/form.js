const { expect } = require('@playwright/test');

exports.Form = class Form {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.title = /[Zz][Ee][Rr][Oo]*/;
      this.btn_signin = page.locator('#signin_button').first();
      this.input_userAccount = page.locator('#user_login');
      this.input_userPassword = page.locator('#user_password');
      this.text_error_login = page.locator('.alert-error');
      this.submit_login = page.locator("input[name='submit']");
    }

    async login(user, password){
        await this.input_userAccount.type(user)
        await this.input_userPassword.type(password)
        await this.submit_login.click()
    }

    async verify_loginError(){
        await expect(page.locator(this.text_error_login)).toBeVisible()
    }
}