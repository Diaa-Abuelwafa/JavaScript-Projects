let progress = document.querySelector(".progress");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.onscroll = function ()
{
    progress.style.width = `${(window.scrollY / height) * 100}%`
}