let scrollButton = document.querySelector(".scroll");
let section = document.querySelector(".sectwo");

window.onscroll = function ()
{
    if (window.scrollY >= section.offsetTop)
    {
        scrollButton.style.display = "block";
    }
    else
    {
        scrollButton.style.display = "none"; 
    }
}

scrollButton.onclick = function ()
{
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "smooth",
        }
    );
}


