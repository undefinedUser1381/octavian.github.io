const $ = document;

const navSwitchBtn = $.querySelector(".nav-switch__btn");
const header = $.querySelector(".header")
const mobileHeader = $.querySelector(".mobile__nav");
const mobileNav = $.querySelector(".nav__mobile");
const navMobileIcons = $.querySelectorAll(".nav-mobile__icon");
const ulSubmenu = $.querySelectorAll(".nav-mobile__submenu");
const overlay = $.querySelector(".overlay");

const featuresBtn = $.querySelector(".features-contnet__btn");
const hoverEffect = $.querySelector(".hover__effect");

const featuresItem = $.querySelectorAll(".features__item")

// Open header for mobile
navSwitchBtn.addEventListener("click",() => {
      mobileNav.classList.add("header-mobile--open");
      overlay.classList.add("overlay--show");
});

// Open submenus
navMobileIcons[0].addEventListener("click" , () => {
    navMobileIcons[0].classList.toggle("active")
    ulSubmenu[0].classList.toggle("nav-mobile--open");
});

navMobileIcons[1].addEventListener("click" , () => {
    navMobileIcons[1].classList.toggle("active")
    ulSubmenu[1].classList.toggle("nav-mobile--open");
});

// Close overlay

overlay.addEventListener("click" , () => {
    mobileNav.classList.remove("header-mobile--open");
      overlay.classList.remove("overlay--show");
});

// Scroll effect

window.addEventListener("scroll" , () => {
     if(document.documentElement.scrollTop > 100){
         header.classList.add("scroll__style");
         mobileHeader.classList.add("scroll__style");
     }else{
        header.classList.remove("scroll__style");
        mobileHeader.classList.remove("scroll__style");
     }
});

// Hover effect
featuresBtn.addEventListener("mouseenter" , (e) => {
      let eventOffsetX = e.offsetX ;
      let eventOffsetY = e.offsetY ;

      hoverEffect.style.left = `${eventOffsetX}px`;
      hoverEffect.style.top = `${eventOffsetY}px`;
});

featuresItem.forEach(elem => {
    elem.addEventListener("click" , () => {
        featuresItem.forEach(elem => {
            elem.classList.remove("features__icon--active");
        });
    elem.classList.toggle("features__icon--active");
    });
});




