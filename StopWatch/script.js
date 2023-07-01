let display=document.getElementById('display');
let stopBtn=document.getElementById('stop');
let startBtn=document.getElementById('start');
let resetBtn=document.getElementById('reset');
startBtn.addEventListener('click',watchStart);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);
let stopped=false;
let min=00,sec=00,hrs=00;
let running=false;
function start()
{
    running=true;
    sec++;
    if (sec==60)
    {
        min++;
        sec=0;
        if(min==60)
        {
            hrs++;
            min=0;
        }
    }
    if(hrs<10)
{
    h= "0"+hrs;
}
else if(hrs>=10)
{
    h=hrs;
}
if(min<10)
{
    m="0"+min;
    
}
else if(min>=10)
{
    m=min;
}
if(sec<10)
{
    s="0"+sec;
}
else if(sec>=10)
{
    s=sec;
}
    display.innerHTML=h+":"+m+":"+s;

}

var timer;
function watchStart()
{
    if(!running)
    {
     timer=setInterval(start,1000);
        
    }
    stopped;
}
function stop()
{
    clearInterval(timer);
    running=false;
}
function reset()
{
    clearInterval(timer);
    hrs=0,min=0,sec=0;
    display.innerHTML="00:00:00";
    running=false;
}
