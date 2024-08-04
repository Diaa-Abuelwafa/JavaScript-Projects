let result = document.querySelector(".result");
let button = document.querySelector(".generate");

let data = "123456789abcdefghigklmnopqrstuvwxy";
let passLength = 10;
let passArr = [];

button.onclick = function ()
{
    let passArr = [];
    for (let i = 0; i < passLength; ++i)
    {
        let randomindex = Math.floor(Math.random() * data.length);
        passArr.push(data[randomindex]);
    }

    let password = passArr.join("");

    result.innerHTML = password;

}