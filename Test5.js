describe('user login module ', function() {
  
    /*it('user can remove another user', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem"); 
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    browser.driver.manage().window().maximize();
    element(by.id('userId30')).click();
    browser.driver.sleep(30000);
element(by.xpath('//*[@id="leftscroll"]/ul[4]/li[31]/div/span/a/i')).click();
browser.driver.sleep(30000);
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
 browser.driver.sleep(30000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
    });
//*[@id="leftscroll"]
/*it('user can use scrollbar up and down', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("raheem");
  element(by.id("Password")).sendKeys("raheem"); 
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  browser.driver.manage().window().maximize();
  var lastElement = element(by.id("leftscroll"));
browser.executeScript('arguments[6].scrollIntoView()', lastElement.getWebElement());
//element(by.id("leftscroll")).click();
   browser.driver.sleep(30000);
  });*/

  /*it('user info can see', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false);
  element(by.xpath('//*[@id="Username"]')).sendKeys("raheem");
  element(by.id("Password")).sendKeys("raheem"); 
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(40000);
  element(by.id("userId18")).click();
browser.driver.sleep(40000);  
  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div/div/div[1]/div/div/div[1]/a/img')).click();
   browser.driver.sleep(40000);  
     });*/

     /*it('dnd setting', function() {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.waitForAngularEnabled(false);
      element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
      element(by.id("Password")).sendKeys("rakesh");
      element(by.buttonText("Sign In")).click();
      browser.driver.sleep(50000);
      element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
      browser.driver.sleep(40000); 
      element(by.xpath('//*[@id="dispableTime"]')).click();
     browser.driver.sleep(40000);   
      element(by.name("startTime")).$('[value="06:00 PM"]').click();
      browser.driver.sleep(40000);
      element(by.name("endTime")).$('[value="12:00 PM"]').click();
     browser.driver.sleep(40000);
      element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
       browser.driver.sleep(40000);  
         
  });*/

  it('Enable or Disable chat notifications. ', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false);
  element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
element(by.xpath('//*[@id="navbar"]/ul/li[6]/a/i')).click();
browser.driver.sleep(30000); 
element(by.xpath('//*[@id="radio1"]')).click();
browser.driver.sleep(30000);
element(by.name("notifyMeInMobile")).$('[value="allMessages"]').click();
   browser.driver.sleep(30000);
element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
   browser.driver.sleep(30000);
  });









    });