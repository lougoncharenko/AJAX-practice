function loadAsset(url, type, callback){
    let xhr=new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType=type;

    xhr.onload=function(){
        if(this.status===200){
            callback(xhr.response);
        };
        xhr.send();
    }
}

function displayImage(blob){
    let objectURL=URL.createObjectURL(blob);

    let image=document.createElement('img');
    image.src=objectURL;
    document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);