/* Taipan.js */

/* Global Data Initialization 
	TODO:  Import JSON data from source repo
*/

const warehouseCapacity = 10000,
	shipCapacity = 100,
	shipGuns = 5,
	shipHealth = 100;

const cities = ['Hong Kong', 'Shanghai', 'Nagasaki', 'Calgary', 'Edmonton', 'Red Deer', 'Airdrie', 'Johannesburg', 'Manila', 'Singapore', 'Batavia'];

const merchName = ['General Cargo', 'Hotdogs', 'Silk', 'Contraband', 'Books'];

const merchBasePrice = [15, 80, 750, 9000, 27];

let warehouseStock = [200, 15, 5, 1, 157, warehouseCapacity];

let shipStock = [10, 5, 0, 0, 75, shipCapacity, shipGuns, shipHealth];

/* Individual modules */

function display_cities() {
	let cityList = document.getElementById('city_list');
	cityList.innerHTML="";
	for(let city = 0; city < cities.length; city++) {
		cityList.innerHTML += ('<li>' + cities[city] + '</li>');
	}
}
function display_merch() {
	let priceList = document.getElementById('price_list');
	priceList.innerHTML="";
	for(let merch = 0; merch < merchName.length; merch++) {
		priceList.innerHTML += ('<li>' + merchName[merch] + ': ' + merchBasePrice[merch] + '</li>');
	}	
}

function display_warehouse() {
	let warehouseList = document.getElementById('warehouse_list');
	warehouseList.innerHTML="";
	let warehouseCargoUsed = 0;
	for(let merch = 0; merch < merchName.length; merch++) {
		warehouseList.innerHTML += ('<li>' + merchName[merch] + ': ' + warehouseStock[merch] + '</li>');
		warehouseCargoUsed += warehouseStock[merch];
	}	
	warehouseList.innerHTML += ('<li>Capacity: ' + warehouseCargoUsed + '/' + warehouseStock[merchName.length] + '</li>');
}

function display_ship() {
	let shipList = document.getElementById('ship_list');
	shipList.innerHTML="";
	let shipCargoUsed = 0;
	for(let merch = 0; merch < merchName.length; merch++) {
		shipList.innerHTML += ('<li>' + merchName[merch] + ': ' + shipStock[merch] + '</li>');
		shipCargoUsed += shipStock[merch];
	}	
	shipList.innerHTML += ('<li>Capacity: ' + shipCargoUsed + '/' + shipStock[merchName.length] + '</li>');
	shipList.innerHTML += ('<li>Guns: ' + shipStock[merchName.length + 1] + '</li>');
	shipList.innerHTML += ('<li>Health: ' + shipStock[merchName.length + 2] + '</li>');
}
/* Utility test calls */

function test_utilities() {
	display_cities(); 
	display_merch();
	display_warehouse();
	display_ship();
}

test_utilities();
