// Select Elements
let getReposButton = document.querySelector(".repos-aria .user-input button");
let userInput = document.querySelector(".repos-aria .user-input input");
let reposDiv = document.querySelector(".repos-aria .repos-results");

function getRepoData(apiLink)
{
    fetch(apiLink).then((result) => {

        return result.json();

    }).then((result) => {

        if (result.length > 0)
        {
            fetchRepos(result);
        }
    })
}

function fetchRepos(obj)
{
    reposDiv.innerHTML = "";

    for (let i = 0; i < obj.length; ++i)
    {
        let repoDiv = document.createElement("div");
        repoDiv.classList.add("repo");

        let repoName = document.createElement("span");
        repoName.classList.add("repo-name");
        let name = document.createTextNode(obj[i].name);
        repoName.append(name);
        repoDiv.append(repoName);

        let infoDiv = document.createElement("div");
        infoDiv.classList.add("repo-info");
        let stars = document.createElement("span");
        stars.classList.add("stars");
        stars.append(document.createTextNode(`Stars ${obj[i]["stargazers_count"]}`));
        let link = document.createElement("a");
        link.setAttribute("href", obj[i]["html_url"]);
        link.setAttribute("target","_blank");
        link.append(document.createTextNode("Visit"));
        infoDiv.append(stars);
        infoDiv.append(link);
        repoDiv.append(infoDiv);

        reposDiv.append(repoDiv);
    }
}


getReposButton.onclick = function ()
{
    if (userInput.value.length > 0)
    {
        getRepoData(`https://api.github.com/users/${userInput.value}/repos`);
    }
    else
    {
        let msg = `<span>Please Enter User Name</span>`;
        reposDiv.innerHTML = msg;
    }
}


