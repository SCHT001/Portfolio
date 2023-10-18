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
    })
}
