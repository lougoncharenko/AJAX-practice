//using a get request with txt
document.getElementById('button1').addEventListener('click', getText);

function getText(){
    fetch('text.txt')
    .then(response => response.text())
    .then(data =>{
        console.log(data)
        document.getElementById('output').innerHTML=data
    })
    .catch (error => {console.log(error) });
}


//get local JSON data
document.getElementById('button2').addEventListener('click', getJson);

function getJson(){
    fetch('post.json')
    .then(response =>response.json())
    .then(data => {
       console.log(data);
        let output="";
        data.forEach((post) =>{
          output += `<li>${post.title}</li>`
        });
        document.getElementById('output').innerHTML=output;
    })
    .catch(error =>{
        console.log(error);
    })
}


//get from external API
document.getElementById('button3').addEventListener('click', getApi);

function getApi(){
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let output="";
        data.forEach(user => {
          output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML=output;
    })
    .catch(error =>{
        console.log(error);
    })
}

function handleErrors(response){
    if (!response.ok) throw new Error (response.error);
    return response;
}
