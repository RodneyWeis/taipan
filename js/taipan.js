/* Taipan.js */

/* Global Data Initialization 
	TODO:  Import JSON data from source repo
*/
var cities = ['Hong Kong', 'Shanghai', 'Nagasaki', 'Saigon', 'Manila', 'Singapore', 'Batavia'];

var merchName = ['General Cargo', 'Arms', 'Silk', 'Contraband'];

var merchBasePrice = [15, 50, 750, 9000];

var cityPane = document.getElementById('city_list');
var pricePane = document.getElementById('price_list');

function display_cities() {
	console.log('List of cities: ');
	document.write('List of cities: ');
	document.write('<ol>');
	for(var city = 0; city < cities.length; city++) {
		console.log((city+1) + '. ' + cities[city]);
		document.write('<li>' + cities[city] + '</li>');
	}
	document.write('</ol>');
}

function display_merch() {
	console.log('List of merchandise: ');
	document.write('List of merchandise: ');
	document.write('<ol>');
	for(var merch = 0; merch < merchName.length; merch++) {
		console.log((merch+1) + '. ' + merchName[merch] + ' Cost: ' + merchBasePrice[merch]);
		document.write('<li>' + merchName[merch] + ' Cost: ' + merchBasePrice[merch] + '</li>');
	}
	document.write('</ol>');
}

function test_utilities() {
	display_cities();
	display_merch();
}


