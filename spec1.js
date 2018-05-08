describe('User should be able to login into application with credentials', function() {
  //login test cases
//again adding
  it('login with correct userid and password', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh228");
  element(by.buttonText("Sign In")).click();
 browser.driver.sleep(40000); 
 
  });
 
});


