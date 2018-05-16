
    it('cannot change password with old password', function() {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.waitForAngularEnabled(false);
      element(by.xpath('//*[@id="Username"]')).sendKeys("raheem");
      element(by.id("Password")).sendKeys("raheem");
      element(by.buttonText("Sign In")).click();
      browser.driver.sleep(30000);
      element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
  browser.driver.sleep(30000);   
  element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
  // browser.driver.sleep(10000);    
      element(by.xpath('//*[@id="oldPassword"]')).sendKeys("raheem1");
      element(by.xpath('//*[@id="newPassword"]')).sendKeys("raheem");
      element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("raheem");
      element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
       browser.driver.sleep(30000); 
       element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
       browser.driver.sleep(30000); 
       element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
       browser.driver.sleep(30000);
       element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
       browser.driver.sleep(30000);
         });
      