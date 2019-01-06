## Intro
### Start scripts with:
$ node filename

### Config Script: npm_change_location_of_global_packages.sh
Bash script to change installation directory for global node modules to home path.  
Reasoning: after running the script, sudo is no longer necessary, which would pose a security risk.  

## Javascript snippets

### Snip_1_callbacks.js
Shows the flow of information with async pattern and callback function.  
Code Patterns:  
```js
function addUser(username,callback){
  setTimeout(function(){
    callback();
  },200);
}
```

### Snip_2_readfilesync_readfilesasync.js
Shows the flow of information with async readFile and callback function.  
Code Patterns:  
```js
var fs = require("fs");
fs.readFile('Snip_2_input.txt', function (err, data) {
     if (err) return console.error(err);
     console.log(data.toString());
});
```

### Snip_3_eventloop.js
Shows node's observation pattern.  
- EventEmitter binds event with event handler function.  
- When event is fired, event handler is called.  

Code Patterns:  
```js
var events = require('events');
events.EventEmitter().on('connection', connectHandler);
```

### Snip_4_demo_module.js and Snip_4_mymodule.js
Shows the shebang for node interpreter, uses http server, calls own module, shows how to make moduls and static functions.  
- js file or module is like a class.  
- exports.func is like a static function.  

Code Patterns:  
```js
mymod=require(./Snip_4_mymodule)
mymod.myDateTime()
exports.myDateTime = function () {
  return Date();
}; 
```

### Snip_5_uploadfiles.js
Shows http server, routing, js to send http strings, file picker, button for post request.  

Code Patterns:  
```js
//server routing
if (req.url == '/fileupload') {
//object to parse incoming forms
var form = new formidable.IncomingForm();
//move files
fs.rename(oldpath, newpath, function (err) {
//write http in js
res.write('<form action="fileupload" method="post" ' + 
     ' enctype="multipart/form-data">');
```

### Snip_6_nodejs_eventemitter.js
Shows node's observation pattern similar to Snip_3.  
Also shows how event emitter removes/unbinds listeners from events.
