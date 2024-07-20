
const fnm = document.getElementById('fstnm');
const lnm = document.getElementById('lstnm');
const pazzword = document.getElementById('pasworld');
const emalle = document.getElementById('emale');

const firstnameError = document.getElementById("firstname-error");
const lastnameError = document.getElementById("lastname-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

function regUser() {
//Save the input values in userObj object.
    const userObj = {
        'firstname': fnm.value,
         'lastname': lnm.value, 
         'password': pazzword.value,
         'email': emalle.value
        }
//Convert the object into a string.
localStorage.setItem('userObj', JSON.stringify(userObj));
}
//Retrieve the object.
const newUserObj = localStorage.getItem('userObj');
const userRehydrate = JSON.parse(newUserObj)
console.log("NEWUSEROBJECT", userRehydrate);
console.log(newUserObj);
console.log("LASTNAME", userRehydrate.lastname);

//Valide input fields
function validateSignUp () {
    firstnameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    

    let isValid = true;
    if (fnm.value === "" ) {
        firstnameError.textContent =
            "Please enter your first name.";
        isValid = false;
    }
    if (lnm.value === "" ) {
        lastnameError.textContent =
            "Please enter your last name.";
        isValid = false;
    }
    if (emalle.value === "" || !emalle.value.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (pazzword.value === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 8 characters.";
        isValid = false;
    }
    return isValid;

}
