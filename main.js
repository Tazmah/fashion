// change nav on scroll

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})
// show nav
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");



menuBtn.addEventListener("click", () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})
closeBtn.addEventListener("click", () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
})






//show / hide faq

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", function () {
        this.classList.toggle("open")
        // console.log(this);

        const icon = faq.querySelectorAll(".faq__icon i")
        if (icon.clasName === "fas fa-bars") {
            icon.clasName = "fas fa-x";
        } else {
            icon.clasName === "fas fa-bars";
        }
    })
});



// aos

const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    reset: true
});
sr.reveal(".header__left", { delay: 200, origin: "right", distance: "100%" });

sr.reveal(".header__right", { delay: 200, origin: "left", distance: "100%" });
sr.reveal(".discover__left", { delay: 200, origin: "left", distance: "100%" });

sr.reveal(".discover__right", { delay: 200, origin: "right", distance: "100%" });

sr.reveal(".banner", { delay: 200, origin: "bottom", distance: "100%" });

sr.reveal(".offers", { delay: 200, origin: "left", distance: "100%" });

sr.reveal("footer", { delay: 200, origin: "bottom", distance: "100%" });




// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    //when window width is >= 600px
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    }
})