describe('User should not be able to login into application with wrong credentials', function() {
  
    it('login with invalid username and correct password', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
    element(by.id("Username")).sendKeys("rakesh22");
    element(by.id("Password")).sendKeys("raheem");
    element(by.buttonText("Sign In")).click();
   browser.driver.sleep(40000);  
    });
   
  });
