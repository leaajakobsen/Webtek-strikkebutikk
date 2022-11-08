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