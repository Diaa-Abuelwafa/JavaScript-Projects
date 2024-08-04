let counters = document.querySelectorAll(".secthree div span");
let section = document.querySelector(".secthree");
let max = document.querySelector(".secthree div");


function increaseWidth (ele)
{
    let count1 = ele.dataset.goal;
    let count2 = (count1 / 100) * max.offsetWidth;
    if (ele.offsetWidth <= count2)
    {
        ele.style.width = `${ele.offsetWidth += 1}px`
    }
}

window.onscroll = function ()
{
    if (window.scrollY >= section.offsetTop)
    {
        counters.forEach((count) => {
            setInterval(increaseWidth ,3 / count.dataset.goal, count);
        })
    }
}