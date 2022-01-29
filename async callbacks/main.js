//async call back



//load asset function takes a call back as a parameter
//along with a url and content type
//it uses a xmlhttp request to fetch the resource at the given resource
function loadAsset(url, type, callback){
    let xhr=new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType=type;

    xhr.onload=function(){
        callback(xhr.response);
    };

    xhr.send();
}


//we created a displayIMage function that had a blob passed 
//into it as an object url
//then the function creates an image to display the url in
//and appends it to the documents <body>
function displayImage(blob){
    let objectURL=URL.createObjectURL(blob);

    let image=document.createElement('img');
    image.src=objectURL;
    document.body.appendChild(image);

}

loadAsset('https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG', 'blob', displayImage);