const languageColors = {
    "JavaScript": "#f1e05a",
    "Java": "#b07219",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "Python": "#3572a5",
    "C++": "#f34b7d",
    "C": "#555555",
    "C#": "#178600",
};
  
// my github account to load the information
const githubName = "NickReset";

// api's
const githubAPI = "https://api.github.com";

// info
let profilePicture = document.getElementById("profilePic");
let profileName = document.getElementById("name");
let global_name = document.getElementById("username");

// projects
let projects = document.querySelector(".projects");

fetch(`${githubAPI}/users/${githubName}`)
    .then(res => res.json())
    .then(data => {
        profilePicture.src = data.avatar_url;
        global_name.innerText = data.name;
        document.title = data.name;

        profileName.innerText = data.login;
    });

fetch(`${githubAPI}/users/${githubName}/repos`)
    .then(res => res.json())
    .then(data => {
        data.forEach(repo => {
            if(repo.language == null) return;

            let project = document.createElement("div");
            project.classList.add("project");
            project.id = repo.id;

            project.innerHTML = `
                <div class="projectTitle">
                    <h1 id="projectTitle">${repo.name}</h1>
                </div>
                
                ${repo.description == null ? "" : 
                    `<div class="projectDescription">
                    <p id="projectDescription">${repo.description}</p>
                    </div>`
                }
                
                <div class="projectLanguage">
                    <div class="languageColor" id="languageColor"></div>
                    <p id="language">${repo.language}</p>
                </div>
            `;

            project.onclick = () => window.location.href = repo.html_url;

            let languageColor = project.querySelector(".languageColor");
            languageColor.style.backgroundColor = languageColors[repo.language];

            projects.appendChild(project);
            
        });
    });