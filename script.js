var theme = "dark";
var body = document.getElementById('htmlBody');

var themeBtn=document.querySelectorAll('.themeBtn');
var colors = document.querySelectorAll('.colorSets');
console.log(colors);
colors.forEach((color) => {
    color.addEventListener('click', (e) => {
        body.classList.remove('text-lime', 'text-blue', 'text-yellow', 'text-red', 'text-purple');
        body.classList.add('text-' + (e.target.dataset.color)); 
        colors.forEach((color)=>{
            color.classList.remove('active');
        })
        e.target.classList.add('active');
       
    })
});

themeBtn.forEach((btn)=>{

    btn.addEventListener('click', () => {
        if (theme == "dark") {
            theme = "light";
            btn.innerHTML = `<i class="fas fa-moon"></i>`;
            body.classList.replace('dark-theme', 'light-theme');
        }
        else {
            theme = "dark";
            btn.innerHTML = `<i class="fas fa-sun"></i>`;
            body.classList.replace('light-theme', 'dark-theme');
        }
        changeCursor();
    });
})

// cursor

function changeCursor(){
    const bodyElement=document.body;
    theme=="dark"?bodyElement.style.cursor=`url('Images/cursor-white.png'), auto`:bodyElement.style.cursor=`url('Images/cursor.png'), auto`;
}