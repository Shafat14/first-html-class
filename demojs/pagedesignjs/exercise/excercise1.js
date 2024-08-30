console.log("This is ex1.js")
 
var first_name = "shafaht";
var last_name = "khan";
var year_of_birth = 2003;
var current_year = 2024;
var age= current_year - year_of_birth;
document.getElementById("student_message").innerHTML = "Hi, my name is "+first_name +" "+last_name+", I'm "+ age +" years old and I'm learning Javascript." ;
var num1= 101;
var num2=7;
var average = num1 / num2 ;
document.getElementById("two_numbers").innerHTML = average.toFixed(2);


function isValidPhoneNumber(phoneNumber) {
   
    var phoneStr = phoneNumber.toString();
    
    
    return phoneStr.length === 9 && /^\d{9}$/.test(phoneStr);
}


var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

console.log(`Phone number ${phone1} is valid: ${isValidPhoneNumber(phone1)}`);
console.log(`Phone number ${phone2} is valid: ${isValidPhoneNumber(phone2)}`);
console.log(`Phone number ${phone3} is valid: ${isValidPhoneNumber(phone3)}`);


var power = Math.pow(32,6);
console.log(Math.pow(32, 6));



var variables = {
    NAME: "Valid",
    $num1: "Valid",
    typeof: "Invalid",     
    "first-name": "Invalid", 
    attempt_2: "Valid",
    "2ndAttempt": "Invalid", 
    "full name": "Invalid"   
};


function checkVariableNames(vars) {
    for (var key in vars) {
        console.log("Variable '" + key + "' is " + vars[key]);
    }
}


checkVariableNames(variables);



var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    console.log(quantity += quantity); 
    console.log( (7+5) / number + 2 ); 
    console.log(pressure); 
    console.log(temperature); 
    console.log(typeof pressure); 
    console.log(typeof temperature);


var url1 = "www.udemy.com";
var url2 = "https://www.google.com";


var transformedUrl1 = url1.startsWith("https://") ? url1 : "https://" + url1;


var transformedUrl2 = url2.startsWith("https://") ? url2.substring(8) : url2;


console.log("Transformed URL 1:", transformedUrl1);
console.log("Transformed URL 2:", transformedUrl2); 
