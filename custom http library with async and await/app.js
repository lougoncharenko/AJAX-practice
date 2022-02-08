const http=new EasyHTTP;

//get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));

//user data
const data ={
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}


//create user
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(error => console.log(error));

//update post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(error => console.log(error));

//delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(error => console.log(error));

