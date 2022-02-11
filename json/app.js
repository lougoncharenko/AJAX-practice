//get local json data
document.getElementById('button1').addEventListener('click', getJSON);

function getJSON(){
    fetch('superhero.json')
    .then(response =>
        response.json())
    .then(data => {
        console.log(data);
        let output="";
        data.forEach((superhero) =>{
          output += `${superhero.name}`
          output += `<li> Age:${superhero.age}</li>`
          output += `<li> Real Identity:${superhero.secretIdentity}</li>`
          output += `<li> Powers:${superhero.powers}</li>`
        });
        document.getElementById('output').innerHTML=output;
    })
    
    .catch(error => console.log(error));
}