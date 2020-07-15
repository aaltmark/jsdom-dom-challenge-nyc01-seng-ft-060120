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
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const counter = document.getElementById("counter");
    const form = document.getElementById("comment-form")
    const comment = document.getElementById("comment-input")
    const commentList = document.getElementById("list")

    plusButton.addEventListener("click", function(e){
        counter.textContent = parseInt(counter.textContent, 10) + 1 
    })

    minusButton.addEventListener("click", function(e){
        counter.textContent = parseInt(counter.textContent, 10) - 1 
    })

    form.addEventListener("submit", function(e){
        e.preventDefault
        const addCommentTag = document.createElement("p"); 
        addCommentTag.textContent = comment 
        addCommentTag.append(commentList);
    })

    //function addComment(newComment){
        //newComment.preventDefault(); 
        //const addCommentTag = document.createElement("p"); 
        //addCommentTag.textContent = comment 
        //addCommentTag.append(commentList);
        //commentList.target.reset 
    //}
})