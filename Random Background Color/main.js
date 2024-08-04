let button = document.querySelector(".random");
let background = document.querySelector(".background");


button.onclick = function ()
{
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);

    background.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
}