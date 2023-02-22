exports.DriverService = class DriverService {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
    }

    async fullScreenshot(testInfo, name){
        await testInfo.attach(name, {
            body: await this.page.screenshot({fullPage: true}),
            contentType: "image/png"
        })
    }

    async elementScreenshot(testInfo, name, locator){
        await testInfo.attach(name, {
            body: await this.page.locator(locator).screenshot(),
            contentType: "image/png"
        })
    }
}