//fetch api

document.getElementById('button1').addEventListener('click', getText);

function getText(){
    fetch('text.txt')
    .then(function(response){
        console.log(response)
        return response.text();
    })
    .then(function(data){
        console.log(data);
    });
}