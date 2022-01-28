//es5 object-oriented programming


//create a constructor
function easyHTTP(){
    this.http=new XMLHttpRequest();
}

//make an http get request
easyHTTP.prototype.get=function(url, callback){
this.http.open('GET', url, true);
//use arrow function to let it work because this.http is not defined in this function scope but arrow functions use lexical scope
//A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.
this.http.onload= () => {
    if(this.http.status===200){
        callback(null, this.http.responseText); 
    } else{
        callback('Error: ' + self.http.status);
    }
}
this.http.send();
}

// easyHTTP.prototype.get=function(url){
//     this.http.open('GET', url, true);
//     let self=this;
//     this.http.onload= () => {
//         if(self.http.status === 200){
//             return self.http.responseText;
//         }
//     }
//     this.http.send();
//     }

//make an http post request
//make an http put request
//make an http delete request