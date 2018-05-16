describe('User can set DNser set DND start and end n the set time user ', function() {
  
    it('dnd setting', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
   
   // element(by.xpath('//*[@id="loginform"]/div[3]/button')).click();
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(50000);
    });
it("ddsdsdsd",function()
{
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
    

browser.driver.sleep(50000); 

   // element(by.name("messageTone")).$('[value="messageToneName3"]').click();
    element(by.xpath('//*[@id="dispableTime"]')).click();
   browser.driver.sleep(4000);
   
   
    element(by.name("startTime")).$('[value="01:00 AM"]').click();
    browser.driver.sleep(4000);

    element(by.name("endTime")).$('[value="07:00 PM"]').click();
   browser.driver.sleep(4000);

    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(50000);  
       
});
    });
