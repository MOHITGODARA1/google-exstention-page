const all=document.getElementById("all");
const active=document.getElementById("active");
const inactive=document.getElementById("inactive");
const exctions=document.querySelectorAll(".exctions");

function file(type){
   exctions.forEach(card=>{
      const checkbox=card.querySelector('input[type="checkbox"]');
      if(type==='all'){
         card.style.display="block";
      }
      else if(type==='active' && checkbox.checked){
         card.style.display="block";
      }
      else if(type==='inactive' && !checkbox.checked){
         card.style.display="block";
      }
      else{
         card.style.display="none";
      }
   });
}
all.addEventListener("click",()=>{
   file('all');
});
active.addEventListener("click",()=>{
   file('active');
});
inactive.addEventListener("click",()=>{
   file('inactive');
});
const imagediv=document.querySelector("#imag");
let valid=true;
imagediv.addEventListener("click",()=>{
   if(valid){
      document.querySelector("#image").src="assets/images/icon-moon.svg";
      document.body.style.background="linear-gradient(180deg,rgba(229, 228, 235, 1) 52%, rgba(81, 81, 87, 1) 98%)";
      document.querySelector(".head").style.color="black";
      valid=false;
   }else{
      document.querySelector("#image").src="assets/images/icon-sun.svg";
      valid=true;
      document.querySelector(".head").style.color="";
      document.body.style.background="";
   }
   
})