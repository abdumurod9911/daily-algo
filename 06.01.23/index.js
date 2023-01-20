// 06.01.2023
// 1.Return the Sum of Two Numbers
function addition(a, b) {
	return a + b;
}

// 2.Return the Next Number from the Integer Passed
function addition(num) {
	return num + 1;
}

// 3.Convert Age to Days
function calcAge(age) {
	return age * 365;
}

// 4.Power Calculator
function circuitPower(voltage, current) {
	return voltage * current;
}

// 5.Maximum Edge of a Triangle
function nextEdge(side1, side2) {
	return (side1 + side2)-1;
}

// 6.Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
	return length *2 + width * 2;
}

// 07.01.2023
// 7.Convert Minutes into Seconds
function convert(minutes) {
	return minutes * 60;
}

// 8.Area of a Triangle
function triArea(base, height) {
	return (base * height) / 2;
}

// 9.Return the First Element in an Array
function getFirstValue(arr) {
	return arr[0];
}

// 10.Convert Hours into Seconds
function howManySeconds(hours) {
	return hours * 3600;
	}

// 11.Return the Remainder from Two Numbers
function remainder(x, y) {
	return x % y;
}
//12.Return Something to Me!
function giveMeSomething(a) {
	return `something ${a}`; 
}

// 08.01.2023
// 13.Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
	if(num <= 0){
		return true;
	}else{
		return false;
	}
}
// 14.Basketball Points
function points(twoPointers, threePointers) {
	return (twoPointers * 2)+(threePointers * 3);
}

// 15.Less Than 100?
function lessThan100(a, b) {
	if(a + b < 100){
		return true;
	}else {
		return false;
	}
}
// 16.Using the "&&" Operator
function and(a, b) {
	if(a && b == true){
		return true
	}else {
		return false
	}
}

// 17.Football Points
function footballPoints(wins, draws, losses) {
	return(wins * 3) + (draws * 1) + (losses * 0 );
}
// 18.Fix the Expression
function isSeven(x) {
	return x=== 7;
}


// 09.01.2023
// 19.Sum of Polygon Angles
function sumPolygon(n) {
	if(n>2)
		return (n-2)*180;
}
//20.Basic Variable Assignment
function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}


// 10.01.2023
// 21.The Farm Problem
function animals(chickens, cows, pigs) {
	return (chickens * 2 ) + (cows * 4) + (pigs * 4);
}
// 22.Are the Numbers Equal?
function isSameNum(num1, num2) {
	if(num1 === num2){
		return true; 
	}else {
		return false;
	}
}



// 12.01.2023
// 23.Convert Hours and Minutes into Seconds
function convert(hours, minutes) {
	return (hours * 3600)+(minutes * 60);  
}
// 24.Equality Check
function checkEquality(a, b) {
	if(a === b){
		  return true;
	  }else {
	  return false;	
	  }
  }




// 13.01.2023
// 25.Sum of Polygon Angles -----------Ko'pburchak burchaklar yig'indisi
function sumPolygon(n) {
	if (n>2);
		return (n-2)*180;
	}
// 26.Basic Variable Assignment
function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}



// 14.01.2023
// 27.The Farm Problem ------ Fermer xo'jaligi muammosi
function animals(chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
}
// 28.Are the Numbers Equal?
function isSameNum(num1, num2) {
	if(num1 === num2){
		return true
	}else {
		return false
	}
}



// 15.01.23
// 29.Convert Hours and Minutes into Seconds

function convert(hours, minutes) {
	return  hours * 3600 + minutes * 60;
}

// 30.Equality Check
function checkEquality(a, b) {
	if (a === b){
		  return	true;
	  } else {
		  return false;
	  }
  }

//   16.01.2023
// 31.Profitable Gamble
function profitableGamble(prob, prize, pay) {
	if (prob*prize>pay) {
			return true;
		}else{
			return false;
		}
	}

// 32.Boolean to String Conversion
function boolToString(flag) {
	return flag.toString();
}

// 33.Using Arrow Functions
// create your arrow function below
arrowFunc = (number) => {
	return number;
}


// 34.Frames Per Second
function frames(minutes, fps) {
	return (minutes * 60) * fps
}

// 17.01.2023
// 35.Miserable Parody of a Calculator
function calculator(str) {
return eval(str);
}

// 36.Two Makes Ten
function makesTen(a, b) {
if(a==10 || b==10 || (a+b)==10){
	return true
}else{
	return false;
}
}

// 37.Let's Fuel Up!
function calculateFuel(n) {
	if(n*10 >100 ){
		return n*10;
	}else{
		return 100;
	}
}

// 38.Buggy Code (Part 2)
function maxNum(n1,n2) {
	if (n1>n2){
	  return n1;
	}else{
	return n2;
  }
}

// 18.01.2023
// 39.Pair Management
function makePair(num1, num2) {
	return [num1, num2]
}

// 40.Compare Strings by Count of Characters
function comp(str1, str2) {
	return str1.length == str2.length;
}

// 41.Is the String Empty?
function isEmpty(s) {
	if(s.length === 0){
		return true
	}else{
		return false
	}
}

// 42.Check if an Integer is Divisible By Five
function divisibleByFive(n) {
	if( n % 5 === 0 ){
		return true
	}else{
		return false
	}
}

// 19.01.2023
// 43.Multiple of 100
function divisible(num) {
	if(num % 100 === 0){
		return true
	}else{
		return false
	}
}

// 44.Recursion: Length of a String
function length(str) {
	return str.length
}

// 45.Divides Evenly
function dividesEvenly(a, b) {
	return	Number.isInteger(a/b)
	}

// 46.Return a String as an Integer

function stringInt(str) {
	return Number(str);
}

// 20.01.2023
// 47.Area of a Rectangle
function area(h, w) {
	if(h && w>0){
		return h*w
	}else{
		return -1;
	}
}

// 48.Concatenate First and Last Name into One String
function concatName(firstName, lastName) {
	return lastName.concat(', ', firstName)
}

// 49.Evaluate an Equation
function eq(evaluate) {
	return eval(evaluate)
}

// 50.Solve the Equation

function equation(s) {
	return eval(s);
}