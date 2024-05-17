window.addEventListener('scroll', function() {
    let backToTopBtn = document.getElementById("back-to-top-btn");

    if (window.scrollY > 0) {
        backToTopBtn.classList.remove("hidden");
    } else {
        backToTopBtn.classList.add("hidden");
    }
});


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
    let showMoreCard = document.getElementById("show-more-card");

    let h2 = projectCard.querySelector("h2");
    let smH2 = showMoreCard.querySelector("h2");
    let preview = projectCard.querySelector(".preview");
    let smPreview = showMoreCard.querySelector(".preview");
    let hidden = projectCard.querySelector(".show-more");
    let smHidden = showMoreCard.querySelector(".show-more");

    if (readMoreDiv.classList.contains("hidden")) {
        expand();
    } else {
        retract();
    }

    function expand() {
        blurBcg.classList.remove("behind");
        showMoreCard.classList.remove("hidden");

        // add text
        smH2.innerText = h2.innerText;
        smPreview.innerHTML = preview.innerHTML;
        smHidden.innerHTML = hidden.innerHTML;

        showMoreCard.scrollTop = 0;

        document.querySelector("body").classList.add("stop-scroll");
        showMoreCard.focus();

        // add event listener for better user experience
        blurBcg.addEventListener("click", () => {
            retract();
        })
    }

    function retract() {
        blurBcg.classList.add("behind");
        showMoreCard.classList.add("hidden");
        document.querySelector("body").classList.remove("stop-scroll");
    }
}