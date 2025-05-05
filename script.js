document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        var preloader = document.getElementById("preloader");
        var content = document.getElementById("content");

        setTimeout(function() {
            preloader.style.opacity = '0'; 
            content.style.display = "block";
            content.style.opacity = '1'; 
            
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 1000); 
        }, 2000); 
    };
});
