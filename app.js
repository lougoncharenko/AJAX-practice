//fetch api


//using a get request with txt
document.getElementById('button1').addEventListener('click', getText);

function getText(){
    fetch('text.txt')
    .then(function(response){
        console.log(response)
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML=data;
    })
    .catch(function(error){
        console.log(error);
    })
}

