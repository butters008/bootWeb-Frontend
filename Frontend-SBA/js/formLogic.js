const submit = document.getElementById("login");

const validatePassword = () =>{
    //Define variables
    const password = document.getElementById('password').value;
    let error = document.getElementById("errorPassword");
    const regCheck1 = new RegExp("[a-zA-Z]+");
    const regCheck2 = new RegExp("[0-9]+");

    //checking the length of the password
    if(password.length >= 8 && password.length <= 20){
        let resultCheck1 = regCheck1.test(password);
        let resultCheck2 = regCheck2.test(password);

        if(resultCheck1 == true && resultCheck2 == true){
            error.textContent = "";
            return true;
        }
        else{
            error.textContent = "Needs have letters and numbers in password";
            error.style.color = "red";
        }    
    }
    else{
        error.textContent = "Password to short or to long - between 8 to 20 characters long";
        error.style.color = "red";
    }
}

const validateConfirmPassword = () =>{
    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('confirmPassword').value;
    let error = document.getElementById("errorConfirmPassword");

    if (pass1 === pass2) {
        error.textContent = ""
        return true;
    } else {
        error.textContent = "Please enter a valid Email"
        error.style.color = "red"
    }
}

const validateEmail = () =>{
    //Define variables
    let re = new RegExp("@.");
    let error = document.getElementById("errorEmail")
    let email = document.getElementById("email").value;
    let result = re.test(email);

    if (result == false){
        error.textContent = "Please enter a valid Email"
        error.style.color = "red"
    } else {
        error.textContent = ""
        return true;
    }

}

const validateFirstName = () => {
    //Define variables
    let re = new RegExp("[0-9, /\s/g]");
    let error = document.getElementById("errorFname")
    const fName = document.getElementById("firstName").value;
    let result = re.test(fName);
    if (result == true) {
        error.textContent = "Please enter a valid Name"
        error.style.color = "red"
    } else {
        error.textContent = ""
        return true;
    }
}

const validateLastName = () =>{
    //Define variables
    let re = new RegExp("[0-9, /\s/g]");
    let error = document.getElementById("errorLname")
    let lName = document.getElementById("lastName").value;
    let result = re.test(lName);
    if (result == true) {
        error.textContent = "Please enter a valid Name"
        error.style.color = "red"
    } else {
        error.textContent = "";
        return true;

    }
}

const mainValidateFunction = (e) => {
    e.preventDefault();
    let fNameCheck = validateFirstName();
    let lNameCheck = validateLastName();
    let emailCheck = validateEmail();
    let passwordCheck = validatePassword();
    let confirmPasswordCheck = validateConfirmPassword();
    if(
        fNameCheck == true &&
        lNameCheck == true &&
        emailCheck == true &&
        passwordCheck == true &&
        confirmPasswordCheck == true
    )
    {
        console.log("Passed");
        window.location.href = 'web.html';
    }
    else{
        alert("Failed to submit, please enter correct information");
        window.location.href = 'register.html';
    }
}

submit.addEventListener("click",mainValidateFunction);

