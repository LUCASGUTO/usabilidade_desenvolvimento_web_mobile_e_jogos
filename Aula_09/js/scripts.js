
function onPageLoad(){

    fetch("https://randomuser.me/api/?results=50")
    .then(function response(data){
        insertUsers(data)
    })

    loadComponents()
}

function insertUsers (data){
    console.log(data)
}

function loadComponents(){

    console.log("loadComponents")


}