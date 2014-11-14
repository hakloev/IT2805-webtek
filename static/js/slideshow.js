/**
 * Created by trulsmp on 14/11/14.
 */
var image1 = new Image();
image1.src = "static/images/rides/sklia.JPG";
var image2 = new Image();
image2.src = "/static/images/rides/lightning.JPG";
var image3 = new Image();
image3.src = "/static/images/rides/ghostville.JPG";
var image4 = new Image();
image4.src = "/static/images/rides/svinghuska.JPG";
var img = ["Sklia",
"Lightning",
"GhostVille",
"Svinghuska",]


var step=1;
var slideshow = function () {
    document.images.slide.src = eval("image"+step+".src");
    var imageName = img[step-1];
    document.getElementById("imagename").innerHTML = imageName;

    if(step<4) {
        step++;
    }
    else{
        step=1
    }
    setTimeout("slideshow()",2500);

};

slideshow();



