const selenium = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");

describe('Hebebuhenen', function() {
    const that = this;
    const chromeCapabilities = selenium.Capabilities.chrome();
    const chromeOptions = {
        //"args": ["--load-extension=../chrome_extensions/Allow-Control-Allow-Origin"]
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);

    beforeEach(function(done) {
        that.driver = new selenium.Builder().
            withCapabilities(chromeCapabilities).
            build();
        
        that.driver.get('http://localhost/Laura/EPS/Fallbeispiel_2/frontend').then(done);
    });

    afterEach(function(done) {
        that.driver.quit().then(done);
    });


    it('should show page "Standorte" when Standorte is clicked', function(done) {
        that.driver.findElement(selenium.By.id('navLocations'))
            .then(function(element) {
                return element.click();
            })
            .then(function() {
                return that.driver.getCurrentUrl();
            })
            .then(function(url) {
                expect(url).toContain('/locations');
            })
            .catch(function(err){
                console.log(err);
                fail(err);
            })
            .then(done);
    });

    it('should show 2 locations when searched for "Bruchkoebel"', function(done) { 
        that.driver.findElement(selenium.By.id('navLocations'))
            .then(function(element) {
                return element.click();
            })
            .then(function() {
                return that.driver.findElement(selenium.By.id('searchField'));
            })
            .then(function(element) {
                return element.sendKeys('Bruchkoebel');
            })
            .then(function() {
                return that.driver.findElement(selenium.By.id('searchButton')).click();
            })
            .then(function() {
                return that.driver.findElements(selenium.By.className("location"));
            })
            .then(function(elements) {
                expect(elements.length).toBe(2);
            })
            .catch(function(err){
                console.log(err);
                fail(err);
            })
            .then(done);
    });

    it('should display 3 locations when filtered by "small"', function(done) { 
        that.driver.findElement(selenium.By.id('navLocations'))
            .then(function(element) {
                return element.click();
            })
            .then(function() {
                return that.driver.findElement(selenium.By.id('small')).click();
            })
            .then(function() {
                return that.driver.findElements(selenium.By.className("location"));
            })
            .then(function(elements) {
                expect(elements.length).toBe(3);
            })
            .catch(function(err){
                console.log(err);
                fail(err);
            })
            .then(done);
    });

});