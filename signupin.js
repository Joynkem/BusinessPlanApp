//Create a user object
// const userObj = {
//     firstname:'Janet',
//     lastname: 'Henry',
//     businessCategory: 'Fashion'


// }
const fnm = document.getElementById('fstnm');
const lnm = document.getElementById('lstnm');
const pazzword = document.getElementById('pasworld');
const emalle = document.getElementById('emale');

function regUser() {
//Save the input values in userObj object.
    const userObj = {
        'firstname': fnm.value,
         'lastname': lnm.value, 
         'password': pazzword.value,
         'email': emalle.value
        }
//Convert the object into a string.
window.localStorage.setItem('userObj', JSON.stringify(userObj));
}
//Retrieve the object.
const newUserObj = window.localStorage.getItem('userObj');
const userRehydrate = JSON.parse(newUserObj)
console.log("NEWUSEROBJECT", userRehydrate);
console.log(newUserObj);
console.log("LASTNAME", userRehydrate.lastname);

function signInUser() {
    const signUpPswd = userRehydrate.password;
    const signUpemale = userRehydrate.email;
    //Get data from login form
   const signInpsd  = document.getElementById('pasworldd')
   const signIneml  = document.getElementById('emalle')
  //Compare stored data with data in sign in form. 
    if (signInpsd.value == signUpPswd && signIneml.value == signUpemale ) {
        //Open dashboard
        window.open('./dashboard.html');
        
    } else {
        document.getElementById('wrng').innerHTML = 
        'Either the password or email you entered is incorrect'
    }
}



