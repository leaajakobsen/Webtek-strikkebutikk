    // Funksjon for å forstørre bilde
    function enlargeImg(img) {
        img.style.transform = "scale(1.5)";
        img.style.transition =
            "transform 0.25s ease";
    }
    // Funksjon for å resete bildet tilbake til originalstørrelse
    function resetImg(img) {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
    }

    // Funksjon for å resete kontaktskjema
    function resetForm() {
        document.getElementById("Kontaktskjema").onsubmit();
        document.getElementById("kontaktskjema").reset();
    }

    



















































































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