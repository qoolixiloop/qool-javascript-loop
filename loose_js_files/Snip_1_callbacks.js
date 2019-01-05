var users=["Sam","Ellie","Bernie"]
function addUser(username,callback){
  setTimeout(function(){
    users.push(username);
    callbacky();
  },200);
}
function getUsers(){
  setTimeout(function(){
    console.log(users);
  },100);
}
addUser("Jake", getUsers)
//addUser("Jake",)
getUsers();
