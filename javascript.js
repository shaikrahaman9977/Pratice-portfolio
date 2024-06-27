let dayNight = document.querySelector(".dayNight")
let banner = document.querySelector(".bannner");
dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})


let typingEffect = new Typed("#text",{
    strings:["DropXOut","Developer","React.js","Angular","UI & UX Designer"],
    loop:true,
    typespeed:100,
    backSpeed:50,
    backDelay:1000,
   


})