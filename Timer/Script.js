const enterBtn=document.getElementById('enterBtn');
enterBtn.addEventListener('click',getInput);

var running=false;
var timer;
var hrs,min,sec;

function getInput()
{
    running=false;
    clearInterval(timer);
    var hrsInput=document.getElementById('hours');
    hrs=parseInt(hrsInput.value)||0;
    var minInput=document.getElementById('minutes');
    min=parseInt(minInput.value)||0;
    var secInput=document.getElementById('seconds');
    sec=parseInt(secInput.value)||0;

    var displayValue=document.getElementById('display');
// To format 1 to 01..
    var h=formatter(hrs);
    var m=formatter(min);
    var s=formatter(sec);
   
//End of formater

    displayValue.innerHTML= h+" :: " + m +" :: "+ s;
}

function formatter(x)
{
    if(x<10)
    {
        return ("0"+x);
    }
    else
    {
        return x;
    }
}


const startBtn=document.getElementById('start');
startBtn.addEventListener('click',start);
function start()
{
    if(!running && (hrs>0 || min> 0 ||sec >0)){
    timer=setInterval(clockStarter,1000);
    running=true;
    }
}

function clockStarter()
{
    
    
//condition to change minute and hrs
    if(sec==0)
    {
        min--;
        sec=60;
        if(min==0 && hrs>0)
        {
            
            min=60;
            if(hrs>0)
            {
                hrs--;
            }
        }
        
    }
    if(min==0 && hrs>0)
    {
        min=60;
        hrs--;
    }
    sec--;
    var displayValue=document.getElementById('display');
    displayValue.innerHTML=formatter(hrs)+" :: "+formatter(min)+" :: "+formatter(sec);
    if(hrs==0&&min==0&&sec==0)
    {
        displayValue.innerHTML="Time up!";
        running=false;
        clearInterval(timer);
    }
}
 //clock reseter

 var resetBtn=document.getElementById('reset');
 resetBtn.addEventListener('click',function()
 {
    displayValue=document.getElementById('display');
    displayValue.innerHTML="00 :: 00 :: 00";
    running=false;
    hrs=0;
    min=0;
    sec=0;
    clearInterval(timer);
 })
//clear input

var clearBtn=document.getElementById('clearBtn');
clearBtn.addEventListener('click',function()
{
    var hrsInput=document.getElementById('hours');
    hrsInput.value="";
    var minInput=document.getElementById('minutes');
    minInput.value="";
    var secInput=document.getElementById('seconds');
    secInput.value="";

})