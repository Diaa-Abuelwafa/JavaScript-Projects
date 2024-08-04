let input = document.querySelector("[name='card']");
let progress = document.querySelector("form .progress");
let number = document.querySelector("form .number");

number.innerHTML = input.getAttribute("maxlength");

input.oninput = function ()
{
    number.innerHTML = input.getAttribute("maxlength") - (input.value.length);
    progress.style.width = `${( input.value.length / input.getAttribute("maxlength")) * 100}%`;

    if (number.innerHTML == 0)
    {
        number.classList.add("zero");
    }
    else
    {
        number.classList.remove("zero");
    }
}