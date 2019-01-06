#!/usr/bin/env node

/*shows http server, routing, js to send http strings, 
 * file picker, button for post request*/
//source: https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp

//http server
var http = require('http');

//form module
var formidable = require('formidable');

//filesystem
var fs = require('fs');

//create server on localhost 8083
//get: creating and sending http
//post: handling of fileupload request
http.createServer(function (req, res) {
  
  //post request to upload file
  if (req.url == '/fileupload') {
    
    //formidable object to parse incoming form
    var form = new formidable.IncomingForm();
    
    //parse incoming request, 
    //call anonymous function with extracted arguments
    form.parse(req, function (err, fields, files) {
      
      //some temporary folder: file is stored here right now
      var oldpath = files.filetoupload.path;
      
      //file should be stored here:
      var newpath = '/home/benzro/Documents/LxTerminal_UnixCommands/'+
        'JavaScript_Snippets/loose_js_files/' + files.filetoupload.name;
      
      //rename means move, 
      //anonymous function has access to first two arguments
      fs.rename(oldpath, newpath, function (err) {
        
        //if rename throw an error
        if (err) throw err;
        
        //response to browser that file has been uploaded
        res.write('File uploaded and moved! '+ oldpath + ' ' + newpath);
        
        //end of response
        res.end();
      
      });
    
    });

  } else {
    
    //response to URL http://localhost:8083/anything but fileupload
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    //form begin 
    //action: fileupload 
    //method: post
    res.write('<form action="fileupload" method="post" ' + 
      ' enctype="multipart/form-data">');
    
    //input type: file picker button
    res.write('<input type="file" name="filetoupload"><br>');
    
    //input type: submit button
    res.write('<input type="submit">');
    
    //form end
    res.write('</form>');
    
    return res.end();
  
  }

}).listen(8083); 
