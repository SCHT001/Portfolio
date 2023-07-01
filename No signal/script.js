
let canvas=document.querySelector('canvas');
var color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'silver', 'gold', 'navy', 'olive', 'maroon'];
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
var cnt=canvas.getContext('2d');
let xCord;
let yCord;
var x=100,y=200,radius=50,speedX=4,speedY=4;
function animation()
{
    
    requestAnimationFrame(animation);
   
    
    cnt.clearRect(0,0,window.innerWidth,window.innerHeight);
    cnt.beginPath();
    cnt.lineWidth=0;
    cnt.font='18px Arial';
    var int=Math.floor(Math.random() *20);
    var randomSpeed=Math.random() *50;
    cnt.fillStyle='grey';
    cnt.rect(x,y,100,40);
    cnt.fill();
    cnt.fillStyle='white';
    cnt.fillText('No signal',x+10,y+22);
    
    cnt.stroke();
    
    y+=speedY;
    x+=speedX;

    if(y>=window.innerHeight-50||y<=0)
    {
        speedY=-speedY;
        
        
       
    }
    if(x>=window.innerWidth-110||x<=0)
    {
        speedX=-speedX;
    } 
}
animation();


