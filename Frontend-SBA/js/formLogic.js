const submit = document.getElementById("login");

const validatePassword = () =>{
    //Define variables
    const password = document.getElementById('password').value;
    let error = document.getElementById("errorPassword");
    const regCheck1 = new RegExp("[a-zA-Z]+");
    const regCheck2 = new RegExp("[0-9]+");
    
    //local debug
    console.log(password);
    console.log(password.length);
    
    //checking the length of the password
    if(password.length >= 8 && password.length <= 20){
        console.log("inside if");
        let resultCheck1 = regCheck1.test(password);
        let resultCheck2 = regCheck2.test(password);

        //local debug
        console.log("result check 1 is " + resultCheck1);
        console.log("result check 2 is " + resultCheck2);

        if(resultCheck1 == true && resultCheck2 == true){
            error.textContent = "";

            //local debug
            console.log("Passed");
        }
        else{
            error.textContent = "Needs have letters and numbers in password";
            error.style.color = "red";

            //local debug
            console.log("Need letters and number");
        }    
    }
    else{
        error.textContent = "Password to short or to long - between 8 to 20 characters long";
        error.style.color = "red";

        //local debug
        console.log("Password to short");
    }
}

const validateConfirmPassword = () =>{

}

const validateEmail = () =>{
    //Define variables
    let re = new RegExp("@.");
    let error = document.getElementById("errorEmail")
    let email = document.getElementById("email").value;
    let result = re.test(email);
    
    //local debug
    console.log(email);
    console.log(result);

    if (result == false)
    {
        error.textContent = "Please enter a valid Email"
        error.style.color = "red"
        
        //local debug
        console.log("Failed");
    } else {
        error.textContent = ""
        
        //local debug
        console.log("Passed");
    }

}

const validateFirstName = () => {
    //Define variables
    let re = new RegExp("[0-9, /\s/g]");
    let error = document.getElementById("errorFname")
    const fName = document.getElementById("firstName").value;
    let result = re.test(fName);
    
    //local debug
    console.log(fName);
    console.log(result);

    if (result == true)
    {
        error.textContent = "Please enter a valid Name"
        error.style.color = "red"

        //local debug
        console.log("Failed");
    } else {
        error.textContent = ""

        //local debug
        console.log("Passed");
    }
}

const validateLastName = () =>{
    //Define variables
    let re = new RegExp("[0-9, /\s/g]");
    let error = document.getElementById("errorLname")
    const lName = document.getElementById("lastName").value;
    let result = re.test(lName);

    //local debug
    console.log(lName);
    console.log(result);

    if (result == true)
    {
        error.textContent = "Please enter a valid Name"
        error.style.color = "red"

        //local bug
        console.log("Failed");


    } else {
        //local debug
        console.log("Passed");

        error.textContent = "";
        return true;

    }
}

// const mainValidateFunction = (e) => {
//     e.preventDefault();
//     let fNameCheck = validateFirstName();
//     let lNameCheck = validateLastName();
//     let emailCheck = validateEmail();
//     let passwordCheck = validatePassword();
//     let confirmPasswordCheck = validateConfirmPassword();

//     // local debug
//     console.log("fNameCheck " + fNameCheck);
//     console.log("lNameCheck " + lNameCheck);
//     console.log("emialCheck " + emailCheck);
//     console.log("passwordCheck " + passwordCheck);
//     console.log("confirmPasswordCheck " + confirmPasswordCheck);

// }

const mainValidateFunction = () => {
    const flagStop = true;
    let fNameCheck = validateFirstName();
    let lNameCheck = validateLastName();
    let emailCheck = validateEmail();
    let passwordCheck = validatePassword();
    let confirmPasswordCheck = validateConfirmPassword();

    //local debug
    console.log("Inside Function");


    while(flagStop){
    // local debug
    console.log("Figureing out the logic");
    console.log("fNameCheck " + fNameCheck);
    console.log("lNameCheck " + lNameCheck);
    console.log("emialCheck " + emailCheck);
    console.log("passwordCheck " + passwordCheck);
    console.log("confirmPasswordCheck " + confirmPasswordCheck);
    }



}

submit.addEventListener("click",mainValidateFunction);

