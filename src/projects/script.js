const projects=[
    {
        head:"Calculator",
        des:"Simple calculator to perform simple tasks",
        tryitLink:"www.google.com",
        githubLink:"www.github.com",
    },
    {
        head:"To do list",
        des:"Simple to do list to organize your tasks",
        tryitLink:"www.google.com",
        githubLink:"www.github.com",
    }
];

const projectList=document.getElementById('projectList');
function updateList(){
    projects.forEach((project)=>{
        let projectItem=document.createElement('div');
        projectItem.classList.add('projectItem');
        projectItem.innerHTML=`<div class="forFlex">
        <div class="projectBody" id="projectList">
            <span class="projectHeader"><h2>${project.head}</h2></span>
            <span class="projectDes">${project.des}</span>
        </div>
        <div class="projectButtons">
            <span class="tryitBtn "><a class="rounded" href="">${project.tryitLink}</a></span>
            <span class="githubBtn "><a class="rounded" href="">${project.githubLink} </a></span>
        </div>
    </div>
    <div class="expander"><i class="fa-solid fa-angle-down"></i></div>`
    projectList.appendChild(projectItem);
    })
}
updateList();
