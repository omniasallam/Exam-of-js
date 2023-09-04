
let Contact=document.querySelector('#Contact')
let Categories=document.querySelector('#Categories')
let Area=document.querySelector('#Area')
let Ingredients=document.querySelector('#Ingredients')

let navContactUs=document.querySelector('#navContact')
let header=document.querySelector('#header')
navContactUs.addEventListener('click', function(){
   Contact.classList.replace('d-none', 'd-block')
header.classList.add('d-none')
Search.classList.add('d-none')
Categories.classList.add('d-none')
Area.classList.add('d-none')
Ingredients.classList.add('d-none')
})

let nameInput=document.querySelector('#nameInput');
let emailInput=document.querySelector('#emailInput');
let phoneInput=document.querySelector('#phoneInput');
let ageInput=document.querySelector('#ageInput');
let passwordInput=document.querySelector('#passwordInput');
let repasswordInput=document.querySelector('#repasswordInput');
let nameAlert=document.querySelector('#nameAlert');
let emailAlert=document.querySelector('#emailAlert');
let phoneAlert=document.querySelector('#phoneAlert');
let ageAlert=document.querySelector('#ageAlert');
let passwordAlert=document.querySelector('#passwordAlert');
let repasswordAlert=document.querySelector('#repasswordAlert')

 let userDetails=[]

 if (localStorage.getItem("info") != null) {
   userDetails = JSON.parse(localStorage.getItem("info"));
 }

 function Detailes(){
   if(inputsValidation()){
      let user={
         name:nameInput.value,
         email:emailInput.value,
         phone:phoneInput.value,
         age:ageInput.value,
         password:passwordInput.value,
         repassword:repasswordInput.value,
      }
      userDetails.push(user);
      localStorage.setItem("info", JSON.stringify(userDetails));
      console.log(userDetails);
   }
   emptyData()
 }
 Detailes()

 function emptyData() {
   if (
     nameInput.value == "" || emailInput == "" ||  phoneInput.value == ""|| ageInput.value=="" ||

     passwordInput.value=="" || repasswordInput.value=="") 
   {
    nameAlert.classList.replace("d-none", "d-block");
   emailAlert.classList.replace("d-none", "d-block");
    phoneAlert.classList.replace("d-none", "d-block");
    ageAlert.classList.replace("d-none", "d-block");
    passwordAlert.classList.replace("d-none", "d-block");
   repasswordAlert.classList.replace("d-none", "d-block");
     return false;
   } else {
      nameAlert.classList.replace("d-block", "none");
      emailAlert.classList.replace("d-block", "d-none");
       phoneAlert.classList.replace("d-block", "d-none");
       ageAlert.classList.replace("d-block", "d-none");
       passwordAlert.classList.replace("d-block", "d-none");
      repasswordAlert.classList.replace("d-block", "d-none");
     return true;
   }
 }

