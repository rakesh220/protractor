describe('As a user I should be able to get new password in mail after answering security questions.', function() {
  
    it('login', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');

    element(by.tagName("a")).click();
    element(by.id("Username")).sendKeys("rakesh");
    element(by.xpath('//button[text()="Submit"]')).click();
    //browser.driver.sleep(40000);
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("madhu");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("dog");
    element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(40000);  
    });
   
  });