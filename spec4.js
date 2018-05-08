describe('User should be able use forgot password', function() {
  
    it('forgot password', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');

    element(by.tagName("a")).click();
    element(by.id("Username")).sendKeys("rakesh");
    element(by.xpath('//button[text()="Submit"]')).click();
    //element(by.xpath('//input[@id="squestionOne"]')).sendKeys("madhu");
    //element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("dog");
    //element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(40000);  
    });
   
  });