const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");
const { expect } = require('chai');



  describe('Pasalo login', function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });

    after(async () => await driver.quit());

    it('Incorrect LOGIN', async function () {
      
      this.timeout(0);

      await driver.get('https://staging.pasalo.pro');


      await driver.manage().setTimeouts({implicit: 10000});
      let emailField = await driver.findElement(By.xpath("//input[@placeholder=\"Email address\"]"));
      await emailField.sendKeys('example@gmail.com');

      
      let loginField = await driver.findElement(By.xpath("//input[@placeholder=\"Password\"]"));
      await loginField.sendKeys('IncorrectPassword');
      
      
      let submitButton = await driver.findElement(By.xpath("//div[@class=\"button\"]//button"));
      await submitButton.click();
      
      await driver.manage().setTimeouts({implicit: 1000});
      let  warningNotification = await driver.findElement(By.xpath("//div[@class=\"Toastify__toast-body\"]"))
    
     
      expect(Boolean(warningNotification.isDisplayed())).to.be.equal(true)
    
    });


    it('Success LOGIN', async function () {
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
      let logOutButton = await driver.findElement(By.xpath("//div[@class=\"footer\"]//div[@class=\"button\"]"))
      expect(Boolean(logOutButton.isDisplayed())).to.be.equal(true)
    });

  });