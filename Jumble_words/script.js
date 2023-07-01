const words = ["apple", "banana", "cherry", "dolphin", "elephant", "flamingo", "giraffe", "hippopotamus", "iguana", "jaguar", "kiwi", "leopard", "monkey", "narwhal", "octopus", "panda", "quokka", "rhinoceros", "seahorse", "toucan", "unicorn", "vulture", "walrus", "xylophone", "yak", "zebra", "basket", "candle", "daisy", "eagle", "feather", "globe", "honey", "island", "jungle", "koala", "lemon", "mountain", "ninja", "ocean", "parrot", "quartz", "river", "sun", "tiger", "umbrella", "volcano", "waterfall", "xylophone", "yacht", "zeppelin", "ball", "carrot", "duck", "elephant", "football", "guitar", "hat", "ice cream", "jacket", "kite", "lion", "mango", "notebook", "orange", "pencil", "queen", "rabbit", "sunglasses", "taco", "umbrella", "violin", "watermelon", "xylophone", "yogurt", "zebra", "avocado", "banana", "chocolate", "donut", "eggplant", "fries", "grape", "hamburger", "ice cream", "juice", "kiwi", "lemon", "mango", "noodles", "orange", "pizza", "quinoa", "raspberry", "strawberry", "taco", "udon", "vegetable", "watermelon", "xigua", "yogurt", "zucchini"];
var attempts=0;
randomInt=Math.floor(Math.random()*100);
var choosedWord=words[randomInt];
console.log(choosedWord);
function suffeler(wordsarr)
{
    var word = wordsarr.split('');
    for(var i=0;i<word.length;i++)
    {
        
        var random=Math.floor(Math.random() *word.length);
        var temp=word[i];
        word[i]=word[random];
        word[random]=temp;  
    }
    var shuffledWord = word.join('');
    console.log(shuffledWord);
    document.getElementById('wordContainer').innerHTML=shuffledWord;
}
suffeler(choosedWord);

var enterButton=document.getElementById('enterBtn');
enterButton.addEventListener('click',compare);
var availableAttempts=5;
var userInput=document.getElementById('inputField');
function compare()
{
   
    resultDisplay=document.getElementById('result');
    attempts++;
    if(userInput.value==choosedWord)
    {
        result.innerHTML="Your Guess is correct..."
    }
    else
    {
        result.innerHTML="Wrong guess";
        var wrongBox=document.getElementById('wrongWords');
        var paragraph=document.createElement('p');
        paragraph.innerHTML=userInput.value;
        wrongBox.appendChild(paragraph);
        userInput.value= '';
    } 
    availableAttempts--;
    document.getElementById('score').innerHTML="Guess left: "+availableAttempts;

    if (attempts>=5)
{
    alert("You lost");
    location.reload();
}
}
document.getElementById('resetBtn').addEventListener('click',reload);
function reload()
{
    location.reload();
}

userInput.addEventListener('keydown',function(event){
    if(event.keyCode===13)
    {
        compare();
    }
});

