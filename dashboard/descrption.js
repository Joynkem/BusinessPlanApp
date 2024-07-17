const compnm = document.getElementById('comnm');
const directnm = document.getElementById('dirnm');
const compaddress = document.getElementById('comadd');
const comoverview = document.getElementById('cooverview');

const desnameError = document.getElementById("firstname-error");
const compnameError = document.getElementById("lastname-error");
const dirnameError = document.getElementById("email-error");
const overviewError = document.getElementById("password-error");
function saveDescription() {
//Save the input values in userObj object.
    const descriptionObj = {
        'company_name':compnm.value,
         'director': directnm.value, 
         'company_address': compaddress.value,
         'company_overview': comoverview.value
        }
//Convert the object into a string.
localStorage.setItem('descriptionObj', JSON.stringify(descriptionObj));
}
//Retrieve the object.
const newDescriptnObj = localStorage.getItem('descriptionObj');
const descriptionRehydrate = JSON.parse(newDescriptnObj);
console.log("NEWDESCRIPTIONOBJECT", descriptionRehydrate);
console.log(newDescriptnObj);
console.log("COMPANYNAME", descriptionRehydrate.comoverview);

// function validateDescriptn () {
//     firstnameError.textContent = "";
//     lastnameError.textContent = "";
//     emailError.textContent = "";
//     passwordError.textContent = "";
    

//     let isValid = true;
//     if (fnm.value === "" ) {
//         firstnameError.textContent =
//             "Please enter your first name.";
//         isValid = false;
//     }
//     if (lnm.value === "" ) {
//         lastnameError.textContent =
//             "Please enter your last name.";
//         isValid = false;
//     }
//     if (emalle.value === "" || !emalle.value.includes("@")) {
//         emailError.textContent =
//             "Please enter a valid email address.";
//         isValid = false;
//     }

//     if (pazzword.value === "" || password.length < 6) {
//         passwordError.textContent =
//             "Please enter a password with at least 8 characters.";
//         isValid = false;
//     }
//     return isValid;