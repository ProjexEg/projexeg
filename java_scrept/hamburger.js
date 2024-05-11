hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function() {
    var contentHeight = document.body.offsetHeight;
    var windowHeight = window.innerHeight;
    var footer = document.querySelector('footer');
   if (contentHeight > windowHeight) {
        footer.style.position = 'static';
    } else {
        footer.style.position = 'fixed';
    }
});