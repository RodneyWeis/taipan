/* Taipan.js */

function readyFn(jQuery) {
	console.log("jQuery ready");
	test_utilities();
}; // /function readyFn

/* Global Data Initialization 
	TODO:  Import JSON data from source repo
*/
var cities = ['Hong Kong', 'Shanghai', 'Nagasaki', 'Saigon', 'Manila', 'Singapore', 'Batavia'];

var merchName = ['General Cargo', 'Arms', 'Silk', 'Contraband'];

var merchBasePrice = [15, 50, 750, 9000];

function display_cities() {
	var $cityList = $( '#city_list');
	for(var city = 0; city < cities.length; city++) {
		$cityList.append('<li>' + cities[city] + '</li>');
	}
}

function display_merch() {
	var $priceList = $( '#price_list');
	for(var merch = 0; merch < merchName.length; merch++) {
		$priceList.append('<li>' + merchName[merch] + ': ' + merchBasePrice[merch] + '</li>');
	}	
}

function test_utilities() {
	display_cities();
	display_merch();
}

$(document).ready(readyFn);
