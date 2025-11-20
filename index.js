const expand_btn = document.querySelector(".expand-btn");
const theme_toggler = document.querySelector(".theme-toggler");

let activeIndex;

expand_btn.addEventListener("click", () => {
    document.body.classList.toggle("collapsed");
});

const current = window.location.href;
const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
    elem.addEventListener("click", function () {
        const hrefLinkClick = elem.href;

        allLinks.forEach((link) => {
            if (link.href == hrefLinkClick) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
    document.body.classList.remove("collapsed");
});

theme_toggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    theme_toggler.querySelector("span:nth-child(1)").classList.toggle("active");
    theme_toggler.querySelector("span:nth-child(2)").classList.toggle("active");

    // Save theme preference to local storage
    if (document.body.classList.contains("dark-theme-variables")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Check for saved theme preference on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme-variables");
    theme_toggler.querySelector("span:nth-child(1)").classList.remove("active");
    theme_toggler.querySelector("span:nth-child(2)").classList.add("active");
}
