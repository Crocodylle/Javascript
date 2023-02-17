const button  = document.querySelector("button")
const body   = document.querySelector("body")


button.addEventListener('click', changeBackColor)

function changeBackColor() { 

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log( r ,"and g", g ,"and b", b);

    body.style.backgroundColor = `rgb(${r},${g},${b}`

}