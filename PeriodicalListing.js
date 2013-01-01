/* Periodical Date & Listing by Kento Kaneko
 * Created: 15:03 (CST) 31 December 2012
 * Palatine, Illinois, 60067, U.S.A.
 * 
 * for non-profit uses only
 * Copyright 2012 Kento Kaneko.
 */


// JavaScript Roman Numeral Converter by Steven Levithan
// http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
function romanize (num) {
	if (!+num)
		return false;
	var	digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

function issueNumber(input){
	var n = 0;
	switch(input.getMonth()){
	case 11:n+=30;
	case 10:n+=31;
	case 9:n+=30;
	case 8:n+=31;
	case 7:n+=31;
	case 6:n+=30;
	case 5:n+=31;
	case 4:n+=30;
	case 3:n+=31;
	case 2:n+=(input.getFullYear()%4==0)?29:28;
	case 1:n+=31;
	case 0:n+=input.getDate();
	}
	return n;
}

function dateString(input){
	var string = "";
	var day = new Array(7);
	day[0]="Sunday, ";
	day[1]="Monday, ";
	day[2]="Tuesday, ";
	day[3]="Wednesday, ";
	day[4]="Thursday, ";
	day[5]="Friday, ";
	day[6]="Saturday, ";
	
	var month = new Array(12);
	month[0]=" January ";
	month[1]=" February ";
	month[2]=" March ";
	month[3]=" April ";
	month[4]=" May ";
	month[5]=" June ";
	month[6]=" July ";
	month[7]=" August ";
	month[8]=" September ";
	month[9]=" October ";
	month[10]=" November ";
	month[11]=" December ";
	
	return day[input.getDay()] + input.getDate() + month[input.getMonth()] + input.getFullYear();
}

function urbanaDate(){
	var local = new Date();
	var difference = local.getTimezoneOffset() - 6*60;
	
	return new Date(local.getFullYear(), local.getMonth(), local.getDate(), local.getHours(), 
			local.getMinutes()+difference, local.getSeconds(), local.getMilliseconds());
}
