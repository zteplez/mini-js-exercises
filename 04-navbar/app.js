const hamburgerBtn = document.querySelector(".hamburger");

window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        const hamburger = document.querySelector(".hamburger");
        const navMain = document.querySelector(".nav-main");
        const socialMediaGroup = document.querySelector(".social-media-group");
        
        if(hamburger.classList.contains("hide")){
            hamburger.classList.remove("hide");
        }
        if(!navMain.classList.contains("hide")){
            navMain.classList.add("hide");
        }
        if(!socialMediaGroup.classList.contains("hide")){
            socialMediaGroup.classList.add("hide");
        }
    } else {
        const hamburger = document.querySelector(".hamburger");
        const navMain = document.querySelector(".nav-main");
        const socialMediaGroup = document.querySelector(".social-media-group");
        const list = document.querySelector(".list-style");
        if(!list.classList.contains("hide")){
            list.classList.add("hide");
        }

        if(!hamburger.classList.contains("hide")){
            hamburger.classList.add("hide");
        }
        if(navMain.classList.contains("hide")){
            navMain.classList.remove("hide");
        }
        if(socialMediaGroup.classList.contains("hide")){
            socialMediaGroup.classList.remove("hide");
        }
    }
});

hamburgerBtn.addEventListener("click", ()=>{
    const list = document.querySelector(".list-style");
    if(!list.classList.contains("hide")){
        list.classList.add("hide");
    }else{
        list.classList.remove("hide");
    }
});
