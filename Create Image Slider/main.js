let numbers = document.querySelectorAll(".switcher .numbers button");
let arrNums = [...numbers];
let images = document.querySelectorAll(".slider .image img");
let arrImages = [...images];
let prev = document.querySelector(".switcher .pre");
let next = document.querySelector(".switcher .next");
let slideNum = document.querySelector(".image .slidenum");

window.onload = function ()
{
    arrNums[0].click();
}

function manageImgs ()
{
    arrImages.forEach((image) => {
        image.style.display = "none";
    })

    let index = arrNums.indexOf(this);

    arrImages[index].style.display = "block";
}

function removeClass ()
{
    arrNums.forEach((number) => {
        number.classList.remove("active");
    })

    this.classList.add("active");

    slideNum.textContent = `Slide #${arrNums.indexOf(this) + 1}`
}

arrNums.forEach((number) => {
    number.addEventListener("click", manageImgs);
    number.addEventListener("click", removeClass);
})


prev.onclick = function ()
{
    let index;

    arrNums.forEach((number) => {
        if (number.classList.contains("active"))
        {
            index = arrNums.indexOf(number);
        }
    })

    if (index > 0)
    {
        arrNums[index - 1].click();
    }
}

next.onclick = function ()
{
    let index;

    arrNums.forEach((number) => {
        if (number.classList.contains("active"))
        {
            index = arrNums.indexOf(number);
        }
    })

    if (index < arrNums.length - 1)
    {
        arrNums[index + 1].click();
    }
}
