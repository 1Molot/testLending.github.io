(function () {
    const openingBtn = document.querySelector(".hamburger-open");
    const closingBtn = document.querySelector(".hamburger-close");
    const menu = document.querySelector(".mobile-menu");
    const body = document.querySelector("body");
    const menuItems = document.querySelectorAll(".side-menu__link");

    openingBtn.addEventListener("click", function () {
        menu.classList.add("open");
        openingBtn.classList.add("none");
        closingBtn.classList.add("block");
        openingBtn.classList.remove("block")
        closingBtn.classList.remove("none")
        body.classList.add("scrollOff");
    });

    closingBtn.addEventListener("click", function () {
        menu.classList.remove("open");
        openingBtn.classList.add("block");
        closingBtn.classList.add("none");
        openingBtn.classList.remove("none")
        closingBtn.classList.remove("block")
        body.classList.remove("scrollOff");
    });

    //закрытие ссылок
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            menu.classList.remove("open");
            openingBtn.classList.add("block");
            closingBtn.classList.add("none");
            openingBtn.classList.remove("none");
            closingBtn.classList.remove("block");
            body.classList.remove("scrollOff");
        });
    });
})();

