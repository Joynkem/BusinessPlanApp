
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
   const business2 = new Business(bizname1, dateofinc1, servicces1, industry1, intro1);
   const business3 = new Business(bizname1, dateofinc1, servicces1, industry1, intro1);
   const business4 = new Business(bizname1, dateofinc1, servicces1, industry1, intro1);
   const business5 = new Business(bizname1, dateofinc1, servicces1, industry1, intro1);
   const business6 = new Business(bizname1, dateofinc1, servicces1, industry1, intro1);

  function createBusiness () {
    //Convert the object to a string
    window.localStorage.setItem('business1', JSON.stringify(business1));
    window.localStorage.setItem('business2', JSON.stringify(business2));
    window.localStorage.setItem('business3', JSON.stringify(business3));
    window.localStorage.setItem('business4', JSON.stringify(business4));
    window.localStorage.setItem('business5', JSON.stringify(business5));
    window.localStorage.setItem('business6', JSON.stringify(business6));
}
  const newBusiness1 = window.localStorage.getItem('business1');
  const newBusiness2 = window.localStorage.getItem('business2');
  const newBusiness3 = window.localStorage.getItem('business3');
  const newBusiness4 = window.localStorage.getItem('business4');
  const newBusiness5 = window.localStorage.getItem('business5');
  const newBusiness6 = window.localStorage.getItem('business6');

  const businessRehydrate1 = JSON.parse(newBusiness1);
  const businessRehydrate2 = JSON.parse(newBusiness2);
  const businessRehydrate3 = JSON.parse(newBusiness3);
  const businessRehydrate4 = JSON.parse(newBusiness4);
  const businessRehydrate5 = JSON.parse(newBusiness5);
  const businessRehydrate6 = JSON.parse(newBusiness6);

  console.log('NEWBUSINESSOBJECT', businessRehydrate1);
  console.log(newBusiness1);
  console.log('BUSINESSNAME', businessRehydrate1.businessname);
  console.log(business1);

//    function testloop () {
//     let fruits = ['apple', 'mango', 'orange', 'sugar', 'pot', 'soap',];
    
//     for (let i = 0; i < fruits.length; i++) {
//       let newdiv = document.createElement('div');
//       newdiv.className = "bizview";
//       newdiv.innerText = fruits;
      
//       document.body.appendChild(newdiv);
//       console.log('This is ' + i)
//        };
//   }

   function creategrid(){
    const rows = 2;
    const columns = 3;
    body = document.body;
  // Loop to create grid items and append them to the body
  for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
          var gridItem = document.createElement("div");
          gridItem.classList.add("grid-item1");

    // Append the grid item to the body
          body.appendChild(gridItem);
      }
  }
  }
  

