function fetch(){
    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


//supplying request

async function postData(url, data){
    const response= await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header

    });
    return response.json(); // parses JSON response into native JavaScript objects
}


postData('https://example.com/answer', { answer: 42 })
.then(data => {console.log(data)});


//uplodaing json Data
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

//uploading a file
// Files can be uploaded using an HTML <input type="file" /> input element, FormData() and fetch().
const formData= new FormData();
const fileField=document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);


fetch('https://example.com/profile/avatar', {
   method: 'PUT' ,
   body: formData
})
.then(response => response.json())
.then(result => {console.log('Success', result);})
.catch(error => console.log(error));

//iuploading mutliple files
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});