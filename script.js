
var themeBtn=document.getElementById('themeToggle');
var theme="dark";
var body=document.getElementById('htmlBody');
themeBtn.addEventListener('click',()=>{
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