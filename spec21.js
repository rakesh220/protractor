describe('user can remove another ', function() {
  
    it('user can remove another', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
   
   
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(50000);
    element(by.xpath('//*[@id="userId33"]')).click();
    browser.driver.sleep(40000);
element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[34]/div/span[2]/a/i')).click();
    

//browser.driver.sleep(40000); 
//element(by.xpath('//*[@id="radio2"]')).click();
//browser.driver.sleep(40000);
//element(by.name("notifyMeInMobile")).$('[value="whenMentioned"]').click();
     //browser.driver.sleep(40000);
//element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(40000);


    },1000000);

    });