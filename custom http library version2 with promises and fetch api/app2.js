const http = new EasyHTTP;

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
 .then(data => console.log(data))
 .catch(err => console.log(err));


 //user data
 const data={
     name: 'John Doe',
     username: 'johndoe',
     email: 'j.doe@gmail.com'

 }


 //create POST
 http.post('https://jsonplaceholder.typicode.com/users', data)
 .then(data => console.log(data))
 .catch(err => console.log(err));


 //update user
 http.put('https://jsonplaceholder.typicode.com/users/2', data)
 .then(data => console.log(data))
 .catch(err => console.log(err));

 //delete user
 http.delete('https://jsonplaceholder.typicode.com/users/2')
 .then(data => console.log(data))
 .catch(err => console.log(err));