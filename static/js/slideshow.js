/**
 * Created by trulsmp on 14/11/14.
 */
var Slideshow = (function() {
    
    var url = "/static/images/rides/";
    var step = 1;
    var img = ["Sklia",
               "Lightning",
               "GhostVille",
               "Svinghuska"];
    var prevImg = img[0];

    var init = function() {
        container = document.getElementById("slideshowcontainer");
        for (var i = 0; i < img.length; i++) {
            var image = document.createElement("img");
            image.className = "slide";
            image.id = img[i];
            image.src = url + img[i] + ".JPG";
            image.alt = "Attraksjon: " + img[i];
            container.appendChild(image);
            if (i == 0) {
                image.className += " " + "showSlide";
            }
        }
        slideshow();
    }
    
    var addClass = function(e, name) {
        var c = e.className;
        if (c) c += " " + name;
        e.className = c;
    }

    var removeClass = function(e, name) {
        var c = e.className; 
        e.className = c.replace(name, "").replace(/ /g, " ").replace(/^ | $/g, ""); 
    }

    var slideshow = function () {
        removeClass(document.getElementById(prevImg), "showSlide");
        var imageName = img[step-1];
        var image = document.getElementById(imageName);
        addClass(image, "showSlide");
        document.getElementById("imagename").innerHTML = imageName;
        prevImg = imageName;
        
        if(step<4) {
            step++;
        }
        else{
            step=1;
        }
        setTimeout(slideshow ,5000);
    }

    return {
        init:init
    }

})();

window.addEventListener('load', function() {
    Slideshow.init();
});
