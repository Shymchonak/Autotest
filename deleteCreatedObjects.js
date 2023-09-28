const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");
const { expect, should } = require('chai');
const { equal } = require('assert');


class Utils {
  static async delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

}
async function checkElementPresence(locator) {
  await Utils.delay(1000)
  try {
       const element = await this.driver.findElement(locator);
  } catch (error) {
      console.log('Element:' +locator+' Not found');
  }
}



  describe('delete Created Objects', function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });

    after(async () => await driver.quit());

    it('Delete Custom Field', async function () {
      this.timeout(0);

      await driver.get('https://staging.pasalo.pro');

      await driver.manage().setTimeouts({implicit: 10000});
      let emailField = await driver.findElement(By.xpath("//input[@placeholder=\"Email address\"]"));
      await emailField.sendKeys('celadonautotest@gmail.com');

      
      let loginField = await driver.findElement(By.xpath("//input[@placeholder=\"Password\"]"));
      await loginField.sendKeys('Autotesting Password');
      
      
      let submitButton = await driver.findElement(By.xpath("//div[@class=\"button\"]//button"));
      await submitButton.click();

      
      await driver.manage().setTimeouts({implicit: 10000});
      let loggedOrganisationCheck = await driver.findElement(By.xpath("//select/option"));
      expect(Boolean(loggedOrganisationCheck.isEnabled())).to.be.equal(true)

      let customFieldButton = await driver.findElement(By.xpath("//button[text()=\"Custom fields\"]/.."));
      await customFieldButton.click();

      let newCustomFieldCreated = await driver.findElement(By.xpath("//div[text()=\"JS dropdown field\"]"))
      let newCustomFieldCreatedValue = await newCustomFieldCreated.getText()
     
      expect(newCustomFieldCreatedValue).to.be.equal('JS dropdown field')

      let customFieldButtonDelete = await driver.findElement(By.xpath("//*[text()=\"JS dropdown field\"]//..//..//..//div[@class=\"actions\"]//i[text()=\"close\"]"));
      await customFieldButtonDelete.click();
      

      let customFieldButtonDeleteConfirm = await driver.findElement(By.xpath("//div[@class=\"button cyan\"]"));
      await customFieldButtonDeleteConfirm.click();

      await Utils.delay(1000)
      
      checkElementPresence("//div[text()=\"JS dropdown field\"]") 

    });

    it('Delete Community', async function () {
      this.timeout(0);


      let cummunitiesButton = await driver.findElement(By.xpath("//button[text()=\"Communities\"]/../."));
      await cummunitiesButton.click();


      let cummunitiesManage = await driver.findElement(By.xpath("//div[@class=\"button\"]//button[text()=\"Manage\"]"));
      await cummunitiesManage.click();

      await driver.manage().setTimeouts({implicit: 10000});
      let selectCommunity = await driver.findElement(By.xpath("//div[text()=\"JavaScript Community\"]"));
      await selectCommunity.click();
     

      await driver.manage().setTimeouts({implicit: 10000});
      let currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).to.be.include('https://staging.pasalo.pro/communities/manage')

      let communityDots = await driver.findElement(By.xpath("//i[@class=\"icon-options manage-popup\"]"));
      await communityDots.click();

      await driver.manage().setTimeouts({implicit: 10000});

      let communityDelete = await driver.findElement(By.xpath("//div[text()=\"Delete community\"]"));
      await communityDelete.click();

      await driver.manage().setTimeouts({implicit: 10000});
      let communityDeleteConfirm = await driver.findElement(By.xpath("//div[@class=\"modal display-block  \"]//div[@class=\"button cyan\"]"));
      await communityDeleteConfirm.click();
      
      await Utils.delay(1000)
      
      checkElementPresence("//div[text()=\"JavaScript Community\"]") 

     
    });


    
    });

 


// //*[@id="3"]/div[1]/div/p/text()
  // css с барузера#\33  > div.Toastify__toast-body > div > p

// скопированный xpath //*[@id="3"]/div[1]/div/p

// мой css div.Toastify .Toastify__toast-container.Toastify__toast-container--bottom-left .Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--error.Toastify__toast--close-on-click .Toastify__toast-body p