const tomboltoggle = document.querySelector(".menu-toggle");
tomboltoggle.addEventListener("click", function(){
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
});