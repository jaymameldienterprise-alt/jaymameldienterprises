function openPrivacy() {
    document.getElementById("privacyModal").style.display = "block";
}

function openTerms() {
    document.getElementById("termsModal").style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
}