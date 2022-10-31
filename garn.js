//Her bruker vi en funksjon som vil forstørre modal-elementet, og gi en mørk bakgrunn
//Her henter vi ut eventElement (det som synes på nettsiden) og modal-elementene
let events = document.getElementsByClassName("eventElement");
let modals = document.getElementsByClassName("modal");

for (var i = 0; i < events.length; i++) {
    let event = events[i];
    let modal = modals[i];
    let span = modal.childNodes[1];

    event.addEventListener("click", () => {
        modal.style.display = "block";
    });

    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (lukk) => {
        if (lukk.target == modal) {
            modal.style.display = "none";
        }
    });
}