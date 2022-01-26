//callback functions
//a function passed in as a paramater


// //for each functions are used for objects and arrays
// let apples=['granny smith','red delicious', 'pink lady', 'fuji', 'golden delicious', 'mcintosh']
// apples.forEach(function(apple){
//   console.log(apple)
// })

const posts=[
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post){
// setTimeout(function(){
//     posts.push(post);
// }, 2000);
// }

// function getPosts(){
// setTimeout(function(){
// let output=' ';
// posts.forEach(function(post){
//     output +=` <li>${post.title}</li>`;
// });
// document.body.innerHTML=output;
// }, 1000);
// }

// createPost({title: 'Post three', body: 'This is post three'});

// getPosts();

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback()
    }, 2000);
    }
    
    function getPosts(){
    setTimeout(function(){
    let output=' ';
    posts.forEach(function(post){
        output +=` <li>${post.title}</li>`;
    });
    document.body.innerHTML=output;
    }, 1000);
    }

    createPost({title: 'Post three', body: 'This is post three'}, getPosts);