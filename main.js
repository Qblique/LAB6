//Problem2: 
function perimeter(a,b) {
	let P = 2*(a+b);
	return console.log('Perimeter of the rectangle is', P);
}
perimeter(2,3);

//Problem10
function equal(a,b) {
	if(a==b) {
		return console.log("Two given numbers are equal");
	} else {
		return console.log("Two given numbers are not equal");
	}
}
equal(23,23);
equal(8,3);

//Problem8 
function converter(d) {
	let tenge=d*445;
	return console.log(d, " dollars is equal to ", tenge, " tenge");
}
converter(10);