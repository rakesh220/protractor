describe('View Members of Organization groups', function() {
  
    it('group information', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
   
   
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(50000);
    element(by.xpath('//*')).click();
    

browser.driver.sleep(40000); 
element(by.xpath('/html/body/aadhya-root/app-chat--topbar-innerleft/div/div/div[1]/div/div/div[1]/a/img')).click();
browser.driver.sleep(40000);
   element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-group-right-panel/div/ul/li[3]/a/i')).click();
     browser.driver.sleep(40000);
    
    },1000000);

    });
