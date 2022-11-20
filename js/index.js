// ================ Scroll-up Button ================

const scrollBtn = document.getElementById('scroll-up');
const navBar = document.getElementById('navbar')

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
        navBar.classList.remove('navbar-top');
        navBar.classList.add('navbar-after');
    } else {
        scrollBtn.style.display = "none";
        navBar.classList.remove('navbar-after');
        navBar.classList.add('navbar-top');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}