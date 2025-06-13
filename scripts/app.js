const studentName = "Aryan";
const studentNumber = "1244402";

const message = `${studentName} - ${studentNumber}`;
console.log(message);
const headingPrimaryContent=document.querySelector("h1");

headingPrimaryContent.innerHTML=message;
headingPrimaryContent.classList.add("headingPrimary");

