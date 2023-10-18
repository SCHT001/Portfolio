const projects=[
    {
        head:"Calculator",
        des:"Simple calculator to perform simple tasks like addition, subtraction, reminder, etc",
        tryitLink:"https://scht001.github.io/Calculator/",
        githubLink:"https://github.com/SCHT001/Calculator",
        languages:["HTML","CSS","JavaScript"],
        category:"Utility",
        completed:false,
        author:"Sachet Subedi",
    },
    {
        head:"To do list",
        des:"Simple to do list to organize your tasks",
        tryitLink:"https://scht001.github.io/To-Do-List/",
        githubLink:"https://github.com/SCHT001/To-Do-List",
        languages:["HTML","CSS","JavaScript"],
        category:"Utility",
        completed:true,
        author:"Sachet Subedi",
    },
    {
        head:"Timer",
        des:"Simple clock to check for time",
        tryitLink:"https://scht001.github.io/To-Do-List/",
        githubLink:"https://github.com/SCHT001/To-Do-List",
        languages:["HTML","CSS","JavaScript"],
        category:"Utility",
        completed:true,
        author:"Sachet Subedi",
    }
];

const projectList=document.getElementById('projectList');
function updateList(){
    projects.forEach((project)=>{
        let projectItem=document.createElement('div');
        projectItem.classList.add('projectItem');
        projectItem.classList.add('rounded');
        projectItem.innerHTML=`<div class="forFlex">
        <div class="projectBody" >
            <span class="projectHeader"><h2>${project.head}</h2></span>
            <span class="projectDes">${project.des}</span>
        </div>
        <div class="projectButtons">
            <span class="tryitBtn "><a class="rounded" href="${project.tryitLink}">Try it</a></span>
            <span class="githubBtn "><a class="rounded" href="${project.githubLink} ">Github</a></span>
        </div>
    </div>
    <div class="expandedDes">
        <div class="languagesUsed">
            <span>Languages Used :</span>
            ${languageLister(project)}
        </div>
        <div class="category">
            Category:
            <ul>
                <li>${project.category}</li>
            </ul>
        </div>
        <div class="stats">
            <div class="completed" style="width: 100%; display: flex; align-items: center; gap: 5px;">Completed <div style="height: 10px; width: 10px; border-radius: 50%; background-color: ${completionChecker(project.completed)};"></div> </div>
            <div>
                <span class="author">Author: </span> <br>
                <span >${project.author}</span>

            </div>
        </div>
    </div>
    <div class="expander"><i class="fa-solid fa-angle-down" onclick="expanded(this)"></i></div>
`
    projectList.appendChild(projectItem);
    })
}
updateList();

function expanded(item){
    const projectItem=item.closest('.projectItem'); 
    const expandedDes=projectItem.querySelector('.expandedDes');
    if(item.classList.contains('fa-angle-down')){
        item.classList.replace('fa-angle-down','fa-angle-up');
        projectItem.style.height="30vh";
        expandedDes.style.display='flex';
    }
    else{
        item.classList.replace('fa-angle-up','fa-angle-down')
        projectItem.style.height="initial";
        expandedDes.style.display='none';
    }
}
function completionChecker(item){
    if(item){
        return "green";
    }
    else{
        return "red";
    }
}
function languageLister(project){
    let mainList=document.createElement('ul');
    project.languages.forEach((lang)=>{
        listItem=document.createElement('li');
        listItem.innerHTML=lang;
        mainList.appendChild(listItem);
    })
    return mainList.outerHTML;
}