describe('User can search for other users in the current organizatio', function() {
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it('user searching', function() {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
   //browser.driver.sleep(40000); 
    });
    it("search",function(){
      //browser.navigate.refresh();
   element(by.xpath('//*[@id="leftscroll"]/h4[3]/span[2]/a')).click();
  // browser.driver.sleep(40000);
    });
   
  });