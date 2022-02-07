//fetch api

document.getElementById('button1').addEventListener('click', getText);

function getText(){
    fetch('test.text')
    .then(function(response){
        console.log(response)
    });
}