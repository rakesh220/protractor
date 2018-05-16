describe('User should be able to login into application with credentials', function() {
  
  it('login with correct userid and password', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false)
  element(by.id("Username")).sendKeys("raheem");
  element(by.id("Password")).sendKeys("raheem");
  element(by.buttonText("Sign In")).click();
 element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(40000);
  });
 
});


