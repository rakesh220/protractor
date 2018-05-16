describe('login module', function() {
   
    //11) As a user I should be able to get new password in mail after answering security questions correctly
    it('As a user I should be able to get new password in mail after answering security questions correctly', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false);
    element(by.tagName("a")).click();
    browser.driver.sleep(30000);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.xpath('//button[text()="Submit"]')).click();
    browser.driver.sleep(30000);
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("madhu");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("dog");
    element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(30000);  
    });
    //12) As a user I should not be able to get new password in mail after answering security questions wrongly
    it('As a user I should not be able to get new password in mail after answering security questions wrongly', function() {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.waitForAngularEnabled(false);
      element(by.tagName("a")).click();
      browser.driver.sleep(30000);
      element(by.id("Username")).sendKeys("rakesh");
      element(by.xpath('//button[text()="Submit"]')).click();
      browser.driver.sleep(30000);
      element(by.xpath('//input[@id="squestionOne"]')).sendKeys("zpss");
      element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("cat");
      element(by.xpath('//button[text()="Submit"]')).click();
     browser.driver.sleep(30000);  
      });
     //13) As a user I should not be able to get new password in mail after answering security questions wrongly for three time.

     it('As a user I should not be able to get new password in mail after answering security questions wrongly for three time.', function() {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.waitForAngularEnabled(false);
      element(by.tagName("a")).click();
      browser.driver.sleep(30000);
      element(by.id("Username")).sendKeys("rakesh");
      element(by.xpath('//button[text()="Submit"]')).click();
      browser.driver.sleep(30000);
      element(by.xpath('//input[@id="squestionOne"]')).sendKeys("cat11");
      element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("khammam1");
      element(by.xpath('//button[text()="Submit"]')).click();
      browser.driver.sleep(30000);
      element(by.xpath('//input[@id="squestionOne"]')).clear();
      element(by.xpath('//input[@id="squestionTwo"]')).clear();
      element(by.xpath('//input[@id="squestionOne"]')).sendKeys("dog");
      element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("hyderabad");
  
      element(by.xpath('//button[text()="Submit"]')).click();
      browser.driver.sleep(30000);
      element(by.xpath('//input[@id="squestionOne"]')).clear();
      element(by.xpath('//input[@id="squestionTwo"]')).clear();
      element(by.xpath('//input[@id="squestionOne"]')).sendKeys("rat");
      element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("russia");
      element(by.buttonText("Submit")).click();
     browser.driver.sleep(40000);  
      });
      //user getting reset password when he getting password mail
    // it('User getting reset password', function() {
     // browser.get('https://chatapp.aadhya-analytics.com:4201');
     // browser.waitForAngularEnabled(false);
     // element(by.id("Username")).sendKeys("rakesh");

     // element(by.id("Password")).sendKeys("rakesh221");
     // browser.driver.sleep(30000);
     // element(by.buttonText("Sign In")).click();
     // browser.driver.sleep(30000);
     // element(by.id('oldPassword')).sendKeys("rakesh221");
     // browser.driver.sleep(30000);
      //element(by.id('newPassword')).sendKeys("rakesh");
     // element(by.id('confirmPassword')).sendKeys("rakesh");
      //element(by.buttonText('Submit')).click();
   //browser.driver.sleep(30000);  
    //});
      //14) As a user I should  be able to set security questions.
      it('As a user I should  be able to set security questions.', function() {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.waitForAngularEnabled(false);
        
      element(by.id('Username')).sendKeys("rakesh");
      element(by.id("Password")).sendKeys("rakesh");
      element(by.buttonText("Sign In")).click();

      browser.driver.sleep(30000);
  
      element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
   browser.driver.sleep(30000);  
      element(by.xpath('//*[@id="profile"]/form/form/fieldset[2]/div/a')).click();
      browser.driver.sleep(30000); 
     element(by.name("questquestionOne")).$('[value="599d76f418450231573081fa"]').click();
     element(by.xpath('//*[@id="answerOne"]')).sendKeys("dog");
     element(by.name("questquestionTwo")).$('[value="599d76ef18450231573081f9"]').click();
     element(by.xpath('//*[@id="answerTwo"]')).sendKeys("madhu");
     element(by.xpath('/html/body/aadhya-root/aadhya-find-user/div/div/div/div/div[1]/form/div[3]/button')).click();
       browser.driver.sleep(30000);  
       element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
 browser.driver.sleep(30000);
 element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
         });

        //15) As a user I should not be able to set same security questions.
         it('As a user I should not be able to set same security questions.', function() {
            browser.get('https://chatapp.aadhya-analytics.com:4201');
            browser.waitForAngularEnabled(false);
          element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
          element(by.id("Password")).sendKeys("rakesh");
          element(by.buttonText("Sign In")).click();
          browser.driver.sleep(40000);
          element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
      browser.driver.sleep(40000);   
      element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
       browser.driver.sleep(40000);  
          element(by.xpath('//*[@id="profile"]/form/form/fieldset[2]/div/a')).click();
          browser.driver.sleep(40000);
         element(by.name("questquestionOne")).$('[value="599d76ef18450231573081f9"]').click();
         element(by.xpath('//*[@id="answerOne"]')).sendKeys("madhu");
         element(by.name("questquestionTwo")).$('[value="599d76ef18450231573081f9"]').click();
         element(by.xpath('//*[@id="answerTwo"]')).sendKeys("madhu");
         element(by.xpath('/html/body/aadhya-root/aadhya-find-user/div/div/div/div/div[1]/form/div[3]/button')).click(); 
           browser.driver.sleep(40000);
           
           
           element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
           browser.driver.sleep(40000);
           element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();




             });

       


  });