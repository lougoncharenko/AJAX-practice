//es7 async and await
//chrome can run this but use fetch if its not available

async function myFunc(){


    const promise=new Promise((resolve, reject) => {
        setTimeout(()=> resolve ('Hello'), 1000);
    });

    const error =true;
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