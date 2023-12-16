//your JS code here. If required.
function daysOfAYear(y) {
	if(y < 1 || y>9999) return;
	
	if (y%100 === 0) {
		if(y%400 === 0) return 366;
		else return 365;
	}else {
		if(y%2 === 0) {
		return 366;
		}else {
			return 365;
		}
	} 
}
// alert(daysOfAYear(99999))