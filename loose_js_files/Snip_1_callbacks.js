/*shows flow of information with callback functions*/

//1.) db
var users=["Sam","Ellie","Bernie"]

//2.)db: add
//function takes two arguments:
//the new user and the callback function
function addUser(username,callback){
  
  console.log("2.1)addUsers() " + Date.now() + ":\n " + username);
  
  //set timeout of 200ms to simulate work
  setTimeout(function(){

    console.log("2.2)addUsers() " + Date.now() + ":\n " + username);
    
    //push username to array users
    users.push(username);

    console.log("2.3)addUsers() " + Date.now() + ":\n " + username);
    
    //start callback function
    //waiting function that is called when all work is done
    callback();

    console.log("2.4)addUsers() " + Date.now() + ":\n " + username);
  
  },200);

  console.log("2.5)addUsers() " + Date.now() + ":\n " + username);

}

//3.) db:get
//acts as callback for function addUser
function getUsers(){

  console.log("3.1)getUsers() " + Date.now() + ":\n " + users);
  
  //set timeout of 100ms to simulate work
  setTimeout(function(){

    //print array to console
    console.log("3.2)getUsers() " + Date.now() + ":\n " + users);

  },100);
    
  console.log("3.3)getUsers() " + Date.now() + ":\n " + users);

}

//4.) takes at least 300ms
console.log("4.)call addUser()" + Date.now() + ":\n " + addUser("Jake", getUsers));

//5.) takes at least 100ms
console.log("5.)call getUsers()" + Date.now() + ":\n " + getUsers());
