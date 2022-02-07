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


//get local JSON data
document.getElementById('button2').addEventListener('click', getJson);

function getJson(){
    fetch('post.json')
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
    })
    .catch(function(error){
        console.log(error);
    })
}
