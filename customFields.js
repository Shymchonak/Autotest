const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");
const { expect, should } = require('chai');
const { equal } = require('assert');



  describe('Custom Fields Test', function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });

    after(async () => await driver.quit());

    it('Custom Field Creatioin', async function () {
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

      await driver.manage().setTimeouts({implicit: 10000});
      let newCustomFieldButton = await driver.findElement(By.xpath("//button[@class=\"icon-button flex-all cyan\"]"));
      await newCustomFieldButton.click();
      
      await driver.manage().setTimeouts({implicit: 10000});
      let newCustomFieldName = await driver.findElement(By.name("name"));
      await newCustomFieldName.sendKeys("JS dropdown field");

      let newCustomFieldLable = await driver.findElement(By.name("label"));
      await newCustomFieldLable.sendKeys("js best");

      let newCustomFieldType = await driver.findElement(By.xpath("//*[text()=\"Type of custom field (Can’t be changed)\"]//..//input[@class=\"rw-dropdownlist-search\"]"));
      await newCustomFieldType.click();

      let newCustomFieldTypeSelect = await driver.findElement(By.xpath("//div[@class=\"rw-slide-transition rw-popup\"]//div[text()=\"Dropdown options field\"]"));
      await newCustomFieldTypeSelect.click();

      let newCustomFieldReq = await driver.findElement(By.xpath("//*[text()=\"Required\"]//..//input[@class=\"rw-dropdownlist-search\"]"));
      
      await newCustomFieldReq.click();
      
      let newCustomFieldReqSelect = await driver.findElement(By.xpath("//div[text()=\"No, it is not required\"]"));
      await newCustomFieldReqSelect.click();

      let newCustomFieldSearch = await driver.findElement(By.xpath("//input[@placeholder=\"Search\"]"));
      await newCustomFieldSearch.sendKeys("JavaScript Community");

      let newCustomFieldTogle = await driver.findElement(By.xpath("//div[text()=\"JavaScript Community\"]"));
      await newCustomFieldTogle.click();

      let newCustomFieldButtonCreate = await driver.findElement(By.xpath("//button[text()=\"Create custom field\"]"));
      await newCustomFieldButtonCreate.click();

      

      let newCustomFieldCreated = await driver.findElement(By.xpath("//div[text()=\"JS dropdown field\"]"))
      let newCustomFieldCreatedValue = await newCustomFieldCreated.getText()
     
      expect(newCustomFieldCreatedValue).to.be.equal('JS dropdown field')



    });


    
    });

 


// //*[@id="3"]/div[1]/div/p/text()
  // css с барузера#\33  > div.Toastify__toast-body > div > p

// скопированный xpath //*[@id="3"]/div[1]/div/p

// мой css div.Toastify .Toastify__toast-container.Toastify__toast-container--bottom-left .Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--error.Toastify__toast--close-on-click .Toastify__toast-body p