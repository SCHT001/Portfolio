
var themeBtn=document.getElementById('themeToggle');
var theme="dark";
var body=document.getElementById('htmlBody');

var colors=document.querySelectorAll('.colorSets');
console.log(colors);
colors.forEach((color) => {
    color.addEventListener('click',(e)=>{
        body.classList.remove('text-lime','text-blue','text-yellow','text-red','text-purple');
        body.classList.add('text-'+(e.target.dataset.color));
    })
});
var themeBtn=document.querySelectorAll('.themeBtn');
themeBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(theme=="dark"){
                    theme="light";
                    themeBtn.innerHTML=`<i class="fas fa-moon"></i>`;
                    body.classList.replace('dark-theme','light-theme'); 
                }
                else{
                    theme="dark";
                    themeBtn.innerHTML=`<i class="fas fa-sun"></i>`; 
                    body.classList.replace('light-theme','dark-theme'); 
                }
    })
})



