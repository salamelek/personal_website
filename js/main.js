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

function positiveClick(element, duration=500) {
    const animationElement = document.getElementById("animation-div");

    const xy = getPositionRelativeToPage(element);
    const rect = element.getBoundingClientRect();

    let x = xy.left + (rect.width / 2);
    let y = xy.top + (rect.height / 2);

    animationElement.style.top = y.toString() + "px";
    animationElement.style.left = x.toString() + "px";
    animationElement.style.transform = "scale(1)";
    animationElement.style.transform = "translateX(-50%) translateY(-50%)";

    setTimeout(() => {
        animationElement.style.transform = "scale(0)";
    }, duration);
}

function getPositionRelativeToPage(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollLeft = window.scrollX || window.pageXOffset;

    const top = rect.top + scrollTop;
    const left = rect.left + scrollLeft;

    return {top, left};
}