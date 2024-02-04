// --------------------- Free Drinks ---------------

const burgerPrice = 800 ;
const cokePrice = 30 ;
if(burgerPrice > 500){
    console.log("You will get free coke");
}
else{
    console.log(burgerPrice + cokePrice);
}


// --------------------- BMI Calculator ---------------

const BMI = 28;
if(BMI < 18.5){
    console.log("You are overweight")
}
else if( BMI >= 18.5 && BMI <= 24.9){
    console.log("You are normal")
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log("You are overweight")
}
else{
    console.log("You are obese")
}


// --------------------- Grade Calculator ---------------

const marks = 55;
if(marks >= 90){
    console.log("A");
}
else if(marks >= 80){
    console.log("B");
}
else if(marks >= 70){
    console.log("C");
}
else if(marks >= 60){
    console.log("D");
}
else{
    console.log("F");
}


// --------------------- Nested Friends -----------

const myScore = 89;
const fndScore = 89;

if (myScore >= 80){
    if(fndScore >= 80){
        console.log("Go for a lunch")
    }
    else if ( fndScore >= 60){
        console.log("Good luck")
    }
    else if ( fndScore >= 40){
        console.log("Msg unseen")
    }
    else if ( fndScore < 40){
        console.log("Block")
    }

}
else{
    console.log("Go to home and sleep");
}


// -------------- ternary ----------------

const num1 = 30;
const num2 = 50;
var result = 0 ;

if(num1 > num2){
    result = num1 * 2 ;
    console.log(result);
}
else{
    result = num1 + num2 ;
    console.log(result);
}


num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2)


// --------------------- Bus Fare Calculator ---------------

const age = 55;
const student = true;


if(age < 10 ){
    console.log("free");
}
else if (age == student ){
    console.log("get 50% discount");
}
else if (age >= 60){
    console.log("get 15% discount");
}
else{ 
    console.log("Regular ticket fare 800 tk")
}