/* h1 endrer farge onmouseover, av Lise*/

const tittel = document.getElementById("header")

tittel.addEventListener('mouseover', function changeColor(){
    tittel.style.color ='hsl(196, 48%, 74%)'

});

tittel.addEventListener('mouseout', function changeColor(){
    tittel.style.color = 'black'
});
