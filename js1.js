    // Function to increase image size
    function enlargeImg(img) {
        img.style.transform = "scale(1.5)";
        img.style.transition =
            "transform 0.25s ease";
    }

    function resetImg(img) {
        // Set image size to original
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
      }

