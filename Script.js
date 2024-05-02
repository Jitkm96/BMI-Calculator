
function weightHeight() {
    let x = document.forms["myForm"]["kg"].value;
    let y = document.forms["myForm"]["m"].value;
    
    var BMI = Math.round(x / (y * y));
 
    // if (BMI == NaN) {
    //     result.innerHTML = ("Please enter your weught and height!" );
    //     let myImage = document.getElementById("myImage");
    //     myImage.setAttribute("src", "./Assect/neutral.png");
    // }

    if (BMI < 18.5 && BMI > 0) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are underweight!" );
        document.getElementById("result").style.color = "red";
        let myImage = document.getElementById("myImage");
        myImage.setAttribute("src", "./Assect/neutral.png");
    }

    else if (BMI <= 24.9 && BMI >= 18.5) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are in great shape." );
        let myImage = document.getElementById("myImage");
        myImage.setAttribute("src", "./Assect/happy.png");
    }

    else if (BMI >= 25 && BMI <= 29.9) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are over-weight!" );
        let myImage = document.getElementById("myImage");
        myImage.setAttribute("src", "./Assect/neutral.png");
    }

    else if (BMI >= 30 && BMI <= 34.9) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are obese!!" );
        let myImage = document.getElementById("myImage");
        myImage.setAttribute("src", "./Assect/sad-face.png");
    }

    else if (BMI < 35 && BMI > 0) {
        result.innerHTML = ("Your BMI is " + BMI + ". You are EXTEREMELY OBESE!!!" );
        let myImage = document.getElementById("myImage");
        myImage.setAttribute("src", "./Assect/sad-face.png");
    }
    else {
        result.innerHTML = ("Please enter your weight and height" );
    }
}


