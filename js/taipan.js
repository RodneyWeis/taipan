/* Taipan.js */

function readyFn(jQuery) {
	console.log("jQuery ready");
	test_utilities();
}; // /function readyFn

/* Global Data Initialization 
	TODO:  Import JSON data from source repo
*/

var warehouseCapacity = 10000,
	shipCapacity = 100,
	shipGuns = 5;
	shipHealth = 100;

var cities = ['Hong Kong', 'Shanghai', 'Nagasaki', 'Calgary', 'Edmonton', 'Red Deer', 'Airdrie', 'Johannesburg', 'Manila', 'Singapore', 'Batavia'];

var merchName = ['General Cargo', 'Hotdogs', 'Silk', 'Contraband', 'Books'];

var merchBasePrice = [15, 80, 750, 9000, 27];

var warehouseStock = [200, 15, 5, 1, 157, warehouseCapacity];

var shipStock = [10, 5, 0, 0, 75, shipCapacity, shipGuns, shipHealth];

/* Individual modules */

function display_cities() {
	var $cityList = $( '#city_list');
	$cityList.html("");
	for(var city = 0; city < cities.length; city++) {
		$cityList.append('<li>' + cities[city] + '</li>');
	}
}

function display_merch() {
	var $priceList = $( '#price_list');
	$priceList.html("");
	for(var merch = 0; merch < merchName.length; merch++) {
		$priceList.append('<li>' + merchName[merch] + ': ' + merchBasePrice[merch] + '</li>');
	}	
}

function display_warehouse() {
	var $warehouseList = $( '#warehouse_list');
	$warehouseList.html("");
	var warehouseCargoUsed = 0;
	for(var merch = 0; merch < merchName.length; merch++) {
		$warehouseList.append('<li>' + merchName[merch] + ': ' + warehouseStock[merch] + '</li>');
		warehouseCargoUsed += warehouseStock[merch];
	}	
	$warehouseList.append('<li>Capacity: ' + warehouseCargoUsed + '/' + warehouseStock[merchName.length] + '</li>');
}

function display_ship() {
	var $shipList = $('#ship_list');
	$shipList.html("");
	var shipCargoUsed = 0;
	for(var merch = 0; merch < merchName.length; merch++) {
		$shipList.append('<li>' + merchName[merch] + ': ' + shipStock[merch] + '</li>');
		shipCargoUsed += shipStock[merch];
	}	
	$shipList.append('<li>Capacity: ' + shipCargoUsed + '/' + shipStock[merchName.length] + '</li>');
	$shipList.append('<li>Guns: ' + shipStock[merchName.length + 1] + '</li>');
	$shipList.append('<li>Health: ' + shipStock[merchName.length + 2] + '</li>');
}

/* Utility test calls */

function test_utilities() {
	display_cities();
	display_merch();
	display_warehouse();
	display_ship();
}

/* Document ready - launch entry */

$(document).ready(readyFn);
