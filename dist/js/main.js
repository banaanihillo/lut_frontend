const menuButton = document.querySelector(".menu-button");

const menu = document.querySelector(".menu")
const menuBranding = document.querySelector(".menu-branding")
const menuNavigation = document.querySelector(".menu-navigation")

const navigationItems = document.querySelectorAll(".navigation-item")

let showMenu = false;

const toggleMenu = () => {
    if (!showMenu) {
        menuButton.classList.add("menu-button-hidden");
        
        menu.classList.add("menu-visible");
        menuBranding.classList.add("menu-visible");
        menuNavigation.classList.add("menu-visible");

        navigationItems.forEach(navigationItem =>
            navigationItem.classList.add("menu-visible")
        )
        
        showMenu = true;

    } else {
        menuButton.classList.remove("menu-button-hidden");
        
        menu.classList.remove("menu-visible");
        menuBranding.classList.remove("menu-visible");
        menuNavigation.classList.remove("menu-visible");

        navigationItems.forEach(navigationItem =>
            navigationItem.classList.remove("menu-visible")
        )
        
        showMenu = false;

    }
}

menuButton.addEventListener("click", toggleMenu);
