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
  //Logging business data
  console.log("BUSINESSDATA", bizname1, dateofinc1,servicces1, industry1, intro1);

  // Create a Business object
   const business1 = new Business(bizname1, dateofinc1, servicces1, industry1, intro1);
   //Logging business object
   console.log("BUSINESSOBJECT", JSON.stringify(business1));
   
  function createBusiness () {
    //Convert the object to a string
    window.localStorage.setItem('business1', JSON.stringify(business1));
    
}
  const newBusiness1 = window.localStorage.getItem('business1');
  const businessRehydrate1 = JSON.parse(newBusiness1);
  console.log("NEWBUSINESSOBJECT", businessRehydrate1);
  console.log(newBusiness1);
  console.log('BUSINESSNAME', businessRehydrate1.businessname);
  console.log(business1);


  