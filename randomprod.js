//Funksjon for å randomisere de utvalgte produktene

let updivEl = document.getElementById("updivId")
let infodivEl = document.getElementById("infodivId")

const info = [
    {
        bilde : "line.jpg",
        tekst : "Line - Sandnes Garn",
        linkside : "garn.html"
    },
    {
        bilde : "peer.jpg",
        tekst : "Peer Gynt - Sandnes Garn",
        linkside : "garn.html"
    },
    {
        bilde : "alpakka.jpg",
        tekst : "Børstet alpakka - Sandnes Garn",
        linkside : "garn.html"
    },
    {
        bilde : "kos.jpg",
        tekst : "Kos - Sandnes Garn",
        linkside : "garn.html"
    },
    {
        bilde : "sunday.jpg",
        tekst : "Double sunday - Sandnes Garn",
        linkside : "garn.html"
    },
    {
        bilde : "Marseille.jpg",
        tekst : "Marsielle Sweater",
        linkside : "oppskrifter.html"
    },
    {
        bilde : "LineGenser.jpg",
        tekst : "Line Genser",
        linkside : "oppskrifter.html"
    },
    {
        bilde : "CecilieSkog.jpg",
        tekst : "Cecilie Skog genser",
        linkside : "oppskrifter.html"
    },
    {
        bilde : "Iben.jpg",
        tekst : "Iben genser",
        linkside : "oppskrifter.html"
    },
    {
        bilde : "Pipaluk.jpg",
        tekst : "Pipalukgenser",
        linkside : "oppskrifter.html"
    }

]

let numarr = []

for(l=0;l<info.length;l++){
    numarr.push(l)
}

console.log(numarr)

function randomize(){

    for(i=0;i<3;i++){

        let rand = Math.floor(Math.random() * numarr.length)
        let num = numarr[rand]
        console.log(num)
        console.log(rand)
        numarr.splice(rand, 1)

        let obj = document.createElement("img") 
        let a = document.createElement("a")
        let p = document.createElement("p")

        a.setAttribute("href",info[num].linkside)

        obj.setAttribute("src", `img/${info[num].bilde}`)
        obj.setAttribute("alt", info[num].tekst)
        obj.setAttribute("width", "250px")
        obj.setAttribute("height", "300px")

        p.innerText = info[num].tekst
        p.style.display = "inline-block"
        p.style.paddingLeft = "8%"
        p.style.paddingRight = "8%"

        a.style.padding = "5%"
        
        a.appendChild(obj)
        updivEl.appendChild(a)
        infodivEl.appendChild(p)
    }

}

window.onload = randomize