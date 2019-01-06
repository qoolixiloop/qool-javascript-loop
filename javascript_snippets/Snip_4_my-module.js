/*shows how to make moduls and static functions*/
//source: https://www.w3schools.com/nodejs/nodejs_modules.asp
 
//js file or module is like a class 
//exports.func is like a static function
//mymod=require(./Snip_4_mymodule)
//call: mymod.myDateTime()
exports.myDateTime = function () {
  return Date();
}; 
