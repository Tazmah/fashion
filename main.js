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

// const sr = ScrollReveal({
//     distance: "60px",
//     duration: 2500,
//     reset: true
// });
// sr.reveal(".header__left", { delay: 200, origin: "top", distance: "100%" });

// sr.reveal(".header__right", { delay: 200, origin: "bottom", distance: "100%" });

// sr.reveal(".discover__left", { delay: 200, origin: "bottom", distance: "100%" });

// sr.reveal(".discover__right", { delay: 200, origin: "top", distance: "100%" });

// sr.reveal(".banner", { delay: 200, origin: "bottom", distance: "100%" });

// sr.reveal(".offers", { delay: 200, origin: "top", distance: "100%" });

// sr.reveal("footer", { delay: 200, origin: "bottom", distance: "100%" });



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

//pop payment

var buyNow = document.querySelectorAll(".wear__info .btn-primary");
var popUp = document.querySelector(".popup");
var close = document.getElementById("close")
var readies = document.querySelectorAll(".readies");
var daata = document.querySelector(".data")





for (let i = 0; i < readies.length; i++) {
    const element = readies[i];
    element.addEventListener("click", () => {

        var price = element.dataset.price;
        var name = element.dataset.name;
        var available = element.dataset.available;
        var src = element.dataset.src;

        console.log(price);
        console.log(name);
        console.log(available);
        console.log(src);





        var imageContainer = document.createElement("div");


        imageContainer.classList.add("image__container");

        var image = document.createElement("img");
        image.setAttribute("src", src);


        imageContainer.append(image)

        console.log(imageContainer);


        var dataInfo = document.createElement("div");
        dataInfo.classList.add("data__info");

        var info = document.createElement("h3");
        info.append(name);
        dataInfo.append(info)


        var value = document.createElement("p");
        value.append(price)
        dataInfo.append(value)

        var describe = document.createElement("p");
        describe.append(available);
        dataInfo.append(describe);



        // daata.append(dataInfo);
        console.log(dataInfo)
        daata.innerHTML = ''
        daata.append(imageContainer);
        daata.append(dataInfo);


    })
}

close.addEventListener("click", function () {
    popUp.classList.remove("open-popup")

    
})
for (let i = 0; i < buyNow.length; i++) {
    var self = buyNow[i];
    self.addEventListener("click", () => {
        popUp.classList.add("open-popup");
        console.log("welcome");

    })
}

