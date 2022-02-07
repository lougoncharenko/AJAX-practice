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
        let output="";
        data.forEach(function(post){
          output += `<li>${post.title}</li>`
        });
        document.getElementById('output').innerHTML=output;
    })
    .catch(function(error){
        console.log(error);
    })
}


//get from external API
document.getElementById('button3').addEventListener('click', getApi);

function getApi(){
    fetch('https://api.github.com/users')
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let output="";
        data.forEach(function(user){
          output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML=output;
    })
    .catch(function(error){
        console.log(error);
    })
}
