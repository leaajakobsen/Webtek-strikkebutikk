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


