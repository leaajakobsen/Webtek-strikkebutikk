//Funksjon for å lage header
function makeh1() {
    let a = document.createElement("a")
    a.setAttribute("href","index.html")

     const header = document.createElement('h1');
     const text = document.createTextNode("KNIT HAPPENS");
     header.appendChild(text);
     a.appendChild(header)
     return a;
   }
 document.getElementById('header').appendChild(makeh1());

// Navbar
const navbar = document.getElementById("navbar")
const links = [
    {
        label : "Garn",
        path : "garn.html",
    },
    {
        label : "Oppskrifter",
        path : "oppskrifter.html",
    },
    {
        label : "Om oss",
        path : "omoss.html",
    },
    {
        label : "Kontaktskjema",
        path : "kontaktskjema.html",
    },
]

for (let i = 0; i<links.length; i++) {
    let a = document.createElement("a")
    a.setAttribute("href",links[i].path)
    let text = document.createTextNode(links[i].label)
    a.appendChild(text)

    navbar.appendChild(a)
}


//Footer
const footer = document.getElementById("footer")
const text = [
    {label : "Adresse: Strikkegata 26, Trondheim",},
    {label : "Tlf: +47 123 45 678",},
    {label : "Mail: knit@happens.com",},
    {label : "Følg oss på instagram! @knit.happ",},

]

for (let i = 0; i<text.length; i++){
    let p = document.createElement("p")
    let content = document.createTextNode(text[i].label)
    p.appendChild(content)
    footer.appendChild(p)
}