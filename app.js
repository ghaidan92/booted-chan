window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 50px";
        document.getElementById("logo").style.fontSize = "25px";
        document.getElementById("img").style.width = "225px";
        document.getElementById("img").style.height = "125px";
        // document.getElementById("nav-item").style.marginTop = "3.5rem";
    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "35px";
        document.getElementById("img").style.width = "20rem";
        document.getElementById("img").style.height = "9rem";
        // document.getElementById("nav-item").style.marginTop = "4rem";
    }
}