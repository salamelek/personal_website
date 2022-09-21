function copyText(e) {
    let contact = document.getElementById(e.id);

    navigator.clipboard.writeText(contact.innerText);

    contact.classList.add("copied")
}

function resetTooltip(e) {
    let contact = document.getElementById(e.id);
    contact.classList.remove("copied")
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem("currentTheme", theme);
}

function checkTheme() {
    if (window.localStorage.getItem("currentTheme") == null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            setTheme("dark")
        } else {
            // light mode
            setTheme("light")
        }
    } else {
        if (window.localStorage.getItem("currentTheme") === "dark") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
}

function switchTheme() {
    if (window.localStorage.getItem("currentTheme") !== "dark") {
        setTheme("dark")
    } else {
        setTheme("light")
    }
}