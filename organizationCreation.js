const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");
const { expect, should } = require('chai');



  describe('Community Test', function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });

    after(async () => await driver.quit());

    it('Community Creatioin', async function () {
      this.timeout(0);

      await driver.get('https://staging.pasalo.pro');

      await driver.manage().setTimeouts({implicit: 10000});
      let emailField = await driver.findElement(By.xpath('//input[@placeholder="Email address"]'));
      await emailField.sendKeys('celadonautotest@gmail.com');

      
      let loginField = await driver.findElement(By.xpath('//input[@placeholder="Password"]'));
      await loginField.sendKeys('Autotesting Password');
      
      let submitButton = await driver.findElement(By.xpath('//div/button'));
      await submitButton.click();

      
      await driver.manage().setTimeouts({implicit: 10000});
      let loggedOrganisationCheck = await driver.findElement(By.xpath('//select/option'));
      expect(Boolean(loggedOrganisationCheck.isEnabled())).to.be.equal(true)

      let cummunitiesButton = await driver.findElement(By.css('div.navigations > div:nth-child(2) > a > div > button'));
      await cummunitiesButton.click();

      await driver.manage().setTimeouts({implicit: 10000});
      let selectCommunity = await driver.findElement(By.css('div.items > a:nth-child(3)'));
      await selectCommunity.click();
     
      await driver.manage().setTimeouts({implicit: 10000});
      let currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).to.be.equal('https://staging.pasalo.pro/communities/map/1835')
      //пытался проверять кнопку Выбора Комьюнити
      //expect(Boolean(selectCommunity.isSelected())).to.be.equal(true)

      let addCommunity = await driver.findElement(By.css('div.heading > div.add'));
      await addCommunity.click();

      await driver.manage().setTimeouts({implicit: 10000});
      currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).to.be.equal('https://staging.pasalo.pro/communities/map/new')

      //ВВодим данные комьюнити
      await driver.manage().setTimeouts({implicit: 10000});
      let communityName = await driver.findElement(By.xpath('//input[@placeholder="Enter a name for the community"]'));
      await communityName.sendKeys('JavaScript Community');

      //скопировал xPath
      let communityStatus = await driver.findElement(By.css('div.input-group:nth-child(4) > div'));
      await communityStatus.click();

      await driver.manage().setTimeouts({implicit: 10000}); 
      let communityStatusSelect = await driver.findElement(By.css('div.rw-list > div.rw-list-option:nth-child(2)'));
      await communityStatusSelect.click();

      let checkInactiveStatus = await driver.findElement(By.xpath('//span[text()="Inactive"]'))
      expect(Boolean(checkInactiveStatus.isDisplayed())).to.be.equal(true);

      await driver.manage().setTimeouts({implicit: 10000});
      let createCommunityButton = await driver.findElement(By.css('div.footer > div.button.cyan'));
      await createCommunityButton.click();

      await driver.manage().setTimeouts({implicit: 10000});
      let createdCommunityCheck = await driver.findElements(By.xpath('//div[text()="Daria test"]'));

    });

  });

// //*[@id="3"]/div[1]/div/p/text()
  // css с барузера#\33  > div.Toastify__toast-body > div > p

// скопированный xpath //*[@id="3"]/div[1]/div/p

// мой css div.Toastify .Toastify__toast-container.Toastify__toast-container--bottom-left .Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--error.Toastify__toast--close-on-click .Toastify__toast-body p