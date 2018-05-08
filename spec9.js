describe('As a user I should not be able to login with username and old password.', function() {
  
    it('login', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
   browser.driver.sleep(40000);  
    });
   
  });