    // Funksjon for å forstørre bilde når man hovrer over
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