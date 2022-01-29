const http=new easyHTTP;

//get Posts
http.get('https://jsonplaceholder.typicode.com/posts',
function(err,posts){
if(err)  {
    console.log(err);
} else{
    console.log(posts);
} 

});

//get single post
http.get('https://jsonplaceholder.typicode.com/posts/1',
function(err,post){
if(err)  {
    console.log(err);
} else{
    console.log(post);
} 

});

//create data
const data= {
    title: 'Custom Post',
    body: 'This is a custom post'
};


//create POST
http.post('https://jsonplaceholder.typicode.com/posts',
 data, function(err, post){
    if(err)  {
            console.log(err);
        } else{
            console.log(post);
        } 
});


//create PUT request-update post
http.put('https://jsonplaceholder.typicode.com/posts/1',
 data, function(err, post){
    if(err)  {
        console.log(err);
    } else{
        console.log(post);
    } 
 });

 //delete
  http.delete('https://jsonplaceholder.typicode.com/posts/5',
 function(err,response){
 if(err)  {
     console.log(err);
 } else{
     console.log(response);
 } 
 
 });






