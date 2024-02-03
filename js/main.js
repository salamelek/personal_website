function copyText(element, text) {
    let trimmedText = text.split('\n').map(line => line.trim()).join('\n').trim();
    navigator.clipboard.writeText(trimmedText);
    element.classList.add("copied")
}

function resetTooltip(element) {
    element.classList.remove("copied")
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