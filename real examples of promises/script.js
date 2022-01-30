//extended version
let promise= fetch('coffee.jpg');

let promise2=promise.then(response => {
    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else{
        return response.blob();
    }
})

let promise3= promise2.then(myBlob => {
    let objectURL=URL.createObjectURL(myBlob);
    let image=document.createElement('img');
    image.src=objectURL;
    document.body.appendChild(image);
})

let errorCase= promise3.catch(e => {
    console.log('There has been a promblem with your fetch operation: ' +e.message);
});



//simplified way to do it
fetch('coffee.jpg')
.then(response =>{
    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else{
        return response.blob();
    } 
})
.then(myBlob => {
    let objectURL=URL.createObjectURL(myBlob);
    let image=document.createElement('img');
    image.src=objectURL;
    document.body.appendChild(image);
})
.catch(e =>{
    console.log('There has been a promblem with your fetch operation: ' +e.message);
})
