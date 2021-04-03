// ______________^^^^^^^^^^^^^^VVVVVVVV*************** Chapter No: 17 to 20 ***************VVVVVVVV^^^^^^^^^^^^^^________________________


// ___________Qno1. Declare and initialize an empty multidimensional array.(Array of arrays)___________


// var a = [[], [], [], []];
// document.write(a);

// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________

// _____________Qno2. Declare and initialize a multidimensional array representing the following matrix:_____________



// var a = ["0", "1", "2", "3"];
// var b = ["1", "0", "1", "2"];
// var c = ["2", "1", "0", "1"];
// var join= a.join(" ")
// var join1 = b.join(" ")
// var join2 = c.join(" ")
// document.write(" " + join + "<br> " + " " + join1  + "<br> " + " " + join2);


// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________

// _____________Qno3. Write a program to print numeric counting from 1 to 10_________________



// var i;
// for (i = 1; i<= 10; i++){
//     document.write(i + "<br>")
// }


// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// _______________Qno4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.



// var a = +prompt("Enter a number to show its multiplication table");
// var b = +prompt("Enter length multiplication table");
// document.write("Multiplication table of " + a + "<br>" + "Lenght " + b + "<br>" +"<br>")
// for(i= 1; i <= b; i++){
//     document.write(a + " * " + i  + " = " + a*i + "<br>")
// }



// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________



// ______________Qno5. Write a program to print items of the following array using for loop:fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]________________


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// var join = fruits.join("<br>")
// document.write(join + "<br>");
// document.write("<br>" + "Element of index " + 0 + " is " + fruits[0]
// + "<br>" + "Element of index " + 1 + " is " + fruits[1]
// + "<br>" + "Element of index " + 2 + " is " + fruits[2]
// + "<br>" + "Element of index " + 3 + " is " + fruits[3]
// + "<br>" + "Element of index " + 4 + " is " + fruits[4])



// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// ____________Qno6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k______________________________________________________


// document.write("<b>Counting:</b>" + "<br>")
// for(i = 1; i <= 15; i++){
//     document.write(i + ", ")
// }
//  document.write("<br>" + "<b>Reverse counting:</b>" + "<br>")
// for(i=10; i>0; i--){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<b>Even:</b>" + "<br>")
// for(i = 0; i <= 20; i+=2){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<b>Odd:</b>" + "<br>")
// for(i = 1; i <= 15; i+=2){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<b>Series:</b>" + "<br>")
// for(i = 2; i <= 20; i+=2){
//     document.write(i + "k, ")
// }




// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________



// _____________Qno7. You have an arrayA = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.________________________________



// var a = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ")
// var arrayA = ["cake", "apple pie", "cookie", "chips", "patties"]
// if(a==arrayA[0]){
//     document.write(arrayA[0] + " is <b> Available </b> at index 0 in our Bakery" )
// }
// else if(a==arrayA[1]){
//     document.write(arrayA[1] + " is <b> Available </b> at index 1 in our Bakery" )
// }
// else if(a==arrayA[2]){
//     document.write(arrayA[2] + " is <b> Available </b> at index 2 in our Bakery" )
// }
// else if(a==arrayA[3]){
//     document.write(arrayA[3] + " is <b> Available </b> at index 3 in our Bakery" )
// }
// else if(a==arrayA[4]){
//     document.write(arrayA[4] + " is <b> Available </b> at index 4 in our Bakery" )
// }
// else{
//     document.write("We are Sorry. "+ a + " is <b> Not Available </b> in our Bakery")
// }




// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________




// ________________Qno8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].____________________________________________________________________________________________



// var a= [24, 53, 78, 91, 12]
// document.write("<b> Array items: </b>" + a + "<br>" + "The largest number is: " + "<b>" + a[3] +"</b>" )




// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________



// ________________Qno9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]_____________________________________________________________________________________________



// var b = [24, 53, 78, 91, 12]
// document.write("<b> Array items: </b>" + b + "<br>" + "The smallest number is: " + "<b>" + b[4] +"</b>" )




// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________




// ________________Qno10. Write a program to print multiples of 5 ranging 1 to 100. 

// var a = 5;
// for(i = 1 ; i <= 20; i++ ){
//     document.write(a*i + ", ")
// }



// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________\\
// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________\\





// ______________^^^^^^^^^^^^^^VVVVVVVV*************** Chapter No: 21 to 25 ***************VVVVVVVV^^^^^^^^^^^^^^________________________



// __________________Qno1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name._________________________________________________________________________________


// var firstName= prompt("Enter your first name")
// var lastName= prompt("Enter your last name")
// var fullName= firstName +" "+ lastName;
// document.write(fullName)


// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser____________



// var favouriteMobileName = prompt("Enter your favorite mobile phone model ")
// var n = favouriteMobileName.length;
// document.write("My favorite Mobile phone is: " + favouriteMobileName + "<br>" + "Lenght of String: " + n)


// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser ._______________




// var nationality= "pakistani"
// var a= nationality.indexOf("n")
// document.write("String: " + nationality + "<br>" + " index of 'n': " + a)


// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________



// __________________Qno4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.____________________



// var xyz= "Hello World"
// var a= xyz.lastIndexOf("l")
// document.write("String: " + xyz + "<br>" + "Last index of 'l': " + a)




// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________



// __________________Qno5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser._____________________





// var nationality= "pakistani"
// var a= nationality.charAt("3")
// document.write("String: " + nationality + "<br>" + "Character at index of 3: " + a)



// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno6. Repeat Q1 using string concat() method.



// var firstName= prompt("Enter your first name")
// var lastName= prompt("Enter your last name")
// var fullName= firstName.concat(" ",lastName);
// document.write(fullName)



// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________





// __________________Qno7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.________________________



// var city = "Hyderabad"; 
// var indexnum = city.indexOf("Hyder"); 
// var firsttext = city.slice(0,indexnum); 
// var replacingtext ="Islam"; 
// var thirdtext = city.slice(indexnum+5);
// document.write("City: " + city + "<br>" + "After replacement: " + firsttext + replacingtext + thirdtext);




// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;__________________________________________________





// var message = "Ali and Sami are best friends. They play cricket and football together."
// var newMessage = message.replace(/and/g,"&")
// document.write("Before change: " + message + "<br>" + "<br>" + "After change: " + newMessage)




// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________

// __________________Qno9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser._____________________________



// var a = "472";
// var b = 472;
// document.write("Value: " + a + "<br>" + "type: " + typeof a + "<br>" + "Value: " + b + "<br>" + "type: " + typeof b)



// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________



// __________________Qno10. Write a program that takes user input. Convert and show the input in capital letters.__________________________________________________





// var a = prompt("Enter your values")
// b = a.toLocaleUpperCase()
// document.write("User input: " + a + "<br>" + "Upper case: " + b)


// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno11. Write a program that takes user input. Convert and show the input in title case.__________________________________________________


// var a = "javascript";
// var firstChar = a.slice(0,1);
// var firstChar = firstChar.toUpperCase();
// var secChar = a.slice(1);
// var secChar = secChar.toLowerCase();
// document.write("User input: " + a + "<br>" + "Title case: " + firstChar +secChar)





// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser._____________________________________________________________________________________________________



// var num = 35.36;
// var numString = "35.36";
// numString = numString.replace("." , "")
// document.write("Number: " + num + "<br>" + "Result: " + numString)





// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64_______________________________________________________________________________________________________________________________________



// var userInput = prompt("Enter Username"); 
// var ascii = userInput.charCodeAt(userInput); 
// if (ascii == 33 || ascii == 44 || ascii == 46 || ascii == 64){ 
// alert("Please enter a valid username"); 
// } 
// document.write(ascii);





// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:___________________



// var a = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ")
// var arrayA = ["cake", "apple pie", "cookie", "chips", "patties"]
// var a= a.toLowerCase();
// if(a==arrayA[0]){
//     document.write(arrayA[0] + " is <b> Available </b> at index 0 in our Bakery" )
// }
// else if(a==arrayA[1]){
//     document.write(arrayA[1] + " is <b> Available </b> at index 1 in our Bakery" )
// }
// else if(a==arrayA[2]){
//     document.write(arrayA[2] + " is <b> Available </b> at index 2 in our Bakery" )
// }
// else if(a==arrayA[3]){
//     document.write(arrayA[3] + " is <b> Available </b> at index 3 in our Bakery" )
// }
// else if(a==arrayA[4]){
//     document.write(arrayA[4] + " is <b> Available </b> at index 4 in our Bakery" )
// }
// else{
//     document.write("We are Sorry. "+ a + " is <b> Not Available </b> in our Bakery")
// }






// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document._________________________________________________________________________________








// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.__________________________________________________________________________________________________________________________







// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno17. Write a program to display the last character of a user input.__________________________________________________________________________________









// ______________________________________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^__________________________________________


// __________________Qno18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string._____