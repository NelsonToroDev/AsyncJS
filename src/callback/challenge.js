const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        // 0 no initialized
        // 1 loading no sent yet
        // 2 already executed sent
        // 3 working on request
        // 4 completed
        if(xhttp.readyState === 4){
            // http 200 OK
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }
            else{
                const error = new Error('Error ' + urlApi);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}

// callback hell
fetchData(`${API}/products`, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3)return console.error(error3);
            console.log("Product:")
            console.log(data1[0]);
            console.log(`category title: ${data2.title}`);
            console.log(data2);
            console.log(`category Name: ${data3.name}`);
            console.log(data3);
        });
    });
});

