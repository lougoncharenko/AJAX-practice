//event listener to get data
document.getElementById('button').addEventListener('click', loadData);

//function load data
function loadData(){
    //create an XHR object
    const xhr= new XMLHttpRequest();

    //OPEN=where we specify the type of request we wanna make
    xhr.open('GET', 'data.txt', true);
    //get means you want to read the file
    //'data.txt' is the file
   
    //optional -used for spinners/loaders
    xhr.onprogress=function(){
        console.log('READYSTATE', xhr.readyState ); //processing the request
    }


    xhr.onload=function(){
        console.log('READYSTATE', xhr.readyState );
        if(this.status === 200){
        // console.log(this.responseText)
        document.getElementById('output').innerHTML= `<h1> ${this.responseText} </h1>`
        }
    }

    // xhr.onreadystatechange= function(){
    //     console.log('READYSTATE', xhr.readyState );
    //     if(this.status === 200 && this.readyState ===4){
    //         console.log(this.responseText) 
    //     }
    // }

    xhr.onerror=function(){
        console.log("Request error")
    }

    xhr.send();

    /* Ready State values
    0: request not initialized
    1:server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    */

    /*HTTP statuses
    200:ok
    403:forbidden
    404:not found */
}