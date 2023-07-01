var canvas=document.querySelector('canvas');
var c=canvas.getContext('2d');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'silver', 'gold', 'navy', 'olive', 'maroon'];
var mouseX,mouseY;
canvas.addEventListener('mousemove',function(event)
{
    mouseX=event.x;
    mouseY=event.y;
    console.log(mouseX+mouseY);
})
function Circle(x,y,r,xs,ys,color)
{
    this.x=x;
    this.y=y;
    this.r=r;
    this.xs=xs;
    this.ys=ys;
    this.color=color;
    this.draw=function()
    {
       
        
        c.beginPath();
        c.fillStyle=this.color;
        c.strokeStyle=this.color;
        c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        c.fill();
        c.stroke();
    }

    this.update=function(){
        
        this.x+=this.xs;
        this.y+=this.ys;
       
        if(this.x<=0||this.x>=window.innerWidth-this.r)
        {
            this.xs=-this.xs;
            
        }
        if(this.y<=0||this.y>=window.innerHeight-this.r)
        {
            this.ys=-this.ys;
            
        }

        //Interaction
        var distanceX=Math.abs(mouseX-this.x);
        var distanceY=Math.abs(mouseY-this.y);
        if(distanceX<=50 && distanceY<=50 && this.r<50)
        {
            this.r+=3;
        }
        else if(this.r>3 && !(distanceX<=50 && distanceY<=50 ))
        {
            this.r--;
        }



    }

}


var cArray= [];
var entities=1000;
for(var i=0;i<entities;i++)
{
    var ranX=Math.floor(Math.random() *150);
    var ranY=Math.floor(Math.random() *150);
    var dx=Math.random() *3;
    var dy=Math.random() *3;
    var radius=Math.random() *50;
    var ranColor=color[Math.floor(Math.random() *20)];
    var newCircle= new Circle(ranX,ranY,3,dx,dy,ranColor);
    cArray.push(newCircle);
   
}


function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<entities;i++)
    {
        cArray[i].draw();
        cArray[i].update();
    }
    
}
animate();