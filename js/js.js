const nav = document.querySelector("#nav")
const navBtn = document.querySelector("#nav_btn")
const navBtnImg = document.querySelector("#nav_btn_img")

navBtn.addEventListener("click", () => {
    if(nav.classList.toggle("open")){
        navBtnImg.src = "./img/icons/NAV CLOSE.svg"
    } 
    else{
        navBtnImg.src = "./img/icons/NAV.svg"
    }
})

  AOS.init();