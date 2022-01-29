//es5 object-oriented programming


//create a constructor
function easyHTTP(){
    this.http=new XMLHttpRequest();
}

//make an http get request
// easyHTTP.prototype.get=function(url, callback){
// this.http.open('GET', url, true);
// //use arrow function to let it work because this.http is not defined in this function scope but arrow functions use lexical scope
// //A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.
// this.http.onload= () => {
//     if(this.http.status===200){
//         callback(null, this.http.responseText); 
//     } else{
//         callback('Error: ' + self.http.status);
//     }
// }
// this.http.send();


easyHTTP.prototype.get=function(url, callback){
    this.http.open('GET', url, true);

    let self=this;
    this.http.onload= () => {
        if(self.http.status === 200){
           callback(null, self.http.responseText);
    }else{
        callback('Error:' +self.http.status);
    }
}
    this.http.send();
 }


//make an http post request
easyHTTP.prototype.post =function(url, data, callback){
this.http.open('POST', url, true);
this.http.setRequestHeader('Content-type', 'application/json')


let self=this;
this.http.onload= () => {
 callback(null, self.http.responseText);
}
this.http.send(JSON.stringify(data));
}


//make an http put request
easyHTTP.prototype.put =function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json')
    
    
    let self=this;
    this.http.onload= () => {
     callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
    }

//make an http delete request

easyHTTP.prototype.delete=function(url, callback){
    this.http.open('DELETE', url, true);

    let self=this;
    this.http.onload= () => {
        if(self.http.status === 200){
           callback(null, 'Post Deleted');
    }else{
        callback('Error:' +self.http.status);
    }
}
    this.http.send();
 }