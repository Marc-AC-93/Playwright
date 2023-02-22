// my-test.js
const base = require('@playwright/test');
import { Form } from "../pages/form";
import { DriverService} from "../helpers/driver_services"

exports.test = base.test.extend({
    formPage: async ({ page }, use) => {
      // Set up the fixture.
      const formPage = new Form(page);
  
      // Use the fixture value in the test.
      await use(formPage);
    },
    driverService: async ({ page }, use) => {
        // Set up the fixture.
        const driverService = new DriverService(page);
    
        // Use the fixture value in the test.
        await use(driverService);
      }
  });

  export const expect = base.expect;