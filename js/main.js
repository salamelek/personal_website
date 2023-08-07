function copyText(e) {
    let contact = document.getElementById(e.id).parentElement;

    navigator.clipboard.writeText(contact.innerText);

    contact.classList.add("copied")
}

function resetTooltip(e) {
    let contact = document.getElementById(e.id).parentElement;
    contact.classList.remove("copied")
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem("currentTheme", theme);
}

function switchTheme() {
    if (window.localStorage.getItem("currentTheme") !== "dark") {
        setTheme("dark")
    } else {
        setTheme("light")
    }
}