function savePost(){


const bodyPost = getBodyPost()

fetch ("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: bodyPost
})
.then(data => data.json())
.then(response => console.log(response))

}

function updatePost()
{
    
    const bodyPost = getBodyPost()

    fetch ("https://jsonplaceholder.typicode.com/posts/101",{
        method:"PUT",
        body: bodyPost
        
    })
    .then(data => data.json())
    .then(response => console.log(response))
}

function removePost(){
    fetch ("https://jsonplaceholder.typicode.com/posts/101",{
        method: "DELETE",
         
    })
    .then(data => data.json())
    .then(response => console.log(response))
}



function getBodyPost(){

    const inputTitle = document.getElementById("input-title").value
    const inputbody = document.getElementById("input-body").value
    const inputUserId = document.getElementById("input-user-id").value

    const body = JSON.stringify({
userId : inputUserId,
title: inputTitle,
body: inputbody

})

return body


}