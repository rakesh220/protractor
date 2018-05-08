describe('As a user i should be able to change password and set a new one.', function() {
  
    it('change password', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
   
   // element(by.xpath('//*[@id="loginform"]/div[3]/button')).click();
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(80000);
    });
it("ddsdsdsd",function()
{
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
    

browser.driver.sleep(80000); }
);
    //browser.waitForAngularEnabled(false) 
   it("aaa",function(){
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
 browser.driver.sleep(100000);  
   });
   it("aaa",function(){
    element(by.xpath('//*[@id="oldPassword"]')).sendKeys("rakesh");
    element(by.xpath('//*[@id="newPassword"]')).sendKeys("rakesh220");
    element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("rakesh220");
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(100000);  
       });
    //element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
    //element(by.linkText('Password & Languages')).click();
   // browser.driver.sleep(40000);  
    //element(by.css(".fa.fa-cog.font3x")).click();
 // browser.driver.sleep(50000);  
    });
//*[@id="Username"]
//*[@id="loginform"]/div[3]/button
  