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

/*
const footer = document.getElementById("footer")
const text = [
    {label : "Adresse: Strikkegata 26, Trondheim",},
    {label : "Tlf: +47 123 45 678",},
    {label : "Mail: knit@happens.com",},
    {label : "Følg oss på instagram! @knit.happ",},

]

for (let i = 0; i<text.length; i++){
    let content = document.createTextNode(text[i].label)
    footer.appendChild(content)
}*/