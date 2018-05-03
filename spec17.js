describe('As a user I should be able to set my pic as profile picture.', function() {
  
    it('login', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
    element(by.id("Username")).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
    element(by.buttonText("Sign In")).click();
   browser.driver.sleep(90000);
   element(by.xpath('//html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div/div/div[1]/div/div/div[1]/a')).click();
   browser.driver.sleep(40000);
   element(by.xpath('//*[@id="sidebar"]/div[1]/div/label')).click();
   browser.driver.sleep(40000);
   
    });
   
  });