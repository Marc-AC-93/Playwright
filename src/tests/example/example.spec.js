//import { expect } from '@playwright/test'
import { test, expect } from '../../helpers/test_fixtures'
import { URL } from '../../data/envData'

test.describe.parallel("Zero App", ()=>{
    //test.beforeAll(async({})=>{
    //})

    test.beforeEach(async({page})=>{
        await page.goto("./")
    })
    test.only("Title validation", async({ formPage, driverService }, testInfo )=> {
        await formPage.btn_signin.click();
        await driverService.fullScreenshot(testInfo, "fullpage")
        //const main_logo = await page.locator('.brand')
        //Validations
        //title
        //await expect(page).toHaveTitle(formPage.title)
        //header
        //await expect(main_logo).toContainText(formPage.title)
        //url
        //await expect(page).toHaveURL(/zero.webappsecurity/)
    
        //validate element is not visible with non exisiting element
        //const nonExistingElement = page.locator('h28')
        //await expect(nonExistingElement).not.toBeVisible()
    })
    
    //use .only to execute just one test
    test.skip("Skipped", async({page})=> {
        console.log('skipped test')
    })
    
    const examples = [
        { name: "user1", password: "password1"},
        { name: "user2", password: "password2"}]

    examples.forEach( data =>{
        //use .only to execute just one test
        test(`Signup ${data.name}`, async({ formPage, driverService }, testInfo)=> {
            await formPage.btn_signin.click();
            await formPage.login(data.name, data.password);
            await driverService.fullScreenshot(testInfo, "fullPage");
        })
    })

})

