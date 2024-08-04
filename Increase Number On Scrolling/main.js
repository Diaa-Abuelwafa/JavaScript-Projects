let one = document.querySelector(".secthree .one");
let two = document.querySelector(".secthree .two");
let three = document.querySelector(".secthree .three");
let four = document.querySelector(".secthree .four");

function increase (ele, time)
{
    if (ele.textContent < time)
    {
        ele.textContent++;
    }
}

window.onscroll = function ()
{
    if (window.scrollY === 1611.403564453125)
    {
        setInterval(increase, 10 / 50, one, 50);
        setInterval(increase, 10 / 100, two, 100);
        setInterval(increase, 10 / 200, three, 200);
        setInterval(increase, 10 / 300, four, 300);
    }
}