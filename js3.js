// Funksjon for slideshow
var imageArray = [
    'img/slider1.jpg',
    'img/slider2.jpg',
    'img/slider3.jpg',
];
var indexValue = 0;
var imageDuration = 4000;

function slideShow() {
    document.getElementById('image1').src = imageArray[indexValue];
    indexValue++;
    if (indexValue == imageArray.length) {indexValue = 0; }
    setTimeout("slideShow()", imageDuration);
}
slideShow(); 