const word_el=document.getElementById('word')
const popup=document.getElementById('popup-container')
const message=document.querySelector('.success-message')
const wrong=document.getElementById('wrong-letters')
const items=document.querySelectorAll('.item')
function getRandomWord(){
    const word=["javascript","java","css","html","ptyhon","ruby","dotnet"]
    let random=Math.floor(Math.random()*word.length)
    return word[random]
}
const selectedWord=getRandomWord()
const correctLetters=[]
const wrongLetters=[];


function displayWord(){
    word_el.innerHTML=`
    ${selectedWord.split('').map(letter=>`
    <div class="letter"> ${correctLetters.includes(letter) ?letter :''}</div>
    ` ).join('')}`;
    const w=word_el.innerText.replace(/\n/g,'');
    if(w=== selectedWord){
        popup.style.display='flex'
        message.innerText="Congratz You Win"
        play_again=document.getElementById("play-again");
        play_again.addEventListener("click",function(event){
            window.location.reload()
        });
        
    }
   

items.forEach((item,index)=>{
    var errorCount=wrongLetters.length;

    if(index<errorCount){
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }
})

}
function updateWrongLetter(){

    wrong.innerHTML=`
    ${wrongLetters.length>0 ? `<h3>Wrong Letters</h3>` :''}
    ${wrongLetters.map(letter=> `<span>${letter}</span>`)}    `
}
window.addEventListener('keydown',function(e){
    if(e.keyCode>=65 && e.keyCode<=90){
        var  letter=e.key;
        if (selectedWord.includes(letter)==true){
            if(!correctLetters.includes(letter)==true){
                correctLetters.push(letter)
                displayWord();
            }
            else{
               alert("You have already uuse this letter")
            }
        }
        else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter)
               updateWrongLetter();
            }
        }
    }
})
displayWord()