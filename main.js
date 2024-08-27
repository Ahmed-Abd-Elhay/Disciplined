// Create Burger Icon Menu
let burgerIcon = document.querySelector(".burger-menu .icon");
let burgerMenu = document.querySelector(".burger-menu .burger");
let linksBurgerMenu = document.querySelectorAll(".burger ul li");

burgerIcon.addEventListener("click", () => {
    if (burgerMenu.classList.contains("active")) {
        burgerIcon.classList.remove("active");
        burgerMenu.classList.remove("active");
    } else {
        burgerIcon.classList.add("active");
        burgerMenu.classList.add("active");
    }
})

linksBurgerMenu.forEach((el) => {
    el.addEventListener("click", () => {
        burgerIcon.classList.remove("active");
        burgerMenu.classList.remove("active");
    })
});

// Create Change Language Function
let changeLang = document.querySelector(".language-change");
let isChageLangClick = false;

changeLang.addEventListener("click", () => {
    if (!isChageLangClick) {
        changeLang.innerHTML = "عربي";
        document.body.style.direction = "ltr";
        isChageLangClick = true;
    } else {
        changeLang.innerHTML = "English";
        document.body.style.direction = "rtl";
        isChageLangClick = false;
    }
});