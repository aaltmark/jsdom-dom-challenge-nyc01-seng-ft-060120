/*Variables 
    1. Counter id = counter
    2. Buttons 
        minus id = minus
        plus id = plus
        heard id = heart 
        pause id = pause 
    3. submit button id = submit 
*/

document.addEventListener("DOMContentLoaded", function(e){
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    //const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const counter = document.getElementById("counter");
    //const form = document.getElementById("comment-form")
    const comment = document.getElementById("comment-input")
    const commentList = document.getElementById("list")

    plusButton.addEventListener("click", function(e){
        counter.textContent = parseInt(counter.textContent, 10) + 1 
    })

    minusButton.addEventListener("click", function(e){
        counter.textContent = parseInt(counter.textContent, 10) - 1 
    })

    const counterID = window.setInterval(timeIncrement, [1000]);

    function timeIncrement() {
        counter.textContent = parseInt(counter.textContent, 10) + 1 
    }

    pauseButton.addEventListener("click", function(e){
        window.clearInterval(counterID)

        pauseButton.innerHTML = ("start")

        pauseButton.addEventListener("click", function(e){
            e = window.setInterval(timeIncrement, [1000]);
        })

        
        // const timeOutID = window.setTimeout(timePause, [0])
        // function timePause(){
        //     counter.textContext
        // }
        
    })


    const form = document.getElementById("comment-form")
    form.addEventListener("submit", addComment)

    function addComment(newComment){
        newComment.preventDefault(); 
        const addCommentTag = document.createElement("p"); 
        addCommentTag.textContent = comment.value
        commentList.appendChild(addCommentTag);
        form.reset();
    }


//create an event listener 
// an li under the ul for likes 
// a span for each li 
//

const heartButton = document.getElementById("heart");

heartButton.addEventListener("click", function(e){
    const heartLi = document.createElement("li");
    const heartSpan = document.createElement("span");
    let count = 0;
    //function heartCounter(){
    heartButton.onclick = function() {
        count+= 1;
    }
    //heartSpan.textContent = heartCounter();
    
    
    
    heartLi.innerHTML = `${counter.innerHTML} has been liked ${heartSpan.textContent}`
    console.log(count)
})



})




//   count = 0;
//   heartButton.onclick = function() {
//   count += 1;
//   heartSpan.innerHTML = count;
// };



