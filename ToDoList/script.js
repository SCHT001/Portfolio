let inputBox=document.getElementById('input');
let buttonAdder=document.getElementById('btn');
let contain=document.getElementById('cnt');
buttonAdder.addEventListener('click', elementAdder);

function elementAdder()
{
    //delete button
    let del=document.createElement('button');
    del.addEventListener('click',elementDeleter);
    let delImg=document.createElement('img');
    delImg.src="image/dustbin.png";
    delImg.style.height="15px";
   delImg.style.marginLeft="5px";
    del.appendChild(delImg);
    del.style.backgroundColor="transparent";
    del.style.border="none";

    //mark button
    let mark=document.createElement('button');
    mark.addEventListener('click',elementMarker);
    let markImg=document.createElement('img');
    markImg.src="image/mark.png";
    mark.appendChild(markImg);
    markImg.style.height="15px";
    mark.style.backgroundColor="transparent";
    mark.style.border="none";

    //div for delete and mark
    let delAndMark=document.createElement('div');
    delAndMark.style.display="flex";
    delAndMark.appendChild(mark);
    delAndMark.appendChild(del);
    



    let para=document.createElement('p');
    para.innerText=inputBox.value;
    var listBox=document.createElement('li');
    
    
    contain.appendChild(listBox);
    listBox.appendChild(para);
    listBox.appendChild(delAndMark);
    
    inputBox.value="";
    listBox.style.listStyle="none";
    listBox.style.display="flex";
    listBox.style.justifyContent="space-between";
    
    para.style.marginLeft="15px";




    para.addEventListener('click',elementMarker);
    para.addEventListener('dblclick',elementDeleter);


    function elementMarker()
    {
        listBox.style.textDecoration="line-through";
    }
    function elementDeleter()
    {
        contain.removeChild(listBox);
    }



    
}

inputBox.addEventListener('keydown',function(event)
{
    if(event.keyCode===13)
    {
        elementAdder();
    }
})
let resetBtn=document.getElementById('clearBtn');
resetBtn.addEventListener('click',resetAll);

function resetAll()
{
    contain.innerHTML='';
}

