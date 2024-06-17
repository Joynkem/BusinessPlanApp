//Create a user object
// const userObj = {
//     firstname:'Janet',
//     lastname: 'Henry',
//     businessCategory: 'Fashion'
// }
const fnm = document.getElementById('fstnm');
const lnm = document.getElementById('lstnm');
const bizct = document.getElementById('bizcat');
const pazzword = document.getElementById('pasworld');
const emalle = document.getElementById('emale');

function regUser() {
//Save the input values in userObj object.
    const userObj = {
        'firstname': fnm.value,
         'lastname': lnm.value, 
         'bizct': bizct.value,
         'password': pazzword.value,
         'email': emalle.value
        }
//Convert the object into a string.
window.localStorage.setItem('userObj', JSON.stringify(userObj));
}
//Retrieve the object.
let newUserObj = window.localStorage.getItem('userObj');
console.log(JSON.parse(newUserObj));
console.log(newUserObj);
console.log(localStorage.getItem('lastname'));

function signInUser() {
    let signUpPswd = localStorage.getItem('password');
    const signUpemale = localStorage.getItem('email');
    //Get data from login form
   let signInpsd  = document.getElementById('pasworldd')
   let signIneml  = document.getElementById('emalle')
  //Compare stored data with data in sign in form. 
    if (signInpsd.value == signUpPswd && signIneml.value == signUpemale ) {
        //Open dashboard
        window.open('./dashboard.html');
        
    } else {
        document.getElementById('wrng').innerHTML = 
        'Either the password or email you entered is incorrect'
    }
}



