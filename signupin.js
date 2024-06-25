
const fnm = document.getElementById('fstnm');
const lnm = document.getElementById('lstnm');
const pazzword = document.getElementById('pasworld');
const emalle = document.getElementById('emale');
// const bus1  = document.getElementById('busname1');
// const bus2  = document.getElementById('busname2');
// const bus3  = document.getElementById('busname3');
// const bus4  = document.getElementById('busname4');

// const bizArr = [bus1vee, bus2vee, bus3vee, bus4vee]
// const cardgrid = " ";
// const bus1vee = bus1.value;
// const bus2vee = bus2.value;
// const bus3vee = bus3.value;
// const bus4vee = bus4.value;

// function displayBizName () {
//     for(let i = 0; i < bizArr.length; i++) {
        
//     }
// }
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

const bizname = document.getElementById('biznm');
const dateofinc = document.getElementById('dateofinc');
const industry = document.getElementById('ind');
const servicces = document.getElementById('servises');
const intro = document.getElementById('shtdesc');

function Business(buzinessname, dateofincorpo, iindustry, servises, introo, noofemployees) {
    this.businessname = buzinessname;
    this.dateofincorporation = dateofincorpo;
    this.services = servises;
    this.intro = introo;
  }
  const bizname1 = bizname.value;
  const dateofinc1 = dateofinc.value;
  const  servicces1 = servicces.value;
  const industry1 = industry.value;
  const intro1 =  intro.value;

  // Create a Business object
   const business1 = new Business(bizname1, dateofinc1, servicces1, industry1, intro1);
  
  function createBusiness () {
    //Convert the object to a string
    window.localStorage.setItem('business1', JSON.stringify(business1));
  }
  const newBusiness1 = window.localStorage.getItem('business1');
  const businessRehydrate = JSON.parse(newBusiness1);
  console.log('NEWBUSINESSOBJECT', businessRehydrate);
  console.log(newBusiness1);
  console.log('BUSINESSNAME', businessRehydrate.businessname);
  console.log(businessname);


