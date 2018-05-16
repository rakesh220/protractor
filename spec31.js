describe('User will get organization members user presence with the different red colours. ', function() {
  
    it('user status red color ', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false)
    element(by.xpath('//*[@id="Username"]')).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
   
   
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(50000);
    element(by.xpath('//*[@id="userId23"]')).click();
    

browser.driver.sleep(40000); 
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(40000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[3]/a')).click();
     browser.driver.sleep(40000);
    
    },1000000);

    });