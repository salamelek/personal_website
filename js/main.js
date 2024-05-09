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


function showMore(btn) {
    let projectCard = btn.parentNode.parentNode;
    let readMoreDiv = projectCard.querySelector(".show-more");
    let blurBcg = document.getElementById("blur-bcg");

    if (readMoreDiv.classList.contains("hidden")) {
        // expand reading section
        readMoreDiv.classList.remove("hidden");
        btn.text = "Show less";
        projectCard.classList.add("expanded");

        blurBcg.classList.remove("behind");

        // add event listener for better user experience
        blurBcg.addEventListener("click", () => {
            retract();
        })
    } else {
        retract();
    }

    function retract() {
        readMoreDiv.classList.add("hidden");
        btn.text = "Show more";
        projectCard.classList.remove("expanded");
        blurBcg.classList.add("behind");
    }
}