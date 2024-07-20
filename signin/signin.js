function signInUser() {
    const signUpPswd = userRehydrate.password;
    const signUpemale = userRehydrate.email;
    //Get data from login form
   const signInpsd  = document.getElementById('pasworld')
   const signIneml  = document.getElementById('emale')
  //Compare stored data with data in sign in form. 
    if (signInpsd.value == signUpPswd && signIneml.value == signUpemale ) {
        //Open dashboard
        window.open('../dashboard/dashboard.html');
        
    } else {
        document.getElementById('wrng').innerHTML = 
        'Either the password or email you entered is incorrect'
    }
}