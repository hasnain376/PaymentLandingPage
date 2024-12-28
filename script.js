const hamburgerMenu = document.querySelector('#menu-icon');
const navLink = document.querySelector('#navLinks');
let falg = 0;
hamburgerMenu.addEventListener('click' , (event)=>{
    if(falg === 0){
        navLink.style.left = "0%";
        navLink.style.opacity = "1"
        falg++;
    }else{
        navLink.style.left = "-100%";
        navLink.style.opacity = "0";
        falg--;
    }
    
})


