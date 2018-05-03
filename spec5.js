describe('User should be able to use forgot password when username is wrong', function() {
  
    it('user cannot get password with user name', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');

    element(by.tagName("a")).click();
    element(by.id("Username")).sendKeys("rakesh2");
    element(by.xpath('//button[text()="Submit"]')).click();
    //element(by.xpath('//input[@id="squestionOne"]')).sendKeys("cat");
   // element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("khammam");
    //element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(40000);  
    });
   
  });