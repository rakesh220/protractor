describe(' Description: As a user I should not be able to get new password in mail after answering security questions wrongly for three time.', function() {
  
    it('login', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');

    element(by.tagName("a")).click();
    element(by.id("Username")).sendKeys("rakesh");
    element(by.xpath('//button[text()="Submit"]')).click();
    //browser.driver.sleep(40000);
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("cat11");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("khammam1");
    element(by.xpath('//button[text()="Submit"]')).click();
    element(by.xpath('//input[@id="squestionOne"]')).clear();
    element(by.xpath('//input[@id="squestionTwo"]')).clear();
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("dog");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("hyderabad");
    element(by.xpath('//button[text()="Submit"]')).click();
    element(by.xpath('//input[@id="squestionOne"]')).clear();
    element(by.xpath('//input[@id="squestionTwo"]')).clear();
    element(by.xpath('//input[@id="squestionOne"]')).sendKeys("rat");
    element(by.xpath('//input[@id="squestionTwo"]')).sendKeys("russia");
    element(by.xpath('//button[text()="Submit"]')).click();
   browser.driver.sleep(40000);  
    });
   
  });