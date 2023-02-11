// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

var mycallback=function(data){
    console.log('got data' + data)
}

var usingItnow= function(callback){
    callback('get it?');
}
usingItnow(mycallback)