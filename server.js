
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3333;

const server=http.createServer(app);

const promise = new Promise(function(resolve,reject){

    if(false){
        resolve("Some messege appar");
    }
    else{
        reject("some error occurs");
    }
});



promise
.then(function(message){
    console.log('message');

})

.catch(function(error){
    console.log('error');
});



/*promise.then(function(message){
    console.log('message');

},
function(error){
    console.log('error');
}
);

*/ 

server.listen(port);