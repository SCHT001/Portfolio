var equals=document.getElementById('equals');
equals.addEventListener('click',equalsCalc);
var onBtn=document.querySelector('.onBtn'); 
var running=false;
var displayBox=document.getElementById('display');

if (running){
    onBtn.style.backgroundColor="Orange";
    onBtn.innerHTML="OFF"
    displayBox.value="";
}
else{
    onBtn.style.backgroundColor="green";
    onBtn.innerHTML="ON";
    displayBox.value="Press ON to turn on";

}
onBtn.addEventListener('click',()=>{
    running=!running;
    if (running){
        onBtn.style.backgroundColor="Orange";
        onBtn.innerHTML="OFF"
        displayBox.value="";
    }
    else{
        onBtn.style.backgroundColor="green";
        onBtn.innerHTML="ON";
        displayBox.value="Press ON to turn on";

    }
})


function displayAdder(a){
    if(running){
        var display=document.getElementById('display');
    display.value+=a;
    }
}
function equalsCalc()
{
   if(running){
     var display=document.getElementById('display');
    try{display.value=eval(display.value)}
    catch(e){
    display.value="Syntax Error";
   }
}
  
}


var deBtn=document.querySelector('.deBtn');
deBtn.addEventListener('click',()=>{
  if(running){
    var display=document.getElementById('display');
    display.value=display.value.toString().slice(0,-1);
  }
})

    
var acBtn=document.querySelector(".acBtn");
acBtn.addEventListener('click',()=>{
    if(running){
        display.value="";
    }
})