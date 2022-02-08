/*
Custom Http library
library for making http request

version 2.0.0
author: louisa

*/


class EasyHTTP {
// Make an HTTP GET Request 
get(url) {
    
    return new Promise((resolve, reject)=>{
        fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
    };

    //make http post request
    post(url, data) {
    
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
        })
        };


    //update a post request with PUT method

        put(url, data) {
    
            return new Promise((resolve, reject)=>{
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
              .then(res => res.json())
              .then(data => resolve(data))
              .catch(err => reject(err));
            })
            };
    
    //make a HTTP delete request
    delete(url) {
    
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'Delete',
                headers: {
                    'Content-type': 'application/json'
                }
            })
          .then(res => res.json())
          .then(() => resolve('Resource Deleted'))
          .catch(err => reject(err));
        })
        };
}
