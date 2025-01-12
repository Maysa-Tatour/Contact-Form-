document.getElementById("contact-form").addEventListener("submit",function(event){
event.preventDefault();
let isValid=true;

const firstNameInput=document.getElementById("first-name");
const firstNameError=document.getElementById("first-name-error");
if(!firstNameInput.value.trim()){
    firstNameError.textContent="First Name is required.";
    isValid=false;
}else{
    firstNameError.textContent="";
}

const lastNameInput=document.getElementById("last-name");
const lastNameError=document.getElementById("last-name-error");
if(!lastNameInput.value.trim()){
    lastNameError.textContent="Last Name is required.";
   isValid=false;
}else{
    lastNameError.textContent="";
}
const emailInput=document.getElementById("email");
const emailError=document.getElementById("email-error");
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailInput.value.trim()){
    emailError.textContent="Email is required.";
    isValid=false;
}else if(!emailPattern.test(emailInput.value)){
    emailError.textContent="Please enter a valid email address";
    isValid=false;
}else {
    emailError.value="";
}
const queryTypeError=document.getElementById("query-type-error");
const queryTypeSelected=document.querySelector('input[name=query-type]:checked');
if(!queryTypeSelected){
    queryTypeError.textContent="Please select a query type.";
    isValid=false;
}else{
    queryTypeError.textContent="";
}

const messageInput=document.getElementById("message");
const messageError=document.getElementById("message-error");
  if(!messageInput.value.trim()){
    messageError.textContent="Message is required.";
    isValid=false;}else{
    messageError.textContent="";
  }
  const consentInput=document.getElementById("consent");
  const consentError=document.getElementById("consent-error");
  if(!consentInput.checked){
    consentError.textContent="You must cosent to be contacted.";
    isValid=false;
  }else{
    consentError.textContent="";
  }
  const successMessage=document.getElementById("success-message");
    if(isValid){
        successMessage.textContent="Form submitted successfully!";
    }else{
        successMessage.textContent="";
    }
});