describe('User can search for other users in the current organization.', function() {
  
    it('User can search for other users in the current organization.', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
   
   
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(50000);
    element(by.xpath('//*[@id="leftscroll"]/h4[3]/span[2]/a/i')).click();
    browser.driver.sleep(40000);
element(by.xpath('//*[@id="User"]')).sendKeys("sunil");
    

browser.driver.sleep(40000); 

element(by.xpath('//*[@id="leftscroll"]/div/span/button')).click();
    

browser.driver.sleep(40000); 
//element(by.xpath('//*[@id="radio2"]')).click();
//browser.driver.sleep(40000);
//element(by.name("notifyMeInMobile")).$('[value="whenMentioned"]').click();
     //browser.driver.sleep(40000);
//element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     //browser.driver.sleep(40000);


    },1000000);

    });