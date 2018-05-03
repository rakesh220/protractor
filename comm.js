describe('Enable or Disable chat notifications. when i mentained ', function() {
  
    it('Enable or Disable chat notifications.when i mentained ', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh227");
   
   
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(50000);
    browser.driver.manage().window().maximize();

element(by.xpath('//*[@id="userId71"]')).click();
    

browser.driver.sleep(40000); 
element(by.xpath('//*[@id="default"]/div[1]/ul/li[3]/aadhya-chat-message/div/div/div/div/p/span/span')).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="dLabel"]/span')).click();
     browser.driver.sleep(40000);
element(by.linkText('Delete Message')).click();
   browser.driver.sleep(40000);
    },1000000);

    });