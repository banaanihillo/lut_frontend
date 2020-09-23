const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu")
const menuBranding = document.querySelector(".menu-branding")
const menuNavigation = document.querySelector(".menu-navigation")

const navigationItems = document.querySelectorAll(".navigation-item")

let showMenu = false;

const toggleMenu = () => {
    if (!showMenu) {
        menuButton.classList.add("close-menu");
        menu.classList.add("open");
        menuBranding.classList.add("open");
        menuNavigation.classList.add("open");

        navigationItems.forEach(navigationItem =>
            navigationItem.classList.add("open")
        )

        showMenu = true;

    } else {
        menuButton.classList.remove("close-menu");
        menu.classList.remove("open");
        menuBranding.classList.remove("open");
        menuNavigation.classList.remove("open");

        navigationItems.forEach(navigationItem =>
            navigationItem.classList.remove("open")
        )

        showMenu = false;

    }
}

menuButton.addEventListener("click", toggleMenu);
