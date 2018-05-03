describe('User can view the organization members profile info like user status, nickname, gender, email id', function() {
  
    it('user info', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh227");
   
   
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(50000);
    });
it("ddsdsdsd",function()
{
    element(by.xpath('//*[@id="userId33"]')).click();
    

browser.driver.sleep(50000); }
);
    
   it("aaa",function(){
    //element(by.name("messageTone")).$('[value="messageToneName3"]').click();
    
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div/div/div[1]/div/div/div[1]/a/img')).click();
     browser.driver.sleep(50000);  
       });
    });
