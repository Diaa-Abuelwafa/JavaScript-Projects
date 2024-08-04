let items = document.querySelectorAll(".header span");
let content = document.querySelector(".items .content");
let contentItems = document.querySelectorAll(".items .content span");
let all = document.querySelector(".header .all");

function removeClass ()
{
    items.forEach((item) => {
        item.classList.remove("active");
    })

    this.classList.add("active");
}

function showItems ()
{
    content.innerHTML = "";

    contentItems.forEach((contentItem) => {
        if (contentItem.classList.contains(`${this.dataset.goal}`))
        {
            content.append(contentItem);
        }
    })
}

items.forEach((item) => {
    item.addEventListener("click", removeClass);
    item.addEventListener("click", showItems);
})

window.onload = function ()
{
    all.click();
}