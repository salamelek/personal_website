function copyText(ele) {
    let contact = document.getElementById(ele.id);

    navigator.clipboard.writeText(contact.innerText);

    contact.classList.add("copied")
}

function resetTooltip(ele) {
    let contact = document.getElementById(ele.id);
    contact.classList.remove("copied")
}