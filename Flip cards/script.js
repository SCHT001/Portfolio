let container = document.getElementById("main");
let boxes = document.querySelectorAll("#boxes");
let numberArrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var boxDisplaing = 0;
var completedBox=0;

function suffle(array) {
  for (var i = 0; i < array.length; i++) {
    ranInt = Math.floor(Math.random() * 9);
    var temp = array[i];
    array[i] = array[ranInt];
    array[ranInt] = temp;
  }
  return array;
}
function displayText() {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (boxDisplaing < 2 && box.value != 0) {
        box.innerHTML = box.value;
        boxDisplaing++;
      }
      if (boxDisplaing >= 2) {
        setTimeout(function () {
          boxes.forEach((box) => {
            if (box.value != 0) {
              box.innerHTML = "";
            }
          });
          boxDisplaing = 0;
        }, 300);
      }
    });
  });
}

displayText();
//assigining value for each array
let shuffledArray = suffle(numberArrey);
var i = 0;
boxes.forEach((box) => {
  // box.innerHTML = shuffledArray[i];
  box.value = shuffledArray[i];
  i++;
});

//event listener for each box
var clickArr = [];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.dataset.clicked=="false") {
      box.dataset.clicked = "true";
      clickArr.push(box.value);
      if (clickArr.length >= 2) {
        console.log(clickArr);
        check(clickArr);
        clickArr = [];
      }
    }
    else{
        clickArr.push(200);
        check(clickArr);
        clickArr = [];
    }
  
  });
});

//to store the clicked value and check

function check(array) {
  if (array[0] == array[1]) {
    boxes.forEach((box) => {
      if (box.value == array[0]) {
        completedBox++;
        
        box.innerHTML = "X";
        box.value = 0;
        

      }
    });
  } else {
    console.log("false");
    clickArr = [];
    setTimeout(function () {
        boxes.forEach((box) => {
          if (box.value != 0) {
            box.innerHTML = "";
          }
        });
        boxDisplaing = 0;
      }, 300);
    boxes.forEach((box)=>{
        box.dataset.clicked="false";
    })
  }
if(completedBox==boxes.length)
  {
    var display=document.getElementById('display');
    display.innerText="You won";
    
  }
}
var restartBtn=document.getElementById('restart');
restartBtn.addEventListener('click',()=>{
    location.reload();
})

