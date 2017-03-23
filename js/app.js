var name = prompt("Enter Your Name Please !");
alert("Hi, " + name);


var tblNo = prompt("Enter Table No : ", 5);
if (tblNo) {

  alert("multiplication of Table " + tblNo + "\n\n" +
    tblNo + " * 1 = " + tblNo * 1 + "\n" +
    tblNo + " * 2 = " + tblNo * 2 + "\n" +
    tblNo + " * 3 = " + tblNo * 3 + "\n" +
    tblNo + " * 4 = " + tblNo * 4 + "\n" +
    tblNo + " * 5 = " + tblNo * 5 + "\n" +
    tblNo + " * 6 = " + tblNo * 6 + "\n" +
    tblNo + " * 7 = " + tblNo * 7 + "\n" +
    tblNo + " * 8 = " + tblNo * 8 + "\n" +
    tblNo + " * 9 = " + tblNo * 9 + "\n" +
    tblNo + " * 10 = " + tblNo * 10);

}

var cityName = prompt("Enter City Name : ");
if (cityName === "karachi" || cityName === "KARACHI" || cityName === "Karachi") {
  alert("Welcome to city of lights");
}

var gender = prompt("enter your gender:");
if (gender === "male" || gender === "Male" || gender === "MALE") {
  alert("Good Morning Sir");
}
else if (gender === "female" || gender === "Female" || gender === "FEMALE") {
  alert("Good Morning Ma'am");
}
else {
  alert("invalid gender");
}

var color = prompt("Enter Color of Traffic Signal");
if (color === "red") {
  alert("Vehicles Must Stop");
}
else if (color === "yellow") {
  alert("Vehicles Should Get Ready to Move");
}
else if (color === "green") {
  alert("Vehicles Can Move Now");
}
else {
  alert("Color Not Found");
}

var maxAge = prompt("Enter Maximum Age");
var currAge = prompt("Enter Current Age");
if (currAge <= maxAge) {
  alert("You are welcome");
}

var currFuel = prompt("Enter Remaining Fuel In Litres");
if (currFuel < 0.25) {
  alert("Please refill the fuel in your car");
}

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); //true
}
alert("given condition is true because  \n a=4 \n ++a meanz a = 5 and \n  5 === 5 ");
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
alert("given condition is false because  \n b=82 \n b++ meanz b = 82 and \n  82 === 83 ");
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
alert("given condition 1 is false because  \n c=12 \n c++ meanz c = 12 and \n  12 === 13 ");
if (c === 13) {
  alert("condition 2 is true");  // true
}
alert("given condition 2 is true because  \n c=13 \n and \n  13 === 13 ");
if (++c < 14) {
  alert("condition 3 is true");
}
alert("given condition 3 is false because  \n c=13 \n ++c meanz c = 14 and \n  14 < 14 ");
if (c === 14) {
  alert("condition 4 is true"); //true
}
alert("given condition 4 is true because  \n c=14 \n  and \n  14 === 14 ");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals \n condition is true because \n totalCost = materialCost+laborCost and \n totalCost === materialCost+laborCost"); //true
}

if (true) {
  alert("True \n because in if condition is true"); //true

}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat \n because its just check the values not a String \n and in string its check the sequence of the alphabet or ASCII code  \n e.g. car < cat \n in both ca are same but in sequence t in 20 and r is in 18 so condition is true "); // true
}


var firstSub = +prompt("Enter Your 1st Subject Marks");
var secondSub = +prompt("Enter Your 2nd Subject Marks");
var thirdSub = +prompt("Enter Your 3rd Subject Marks");
var total = +prompt("Enter Your Total Marks");
var obtained = firstSub + secondSub + thirdSub;
var percentage = (obtained / total) * 100;
percentage = percentage.toFixed(2);
if (percentage >= 80) {
  alert("Marks Sheet \n\nTotal marks : " + total + "\nMarks obtained : " + obtained + "\nPercentage : " + percentage + "% \nGrade : A-One\nRemarks : Excellent");
}
else if (percentage >= 70) {
  alert("Marks Sheet \n\nTotal marks : " + total + "\nMarks obtained : " + obtained + "\nPercentage : " + percentage + "% \nGrade : A\nRemarks : Good");
}
else if (percentage >= 60) {
  alert("Marks Sheet \n\nTotal marks : " + total + "\nMarks obtained : " + obtained + "\nPercentage : " + percentage + "% \nGrade : B\nRemarks : You need to improve");
}
else if (percentage < 60) {
  alert("Marks Sheet \n\nTotal marks : " + total + "\nMarks obtained : " + obtained + "\nPercentage : " + percentage + "% \nGrade : Fail\nRemarks : Sorry");
}


var nameItem1 = prompt("Enter Item1 Name : ");
var priceItem1 = +prompt("Enter Item1 Price : ");
var quntityItem1 = prompt("Enter Quantity of Item1 : ");
var nameItem2 = prompt("Enter Item2 Name : ");
var priceItem2 = +prompt("Enter Item2 Price : ");
var quntityItem2 = prompt("Enter Quantity of Item2 : ");
var shipCharges = +prompt("Enter Shipping Charges");
var totlCost = (priceItem1 * quntityItem1) + (priceItem2 * quntityItem2) + shipCharges;
if (totlCost > 2000) {
  var discount = totlCost - (totlCost * 0.10);
  alert("Shopping Cart \n\nPrice of " + nameItem1 + " is " + priceItem1 + "\nQuantity of " + nameItem1 + " is " + quntityItem1 + "\nPrice of " + nameItem2 + " is " + priceItem2 + "\nQuantity of " + nameItem2 + " is " + quntityItem2 + "\n\nShipping Charges " + shipCharges + "\n\nTotal cost of your order is " + totlCost + "PKR \nDiscounted Price is " + discount + "PKR");
}
else {
  alert("Shopping Cart \n\nPrice of " + nameItem1 + " is " + priceItem1 + "\nQuantity of " + nameItem1 + " is " + quntityItem1 + "\nPrice of " + nameItem2 + " is " + priceItem2 + "\nQuantity of " + nameItem2 + " is " + quntityItem2 + "\n\nShipping Charges " + shipCharges + "\n\nTotal cost of your order is " + totlCost + "PKR ");
}

var no = 7;
var sNo = prompt("Guess any No from 1 to 10");
if (no == sNo) {
    alert("Bingo! Correct answer");
}
else if (sNo == no-1 || sNo == no+1) {
    alert("Close enough to the correct answer");
}

var gNo = prompt("Enter No to Check No is Division by 3 or Not");
if (gNo % 3 == 0) {
    alert("The no is divisible by 3");
}

var nameTeam1 = prompt("Enter Team1 Name");
var scoreTeam1 = prompt("Enter Team1 Score");
var nameTeam2 = prompt("Enter Team2 Name");
var scoreTeam2 = prompt("Enter Team2 Score");
if (scoreTeam1 === scoreTeam2) {
    alert("Match is tie");
}
else if (scoreTeam1 > scoreTeam2) {
    alert(nameTeam1+" have won the game");
}
else {
    alert(nameTeam2+" have won the game");
}

var value1 = "salman";
var value2 = 36;
var value3 = true;
if (typeof(value1) == "string") {
    alert(value1 + " is a String");
}
if (typeof(value2) == "number") {
alert(value2 + " is a Number");
}
if (typeof(value3) == "boolean") {
alert(value3 + " is a Boolean");
}

var inNum = prompt("Enter any Number :");
if (inNum%2 == 0) {
    alert("Even No");
}
else {
    alert("Odd No");
}

var temp = prompt("Enter Temperature in Celsius");
if(temp > 40) {
    alert("It is too hot outside.");
}
else if(temp > 30) {
    alert("The Weather today is Normal.");
}
else if(temp > 20) {
    alert("Today’s Weather is cool.");
}
else if(temp >10) {
    alert("OMG! Today’s weather is so Cool.");
}

var num1 = +prompt("Enter 1st Number");
var num2 = +prompt("Enter 2nd Number");
var operator = prompt("Enter operator (+,-,*,/ and %)");
if (operator === "+") {
    alert(num1+operator+num2+" is "+(num1+num2));
}
if (operator === "-") {
    alert(num1+operator+num2+" is "+(num1-num2));
}
if (operator === "*") {
    alert(num1+operator+num2+" is "+(num1*num2));
}
if (operator === "/") {
    alert(num1+operator+num2+" is "+(num1/num2));
}
if (operator === "%") {
    alert(num1+operator+num2+" is "+(num1%num2));
}

var dayName = prompt("Enter day name ....");
dayName = dayName.toLowerCase();
if(dayName === "sunday") {
    alert("Yay! It’s a holiday.");
}
else if (dayName === "saturday") {
    alert("It’s weekend.");
}
else if (dayName === "monday" || dayName === "tuesday" || dayName === "wednesday" || dayName === "thursday" || dayName === "friday") {
    alert("It’s a week day.")
}

var userScore = prompt("Enter your Score");
if (userScore > 50) {
    alert("You are Passed");
}
else {
    alert("Try again!");
}

var no1 = prompt("Enter First Number");
var no2 = prompt("Enter Second Number");
if (no1 > no2) {
    alert("The greater number of "+no1+" and "+no2+" is "+no1);
}
else if (no1 == no2) {
    alert(no1+" and "+no2+" are equal");
}
else {
    alert("The greater number of "+no1+" and "+no2+" is "+no2);
}

var trans = prompt("Enter language code To See the \"Hello World\" (e.g.\"sp\",\"en\",\"fr\") ");
if (trans === "en") {
    alert("Hello, World");
}
else if (trans === "sp") {
    alert("Hola, Mundo");
}
else if (trans === "fr") {
    alert("Bonjour le monde");
}

var inputNum = +prompt("Enter any no to check it is positive or negative");
if (inputNum > 0) {
    alert("Positive Number");
}
else if (inputNum == 0) {
    alert("0 is not positive and nor negative number");
}
else {
    alert("Negative Number");
}

var quant = prompt("Enter a number");
var noun = prompt("Enter a noun ");
if (quant == 1 && quant != 0) {
    alert(quant+" "+noun);
}
else {
    alert(quant+" "+noun+"s");
}

