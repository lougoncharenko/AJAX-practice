//es7 async and await
//chrome can run this but use fetch if its not available

async function myFunc(){


    const promise=new Promise((resolve, reject) => {
        setTimeout(()=> resolve ('Hello'), 1000);
    });

    const error =false;
    if(!error){
        const res= await promise; //wait until promise is resolved
        return res;
    }else{
       await Promise.reject(new Error('Something went wrong'))
    }
}

// console.log(myFunc());
 //returns a promise so we need to extract the response




 myFunc()
.then(response=> console.log(response))
.catch(error=>console.log(error));
//adding the async makes it return a promise


async function getUsers(){
    //await response of the fetch call
    const response  =await fetch('https://api.github.com/users');
    //only proceed once its resolved
    const data= await response.json();
    //only ptoceeed once second promise is resolved
    return data;
}


getUsers().then(users => console.log(users));
