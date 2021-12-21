const myImage = document.getElementById('myImage')
const myTitle = document.getElementById('myTitle')

let paintings = ["https://placekitten.com/400/200",
"https://placekitten.com/400/201",
"https://placekitten.com/401/201",
"https://placekitten.com/401/202",
"https://placekitten.com/402/202",
"https://placekitten.com/402/203"]

let titles = ["kat 1","kat 2","kat 3","kat 4","kat 5","kat 6",]

function changeImage(index){
    myImage.src = paintings[index];
    myTitle.innerHTML = titles[index]
}