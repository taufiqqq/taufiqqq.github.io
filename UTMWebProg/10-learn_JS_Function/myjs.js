/* 

var age = parseInt(window.prompt("Enter your age")); //User input

if (age > 18) {
    document.write("<b>Qualified for driving </b>");
    var answer = confirm("Want to take license?"); //yes and no input
    if (answer) {
        alert("Bye bye!");
        window.location = "https://www.jpj.gov.my/"; //send to another url
    }
    else { alert("Thanks for sticking around!") };
}
else {
    document.write("<b>Does Not Qualified for driving </b>");
    alert("DO NOT TAKE LICENSE YET"); //windows alert
}

//         Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log(). 

switch (age) {
    case 21:
        document.write("<p>You are same age as najwe</p>");
        break;
    case 20:
        document.write("<p>You are same age as me</p>");
        break;
    default:
        document.write("<p>You are not the same age as me</p>");
        break;
}

for (i = 0; i <= 5; i++) {
    document.write("The number is " + i);
    document.write("<br />");
}

i = 0;
while (i < age) {
    document.write("<p>Hai Taufiq</p>");
    i++; //print hai taufiq sebanyak age kau
} */

var age = parseInt(window.prompt("Enter your age")); //User input

//IF ELSE
if (age > 18) {
    document.write("<b>Qualified for driving </b>");
}
else {
    document.write("<b>Does Not Qualified for driving </b>");
}

//SWITCH STATEMENT
switch (age) {
    case 21:
        document.write("<p>You are same age as najwe</p>");
        break;
    case 20:
        document.write("<p>You are same age as me</p>");
        break;
    default:
        document.write("<p>You are not the same age as me</p>");
        break;
}

//FOR LOOP
for (i = 0; i <= 5; i++) {
    document.write("The number is " + i);
    document.write("<br />");
}

//WHILE LOOP
i = 0
while (i < 5) {
    document.write("<p>Hai Dr</p>");
    i++; //print hai taufiq sebanyak age kau
}

//FUNCTIONS
function calculateTheDiscount() {
    var itemPrice = 120.55;
    var discountRate = 0.2;
    var discountAmount = itemPrice * discountRate;
    var netPrice = itemPrice - discountAmount;
    var sentence1 = "Item Price : $" + itemPrice + "<br>";
    var sentence2 = "Discount: $" + discountAmount + "<br>";
    var sentence3 = "Net Price: $" + netPrice + "<br>";

    document.write(sentence1);
    document.write(sentence2);
    document.write(sentence3);
}

//FUNCTION RETURNS
function rectangleArea(length, height) {
    var area;
    area = length * height * 3.14159;
    return area;
}

function displayArea() {
    var l, h, rectArea;
    l = 52.05;
    h = 46.55;
    rectArea = rectangleArea(l, h);
    document.write("<br/>The area of the rectangle is " + rectArea);
}
