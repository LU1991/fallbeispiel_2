const url = 'http://localhost/Laura/EPS/Fallbeispiel_2/frontend/';
const screenshot_url = 'casperjs/screenshots/';

casper.test.begin('Page Title is correct', 1, function(test) {
	casper.options.viewportSize = { width: 1200, height: 800 };
    casper.start(url, function() {
		this.capture(screenshot_url + 'index.png');
    	test.assertTitle('Hebebühnenverleih Lift it up', 'Website has correct title');
    });
	
    casper.run(function(){
        test.done();
    });
});

casper.test.begin('Page Standorte is available', 1, function(test) {
	casper.options.viewportSize = { width: 1200, height: 800 };
    casper.start(url, function() {
    	this.click('#navLocations');
    });
    	
    casper.then(function(){
    	test.assertUrlMatch(url + 'locations.html', 'right url is shown');
    	this.capture(screenshot_url + 'locations.png');
	});

    casper.run(function(){
        test.done();
    });
});

casper.test.begin('Show 2 locations when searched for "Bruchkoebel"', 1, function(test) {
    casper.options.viewportSize = { width: 1200, height: 800 };
    casper.start(url, function() {
		this.click('#navLocations');
    });

    casper.then(function(){
        this.sendKeys('input#searchField', 'Bruchkoebel');
        this.click('#searchButton');
        this.capture(screenshot_url + 'bruchkoebel_search.png'); 
    });

    casper.then(function(){
        test.assertElementCount('.location', 2, '2 locations are shown when searched for Bruchkoebel');
        this.capture(screenshot_url + 'bruchkoebel_locations.png');
    });
	
    casper.run(function(){
        test.done();
    });
});

