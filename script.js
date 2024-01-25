let ham=document.querySelector(".ham")
console.log(ham);
let nav=document.querySelector(".mob-links")
ham.addEventListener("click",()=>{
    console.log("clicked")
    ham.classList.toggle("active")
    nav.classList.toggle("show")

})