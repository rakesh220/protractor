 



 describe('login module', function(){
 

//17      
/*it('As a user I should be able to set my pic as profile picture.', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
  element(by.id("Username")).sendKeys("raheem");
  element(by.id("Password")).sendKeys("raheem");
  element(by.buttonText("Sign In")).click();
 browser.driver.sleep(40000);
 element(by.xpath('//html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div/div/div[1]/div/div/div[1]/a')).click();
 browser.driver.sleep(40000);
 element(by.xpath('//*[@id="sidebar"]/div[1]/div/label')).click();
 browser.driver.sleep(40000);
 
  });*/
//19)User can search for other users in the current organization.
  it('User can search for other users in the current organization.', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false);
  element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh"); 
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="leftscroll"]/h4[3]/span[2]/a/i')).click();
  browser.driver.sleep(30000);
element(by.xpath('//*[@id="User"]')).sendKeys("roja");
browser.driver.sleep(30000); 
element(by.xpath('//*[@id="leftscroll"]/div/span/button')).click(); 
browser.driver.sleep(30000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(30000);

element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  });
//20) User can search for other users in the current organization with button

it('User can search for other users in the current organization with button', function() {
browser.get('https://chatapp.aadhya-analytics.com:4201');
browser.waitForAngularEnabled(false);
element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
element(by.id("Password")).sendKeys("rakesh");
element(by.buttonText("Sign In")).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="leftscroll"]/h4[3]/span[2]/a/i')).click();
browser.driver.sleep(40000);
element(by.xpath('//*[@id="User"]')).sendKeys("roja"); 
browser.driver.sleep(40000);  
element(by.xpath('//*[@id="leftscroll"]/div/span/button')).click(); 
browser.driver.sleep(40000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
 browser.driver.sleep(30000);
 element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
});

 //16)As a user I should not be able to set only one security questions.

 it(' As a user I should not be able to set only one security questions..', function() {
    browser.get('https://chatapp.aadhya-analytics.com:4201');
    browser.waitForAngularEnabled(false);
  element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(30000); 
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
browser.driver.sleep(30000);  
  element(by.xpath('//*[@id="profile"]/form/form/fieldset[2]/div/a')).click();
  browser.driver.sleep(30000);
 element(by.name("questquestionOne")).$('[value="599d76ef18450231573081f9"]').click();
 element(by.xpath('//*[@id="answerOne"]')).sendKeys("madhu");
 element(by.xpath('/html/body/aadhya-root/aadhya-find-user/div/div/div/div/div[1]/form/div[3]/button')).click();
   browser.driver.sleep(40000);  


     });





 });
