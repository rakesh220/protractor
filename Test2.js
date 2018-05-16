 
 describe('user module test cases', function() {
     
 
    it('User should be able to use forgot password when username is wrong', function() {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
  
      element(by.tagName("a")).click();
      element(by.id("Username")).sendKeys("rakesh2");
      element(by.xpath('//button[text()="Submit"]')).click();
      //element(by.xpath('//input[@id="squestionOne"]')).sendKeys("cat");
     // element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("khammam");
      //element(by.xpath('//button[text()="Submit"]')).click();
     browser.driver.sleep(40000);  
      });
     //6) user should not be able to change the wrong old password

 it('user should  be able to new password', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false);
  element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(30000);   
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
browser.driver.sleep(10000);    
  element(by.xpath('//*[@id="oldPassword"]')).sendKeys("rakesh");
  element(by.xpath('//*[@id="newPassword"]')).sendKeys("rakesh220");
  element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("rakesh220");
  element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
   browser.driver.sleep(30000); 
   element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
   browser.driver.sleep(30000); 
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
   browser.driver.sleep(30000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
   browser.driver.sleep(30000);
     });
 //7) user should not be able to change the wrong old password

 it('user should not be able to change the wrong old password', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false);
  element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh220");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(30000);   
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
browser.driver.sleep(10000);    
  element(by.xpath('//*[@id="oldPassword"]')).sendKeys("rakeshh");
  element(by.xpath('//*[@id="newPassword"]')).sendKeys("rakesh221");
  element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("rakesh221");
  element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
   browser.driver.sleep(30000); 
   element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
   browser.driver.sleep(30000); 
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
   browser.driver.sleep(30000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
   browser.driver.sleep(30000);
     });
//8) user canot change password with conform password and new password differnt'
it('user canot change password with conform password and new password differnt', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false);
  element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh220");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(30000);   
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
browser.driver.sleep(10000);    
  element(by.xpath('//*[@id="oldPassword"]')).sendKeys("rakesh220");
  element(by.xpath('//*[@id="newPassword"]')).sendKeys("rakesh221");
  element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("rakesh222");
  element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
   browser.driver.sleep(30000); 
   element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
   browser.driver.sleep(30000); 
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
   browser.driver.sleep(30000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
   browser.driver.sleep(30000);
     });
     //9)As a user I should not be able to login with username and old password'
     it('As a user I should not be able to login with username and old password', function() {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.waitForAngularEnabled(false);
      element(by.id("Username")).sendKeys("rakesh");
      element(by.id("Password")).sendKeys("rakesh");

      element(by.buttonText("Sign In")).click();
     browser.driver.sleep(40000);  
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(30000);
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
     browser.driver.sleep(30000);
     element(by.id("Username")).sendKeys("");
     element(by.id("Password")).sendKeys("");
      });
      //10 As a user I should  be able to login with username and new password.
      it('As a user I should  be able to login with username and new password.', function() {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
      
        browser.waitForAngularEnabled(false);
      element(by.id("Username")).sendKeys("rakesh");

      element(by.id("Password")).sendKeys("rakesh221");
      element(by.buttonText("Sign In")).click();
     browser.driver.sleep(30000);  
     element(by.id("Username")).sendKeys("");
      element(by.id("Password")).sendKeys("");
      });
    });