document.getElementById('button').addEventListener('click', loadData);


//function load data

function loadData(){
    //create an XHR object
    const xhr=new XMLHttpRequest();

    //open (we passed in a type of request, the type of txt youre reading )
    //get request means you want to read the file
   xhr.open('GET', 'data.txt', true);

   //makinf sure the request is ok
   xhr.onload=function(){
       if(this.status ===200){
           console.log(this.responseText);

       }

   }
   xhr.onreadystatechange=function(){
       if(this.status===200 && this.readyState === 4){
           console.log(this.responseText)
       }
   } 
   xhr.send(); //calls the request
}




//http statuses
//200: ok
//403: forbidden
//404: not found
