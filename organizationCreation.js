const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");
const { expect, should } = require('chai');
const { equal } = require('assert');



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
      let emailField = await driver.findElement(By.xpath("//input[@placeholder=\"Email address\"]"));
      await emailField.sendKeys('celadonautotest@gmail.com');

      
      let loginField = await driver.findElement(By.xpath("//input[@placeholder=\"Password\"]"));
      await loginField.sendKeys('Autotesting Password');
      
      
      let submitButton = await driver.findElement(By.xpath("//div[@class=\"button\"]//button"));
      await submitButton.click();

      
      await driver.manage().setTimeouts({implicit: 10000});
      let loggedOrganisationCheck = await driver.findElement(By.xpath("//select/option"));
      expect(Boolean(loggedOrganisationCheck.isEnabled())).to.be.equal(true)

      let cummunitiesButton = await driver.findElement(By.xpath("//button[text()=\"Communities\"]/../."));
      await cummunitiesButton.click();

      await driver.manage().setTimeouts({implicit: 10000});
      let selectCommunity = await driver.findElement(By.xpath("//div[@class=\"item \"]//div[text()=\"Autotest community\"]"));
      await selectCommunity.click();
     
      await driver.manage().setTimeouts({implicit: 10000});
      let currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).to.be.equal('https://staging.pasalo.pro/communities/map/1835')


      let addCommunity = await driver.findElement(By.xpath("//div[@class=\"add\"]//i[@class=\"material-icons\"]"));
      await addCommunity.click();

      await driver.manage().setTimeouts({implicit: 10000});
      currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).to.be.equal('https://staging.pasalo.pro/communities/map/new')

      //ВВодим данные комьюнити
      await driver.manage().setTimeouts({implicit: 10000});
      let communityName = await driver.findElement(By.xpath("//input[@placeholder=\"Enter a name for the community\"]"));
      await communityName.sendKeys('JavaScript Community');


      let communityPrivacy = await driver.findElement(By.xpath("//p[text()=\"Privacy\"]//..//input[@class=\"rw-dropdownlist-search\"]"));
      await communityPrivacy.click();

      await driver.manage().setTimeouts({implicit: 10000}); 
      let communityPrivacySelect = await driver.findElement(By.xpath("//div[text()=\"Public\"]"));
      await communityPrivacySelect.click();


      let communityStatus = await driver.findElement(By.xpath("//p[text()=\"Status\"]//..//input[@class=\"rw-dropdownlist-search\"]"));
      await communityStatus.click();

      await driver.manage().setTimeouts({implicit: 10000}); 
      let communityStatusSelect = await driver.findElement(By.xpath("//div[text()=\"Inactive\"]"));
      await communityStatusSelect.click();

      let checkInactiveStatus = await driver.findElement(By.xpath('//span[text()="Inactive"]'))
      expect(Boolean(checkInactiveStatus.isDisplayed())).to.be.equal(true);

      await driver.manage().setTimeouts({implicit: 10000});
      let createCommunityButton = await driver.findElement(By.xpath("//div[@class=\"button cyan\"]"));
      await createCommunityButton.click();

      await driver.manage().setTimeouts({implicit: 10000});
      let selectCommunityButton = await driver.findElement(By.xpath("//div[@class=\"item active\"]//div[text()=\"JavaScript Community\"]"));
      await selectCommunityButton.click();

      await driver.manage().setTimeouts({implicit: 10000});
      let communityNameCheck = await driver.findElement(By.name('name'));
      let communityNameValue = await communityNameCheck.getAttribute('value')
      expect(communityNameValue).to.be.equal('JavaScript Community');

      let communityPrivacyCheck = await driver.findElement(By.xpath("//span[text()=\"Public\"]"))
      let communityPrivacyValue = await communityPrivacyCheck.getText()
      console.log(communityPrivacyValue)
      expect(communityPrivacyValue).to.be.equal('Public')
      
      let communityStatusCheck = await driver.findElement(By.xpath("//span[text()=\"Inactive\"]"))
      let communityStatusValue = await communityStatusCheck.getText()
      console.log(communityStatusValue)
      expect(communityStatusValue).to.be.equal('Inactive')
    });


    
    });

 


// //*[@id="3"]/div[1]/div/p/text()
  // css с барузера#\33  > div.Toastify__toast-body > div > p

// скопированный xpath //*[@id="3"]/div[1]/div/p

// мой css div.Toastify .Toastify__toast-container.Toastify__toast-container--bottom-left .Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--error.Toastify__toast--close-on-click .Toastify__toast-body p