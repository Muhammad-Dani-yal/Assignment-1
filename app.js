// Answer 1

// var subject1 = prompt("Enter Marks For Subject 1:");
// var subject2 = prompt("Enter Marks For Subject 2:");

// subject1 = Number(subject1);
// subject2 = Number(subject2);

// if (isNaN(subject1) || isNaN(subject2)) {
//     alert("Only Numbers Acceptable!");
// }
// else if (subject1 < 0 || subject1 > 100 || subject2 < 0 || subject2 > 100) {
//     alert("Marks Must Be Between 0 To 100!");
// }
// else {

//     if (subject1 < 40 && subject2 < 40) {
//         alert("Your Result Is Fail - Keep Trying");
//     }

//     else if (subject1 < 40 || subject2 < 40) {
//         alert("Fail (One Subject Is Below 40)");
//     }

//     else {
//         var average = (subject1 + subject2) / 2;
//         var grade;

//         if (average >= 75) {
//             grade = "Excellent (GRADE A)";
//         }
//         else if (average >= 60) {
//             grade = "Good (GRADE B)";
//         }
//         else if (average >= 50) {
//             grade = "Passed (GRADE C)";
//         }
//         else {
//             grade = "Passed (GRADE D)";
//         }

//         alert("Average: " + average + "\nGrade: " + grade);

//         if (subject1 > 85 && subject2 > 85) {
//             alert("Outstanding Performance GRADE A+");
//         }
//     }
// }

// Answer 2

// var userName = "admin";
// var passWord = "1234";

// var username = prompt("Enter Username:");

// if (username !== userName) {
//     alert("Access Denied");
// }
// else {
//     var attempts = 0;

//     while (attempts < 3) {
//         var password = prompt("Enter Password:");

//         if (password === passWord) {

//             if (attempts === 0) {
//                 alert("Login Successful");
//             }
//             else {
//                 alert("Login Successful");
//             }

//             break;
//         }
//         else {
//             attempts++;

//             if (attempts > 2) {
//                 alert("Too many attempts");
//             }
//             else {
//                 alert("Incorrect Password");
//             }
//         }
//     }
// }

// Answer 3

// alert(
//     "Available Products:\n" +
//     "1. laptop = 60000\n" +
//     "2. mobile = 30000\n" +
//     "3. headphones = 2000\n" +
//     "4. keyboard = 1500\n" +
//     "5. mouse = 800\n" +
//     "6. tablet = 45000\n" +
//     "7. charger = 1200"
// );

// var productName = prompt("Enter Product Name (small letters):");

// var price;

// if (productName === "laptop") {
//     price = 60000;
// }
// else if (productName === "mobile") {
//     price = 30000;
// }
// else if (productName === "headphones") {
//     price = 2000;
// }
// else if (productName === "keyboard") {
//     price = 1500;
// }
// else if (productName === "mouse") {
//     price = 800;
// }
// else if (productName === "tablet") {
//     price = 45000;
// }
// else if (productName === "charger") {
//     price = 1200;
// }
// else {
//     alert("Product not available");
// }

// if (price) {

//     var total = price;
//     var discount = 0;

//     if (price > 4000) {
//         alert("Premium Product Selected");
//     }

//     if (total > 5000) {
//         discount = total * 0.15;
//     }
//     else if (total > 3000) {
//         discount = total * 0.10;
//     }

//     var finalBill = total - discount;

//     alert(
//         "Product: " + productName +
//         "\nPrice: " + total +
//         "\nDiscount: " + discount +
//         "\nFinal Bill: " + finalBill
//     );
// }

// Answer 4

// var hours = prompt("How Many Hours You Worked:");

// hours = Number(hours);

// if (isNaN(hours)) {
//     alert("Only Numbers Acceptable!");
// }
// else if (hours < 0 || hours > 24) {
//     alert("Please Select From 0 To 24!");
// }
// else {

//     if (hours >= 8) {
//         alert("Worked Full Day");
//     }
//     else if (hours >= 4) {
//         alert("Partially Present");
//     }
//     else {
//         alert("Your Work Will Be Marked Absent");
//     }

//     if (hours > 10) {
//         alert("Overtime Detected");
//     }
// }

// Answer 5

// var password;

// while (true) {
//     password = prompt("Enter your password:");
//     if (password.length < 6) {
//         alert("Weak Password (Minimum 6 characters required)");
//         continue;
//     }
//     if (password.indexOf("123") !== -1) {
//         alert("Avoid common patterns (123). Enter a new password.");
//         continue;
//     }
//     var hasLetter = false;
//     var hasNumber = false;
//     for (var i = 0; i < password.length; i++) {
//         var ch = password[i];
//         if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
//             hasLetter = true;
//         }
//         else if (ch >= "0" && ch <= "9") {
//             hasNumber = true;
//         }
//     }
//     var strength;
//     if (hasLetter && hasNumber) {
//         strength = "Strong Password";
//     }
//     else {
//         strength = "Medium Password";
//     }
//     alert("Password Accepted\nStrength: " + strength);
//     break;
// }

// Answer 6

// var myBalance = 50000;
// var userAmount = prompt("Enter your deposit amount:");
// userAmount = Number(userAmount);
// if (isNaN(userAmount)) {
//     alert("Please enter numbers only!");
// }
// else if (userAmount <= 0) {
//     alert("Amount should be greater than 0!");
// }
// else {
//     myBalance = myBalance + userAmount;
//     if (userAmount > 20000) {
//         alert("Large Deposit Detected");
//     }

//     if (myBalance > 100000) {
//         alert("High Account Balance");
//     }
//     alert("Your new balance is: " + myBalance);
// }

// Answer 7

// var totalDays = 30;
// var presentDays = prompt("Enter number of days you were present:");
// presentDays = Number(presentDays);
// if (isNaN(presentDays)) {
//     alert("Please enter numbers only!");
// }
// else if (presentDays < 0 || presentDays > totalDays) {
//     alert("Invalid input! Days must be between 0 and 30.");
// }
// else {
//     var percentage = (presentDays / totalDays) * 100;
//     var status;
//     if (percentage >= 75) {
//         status = "Eligible";
//     }
//     else if (percentage >= 50) {
//         status = "Warning";
//     }
//     else {
//         status = "Not Eligible";
//     }
//     alert("Attendance: " + percentage + "%" +
//         "\nStatus: " + status);
//     if (presentDays === 30) {
//         alert("Perfect Attendance");
//     }
// }

// Answer 8

// var brands = ["samsung", "apple", "xiaomi", "oppo", "infinix"];
// var prices = [45000, 120000, 30000, 25000, 18000];
// alert("Available Brands:\n" + brands.join(", "));
// var userBrand = prompt("Enter mobile brand (small letters):");
// var index = brands.indexOf(userBrand);
// if (index === -1) {
//     alert("Brand not available");
// }
// else {
//     var price = prices[index];
//     alert("Price: " + price);
//     if (price > 50000) {
//         alert("High-End Device");
//     }
//     else if (price >= 20000 && price <= 50000) {
//         alert("Mid-Range Device");
//     }
//     else {
//         alert("Budget Device");
//     }
//     if (index === 0) {
//         alert("Top Selling Brand");
//     }
// }

// Answer 9

// var score = 0;
// var questions = [
//     "Q1: Which keyword is used to declare a variable in ES5?",
//     "Q2: Which function is used to show a message in popup?",
//     "Q3: What is the result of 2 + '2' in JavaScript?"
// ];
// var answers = ["var", "alert", "22"];
// for (var i = 0; i < 3; i++) {
//     var userAnswer = prompt(questions[i]);
//     userAnswer = userAnswer.toLowerCase();
//     if (userAnswer === answers[i]) {
//         score = score + 1;
//     }
// }
// if (score === 3) {
//     alert("Excellent Performance");
//     alert("Perfect Score");
// }
// else if (score === 2) {
//     alert("Good Job");
// }
// else if (score === 1) {
//     alert("Needs Improvement");
// }
// else {
//     alert("Try Again");
// }

// Answer 10

// var item1 = prompt("Enter price of item 1:");
// var item2 = prompt("Enter price of item 2:");
// var item3 = prompt("Enter price of item 3:");
// item1 = Number(item1);
// item2 = Number(item2);
// item3 = Number(item3);
// if (isNaN(item1) || isNaN(item2) || isNaN(item3)) {
//     alert("Please enter numbers only!");
// }
// else if (item1 <= 0 || item2 <= 0 || item3 <= 0) {
//     alert("Prices must be greater than 0!");
// }
// else {
//     var total = item1 + item2 + item3;
//     var discount = 0;
//     if (item1 > 2000 || item2 > 2000 || item3 > 2000) {
//         alert("Expensive Item Included");
//     }
//     if (total > 5000) {
//         discount = total * 0.15;
//     }
//     else if (total > 3000) {
//         discount = total * 0.10;
//     }
//     var finalBill = total - discount;
//     alert(
//         "========== RECEIPT ==========\n" +
//         "Item 1: " + item1 + "\n" +
//         "Item 2: " + item2 + "\n" +
//         "Item 3: " + item3 + "\n" +
//         "-----------------------------\n" +
//         "Total: " + total + "\n" +
//         "Discount: " + discount + "\n" +
//         "Final Bill: " + finalBill + "\n" +
//         "============================="
//     );
// }