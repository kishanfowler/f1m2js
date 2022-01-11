const mytitle = document.getElementById("mytitle");
const foto = document.getElementById("foto");
const input = document.getElementById("input")

let lokaties = [
{
    "titel":"ingang",
    "foto":"images/0.jpg"
},
{
    "titel":"lerarenkamer",
    "foto":"images/1.jpg"
},
{
    "titel":"ingang kantoortje",
    "foto":"images/2.jpg"
},
{
    "titel":"kantoortje",
    "foto":"images/3.jpg"
},
{
    "titel":"klaslokaal 0.91",
    "foto":"images/4.jpg"
},
{
    "titel":"ingang klaslokaal 0.90",
    "foto":"images/5.jpg"
},
{
    "titel":"hal",
    "foto":"images/6.jpg"
},
{
    "titel":"ingang klaslokaal 0.92 en 0.93",
    "foto":"images/7.jpg"
},
{
    "titel":"klaslokaal 0.93",
    "foto":"images/8.jpg"
},
{
    "titel":"klaslokaal 0.92",
    "foto":"images/9.jpg"
},
{
    "titel":"klaslokaal 0.90",
    "foto":"images/10.jpg"
},
{
    "titel":"wc",
    "foto":"images/11.jpg"
}
]

function show(index){
    mytitle.innerHTML = lokaties[index].titel;
    foto.src = lokaties[index].foto;
}
function getInput(){
    show(input.value);
}