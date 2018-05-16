describe('As a user I should  be able to set security questions.', function() {
  
    it('As a user I should  be able to set security questions.', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(40000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
 browser.driver.sleep(40000);  
    element(by.xpath('//*[@id="profile"]/form/form/fieldset[2]/div/a')).click();
    browser.driver.sleep(40000); 
   element(by.name("questquestionOne")).$('[value="599d76f418450231573081fa"]').click();
   element(by.xpath('//*[@id="answerOne"]')).sendKeys("dog");
   element(by.name("questquestionTwo")).$('[value="599d76ef18450231573081f9"]').click();
   element(by.xpath('//*[@id="answerTwo"]')).sendKeys("madhu");
   element(by.xpath('/html/body/aadhya-root/aadhya-find-user/div/div/div/div/div[1]/form/div[3]/button')).click();
   
     browser.driver.sleep(40000);  
       });
    
    });
