/** 
 * @file problem1.ts
 * @author Samantha L. Misurda
 * @desc A program that cleans up user-entered phone numbers so that they can be sent SMS messages
 */

class PhoneNumber {
	
	private areaCode_: string;
	private exchangeCode_: string;
	private lineNumber_: string;
    
    constructor(private phoneNumber_: string) {
    	// Must be all digits
    	if(isNaN(Number(phoneNumber_) ) ){
			throw new Error("Phone number must contain digits only");
		}
		// Less than 10 digits, greater than 11
		else if(phoneNumber_.length > 11 || phoneNumber_.length < 10){
			throw new Error("invalid phone number length");
		}
		// Check validity of 1
		else if(phoneNumber_.length == 11 && phoneNumber_.charAt(0) != '1'){
			throw new Error("invalid starting digit");
		}
    	else { 
    		// Parse the phone number's parts
    		let numberFields = phoneNumber_.match('^1?([0-9]{3})([0-9]{3})([0-9]{4})$');

    		if(numberFields == null) {	
	    		throw new Error("Invalid phone number format");
	    	}

    		this.areaCode_ = numberFields[1];
    		this.exchangeCode_ = numberFields[2];
    		this.lineNumber_ = numberFields[3];
    	}
    }

	/**
	 * Returns all 10 numerical digits in a phone number
	 * @return phoneNumber, A String
	 */
	number(): string {
		return this.phoneNumber_;
	}

	/**
	 * Returns the first three digits of a phone number
	 * @return areaCode, A String
	 */
	areaCode(): string {
		return this.areaCode_;
	}

	/**
	 * Returns the phone number exchange code
	 * @return exchangeCode, A String
	 */
	exchangeCode(): string {
		return this.exchangeCode_;	
	}

	/**
	 * Returns the last four digits in a phone number
	 * @return lineNumber, A String
	 */
	lineNumber(): string {
		return this.lineNumber_;
	}

	/**
	 * Returns the phone number in proper format
	 * @return phoneNumber, A String "(XXX) XXX-XXXX"
	 */
	pretty(): string {
		return("("+this.areaCode()+") "+this.exchangeCode()+"-"+this.lineNumber());	
	}
}

/**
 * Test Cases
 */

// Normal path to test all functions
let goodNumber = new PhoneNumber("2157882111");
document.body.innerHTML = "number(): "+goodNumber.number() +"<br />";
document.body.innerHTML += "areaCode(): "+goodNumber.areaCode() +"<br />";
document.body.innerHTML += "exchangeCode(): "+goodNumber.exchangeCode() +"<br />";
document.body.innerHTML += "lineNumber(): "+goodNumber.lineNumber() +"<br />";
document.body.innerHTML += "pretty(): "+goodNumber.pretty() +"<br />";
document.body.innerHTML += "<br />";

// Trim leading 1 off of number
let leading1 = new PhoneNumber("15203459900");
document.body.innerHTML += "number(): "+leading1.number() +"<br />";
document.body.innerHTML += "pretty() with 1 trimmed: "+leading1.pretty() +"<br />";
document.body.innerHTML += "<br />---------------------<br />";

// Check for digits
try {
	document.body.innerHTML += "Checking for non-digits...<br />";
	let letters = new PhoneNumber("Fred");
} 
catch(e) {
	document.body.innerHTML += e + "<br />";;
}

// Check for < 10
try {
	document.body.innerHTML += "Checking for &lt; 10...<br />";
	let smallNumber = new PhoneNumber("222");
}
catch(e){
	document.body.innerHTML += e + "<br />";
}

// Check for > 11
try{
	document.body.innerHTML += "Checking for &gt; 11...<br />";
	let bigNumber = new PhoneNumber("12345678912345566");
}
catch(e){
	document.body.innerHTML += e + "<br />";
}

// Check for non-1
try{
	document.body.innerHTML += "Checking for non-leading 1...<br />";
	let non1 = new PhoneNumber("92157852796");
}
catch(e){
	document.body.innerHTML += e + "<br />";
}