## Intro
### Start scripts with:
$ node filename

### Config Script: npm_change_location_of_global_packages.sh
Bash script to change installation directory for global node modules to home path.  
Reasoning: after running the script, sudo is no longer necessary, which would pose a security risk.  

## Javascript snippets

### Snip_1_callbacks.js
Source: https://www.youtube.com/watch?v=xHneyv38Jro.  
  
Shows the flow of information with async pattern and callback function.  
  
Code patterns:  
```js
function addUser(username,callback){
  setTimeout(function(){
    callback();
  },200);
}
```

### Snip_2_read-file-sync_read-file-async.js
Source: https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
  
Shows the flow of information with async readFile and callback function.  
  
Code patterns:  
```js
var fs = require("fs");
fs.readFile('Snip_2_input.txt', function (err, data) {
     if (err) return console.error(err);
     console.log(data.toString());
});
```

### Snip_3_event-loop.js
Source: https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm
  
Shows node's observation pattern.  
- EventEmitter binds event with event handler function.  
- When event is fired, event handler is called.  
  
Code patterns:  
```js
var events = require('events');
events.EventEmitter().on('connection', connectHandler);
```

### Snip_4_demo_module.js and Snip_4_my-module.js
Source: 
  
Shows the shebang for node interpreter, uses http server, calls own module, shows how to make moduls and static functions.  
- js file or module is like a class.  
- exports.func is like a static function.  
  
Code patterns:  
```js
mymod=require(./Snip_4_my-module)
mymod.myDateTime()
exports.myDateTime = function () {
  return Date();
}; 
```

### Snip_5_upload-files.js
Source: 
  
Shows http server, routing, js to send http strings, file picker, button for post request.  
  
Code patterns:  
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

### Snip_6_node-js_event-emitter.js
Source:  https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm

Shows node's observation pattern similar to Snip_3.  
Also shows how event emitter removes/unbinds listeners from events.
