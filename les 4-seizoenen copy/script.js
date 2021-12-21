const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seizoenen = [
    {
        "titel":"seizonen",
        "image":"img/seasons.jpg",
        "background":"gray"
    },

    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "background":"green"
    },

    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "background":"red"
    },

    {
        "titel":"herfst",
        "image":"img/autumn.jpg",
        "background":"orange"
    },

    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "background":"white"
    },
];

function show(index){

    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgrounColor = seizoenen[index].background;
}