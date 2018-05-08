describe('checking login right credentials with invalid password', function() {
  
    it('login with valid user name and invalid password', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
   browser.driver.sleep(40000);  
    });
   
  });