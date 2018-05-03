describe('As a user I should  be able to login with username and new password.', function() {
  
    it('login', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
   browser.driver.sleep(40000);  
    });
   
  });