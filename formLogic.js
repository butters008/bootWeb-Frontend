const submit = document.getElementById("login");

const validatePassword = () =>{
    let error = document.getElementById("errorPassword")
    // let regXPass = ;
    if (isNaN(document.getElementById("password").value))
    {
        
        // Changing content and color of content
        error.textContent = "Please enter a valid number"
        error.style.color = "red"
    } else {
        error.textContent = ""
    }
}

const validateConfirmPassword = (p1, p2) =>{

}

const validateEmail = () =>{
    let re = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/");
    let error = document.getElementById("errorEmail")
    let email = document.getElementById("email").value;
    console.log(email);
    let result = re.test(email);
    console.log(result);

    if (result == false)
    {
        error.textContent = "Please enter a valid Email"
        error.style.color = "red"
        console.log("Failed");
    } else {
        error.textContent = ""
        console.log("Passed");
    }

}

const validateFirstName = () => {
    let re = new RegExp("[0-9, /\s/g]");
    let error = document.getElementById("errorFname")
    let fName = document.getElementById("firstName").value;
    console.log(fName);
    let result = re.test(fName);
    console.log(result);

    if (result == true)
    {
        error.textContent = "Please enter a valid Name"
        error.style.color = "red"
        console.log("Failed");
    } else {
        error.textContent = ""
        console.log("Passed");
    }
}

const validateLastName = () =>{
    let re = new RegExp("[0-9, /\s/g]");
    let error = document.getElementById("errorLname")
    let lName = document.getElementById("lastName").value;
    console.log(lName);
    let result = re.test(lName);
    console.log(result);
    errorMessage(result);
    if (result == true)
    {
        error.textContent = "Please enter a valid Name"
        error.style.color = "red"
        console.log("Failed");
    } else {
        error.textContent = ""
        console.log("Passed");
    }
}

const errorMessage = (value) =>{

}

const mainValidateFunction = (e) => {
    e.preventDefault();
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

}

submit.addEventListener("click",mainValidateFunction);

