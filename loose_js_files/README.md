## Start with
$node filename

##npm_change_location_of_global_packages.sh
/*bash script to change installation directory for global node modules to home path*/
//reasoning: no sudo necessary, which would pose a security risk

##Snip_1_callbacks.js
/*JS: Shows the flow of information with async pattern and callback function*/
function addUser(username,callback){
  setTimeout(function(){
    callback();
  },200);
}

##Snip_2_readfilesync_readfilesasync.js
/*Node: Shows the flow of information with async readFile and callback function*/
var fs = require("fs");
fs.readFile('Snip_2_input.txt', function (err, data) {
     if (err) return console.error(err);
     console.log(data.toString());
});

##Snip_3_eventloop.js
/*Node: Shows node's observation pattern*/
//EventEmitter binds event with event handler function
//When event is fired, event handler is called
var events = require('events');
events.EventEmitter().on('connection', connectHandler);

##Snip_4_demo_module.js and Snip_4_mymodule.js
/*JS: Shows shebang for node, http server, call own module*/
/*shows how to make moduls and static functions*/
//js file or module is like a class 
//exports.func is like a static function
//mymod=require(./Snip_4_mymodule)
//call: mymod.myDateTime()
exports.myDateTime = function () {
  return Date();
}; 

##Snip_5_uploadfiles.js
/*shows http server, routing, js to send http strings, 
 * file picker, button for post request*/
//server routing
  if (req.url == '/fileupload') {
//object to parse incoming forms
 var form = new formidable.IncomingForm();
//move files
fs.rename(oldpath, newpath, function (err) {
//write http in js
res.write('<form action="fileupload" method="post" ' + 
     ' enctype="multipart/form-data">');

##Snip_6_nodejs_eventemitter.js
/*similar to Snip_3*/
//also shows how event emitter removes/unbinds listeners from events
