const bizname = document.getElementById('biznm');
const dateofinc = document.getElementById('dateofinc');
const industry = document.getElementById('ind');
const servicces = document.getElementById('servises');
const descriptn = document.getElementById('shtdesc');

function createBusiness() {
//Save the input values in userObj object.
    const businessObj = {
        'businessname': bizname.value,
         'dateofIncorporation': dateofinc.value, 
         'industry': industry.value,
         'services': servicces.value,
         'description': descriptn.value,

        }
//Convert the object into a string.
window.localStorage.setItem('businessObj', JSON.stringify(businessObj));
}
const newBusObj = window.localStorage.getItem('businessObj');
const busRehydrate = JSON.parse(newBusObj)
console.log("NEWUBUSINESSOBJECT", busRehydrate);
console.log(newUserObj);
console.log("INDUSTRY", busRehydrate.industry);

