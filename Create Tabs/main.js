let items = document.querySelectorAll(".header span");
let itemsContent = document.querySelectorAll(".content span");
let content = document.querySelector(".items .content");
let first = document.querySelector(".items .header [data-goal='first']");

function removeClass ()
{
    items.forEach((item) => {
        item.classList.remove("active");
    })

    this.classList.add("active");
}


function manageContent ()
{
    content.innerHTML = "";

    itemsContent.forEach((itemContent) => {
        if (itemContent.classList.contains(`${this.dataset.goal}`))
        {
            content.appendChild(itemContent);
        }
    })
}


items.forEach((item) => {
    item.addEventListener("click", removeClass);
    item.addEventListener("click", manageContent);
})

window.onload = function ()
{
    first.click();
}