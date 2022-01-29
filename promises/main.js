//promises are the new style of async code in modern WEB APIS
//fetch( API)- more efficient version of Xtmlhttprequet


//fetch takes a single parameter (the url of the resource)
//and returna a promise
//the promise is an object representing the completion or failure of the async operation
// fetch('products.json').then(function(response){
//     return response.json();
//     }).then(function(json){
//         let products=json;
//         initialize(products);
//     }).catch(function(err){
//         console.log('Fetch problem: ' + err.message);
//     });


    //.then containsa callback that receives as input
    //the result from the previos successful operation
    //the catch () block ends the run if any of the .then() fail




    console.log('Starting');
    let image;

    fetch('https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG').then((response) => {
        console.log('It worked :)')
        return response.blob();
        }).then((myBlob) =>{
            let objectURL= URL.createObjectURL(myBlob);
            image=document.createElement('img');
            image.src=objectURL;
            document.body.appendChild(image);
        }).catch((error)=>{
            console.log('There has been a problem with your fetch operation: ' + error.message);
        })

        console.log('All done!')

