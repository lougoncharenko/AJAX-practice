class EasyHTTP{
    async get(url){
        const response=await fetch(url);
        const resData=await response.json();
        return resData;
    }

    //post request
    async post(url,data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData=await response.json();
        return resData;
    }
    //put request
    async put(url,data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData=await response.json();
        return resData;

}
//delete request
async delete(url){
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const resData=await 'Resource deleted';
    return resData;
}
}