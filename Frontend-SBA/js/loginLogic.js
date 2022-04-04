const submit = document.getElementById("login");

const validatePassword = () =>{
    
    const password = document.getElementById('password').value;
    let error = document.getElementById("errorPassword");
    const regCheck1 = new RegExp("[a-zA-Z]+");
    const regCheck2 = new RegExp("[0-9]+");
   
    //checking the length of the password
    if(password.length >= 8 && password.length <= 20){
        console.log("inside if");
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

const mainLoginFunction = (e) => {
    e.preventDefault();
    let emailCheck = validateEmail();
    let passwordCheck = validatePassword();

    if( emailCheck == true && passwordCheck == true){
        window.location.href = 'web.html';
    }
    else{
        alert("Failed to submit, please enter correct information");
        window.location.href = 'register.html';
    }

}

submit.addEventListener("click",mainLoginFunction);
