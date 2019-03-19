/*Source:
 * https://developer.mozilla.org/
 * en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
 *Run:
 * $ chromium-browser index.html
 *See JS in action:
 * $ node
 * > "copy/paste js code here"
 * */


//IIFE (Immediately Invoked Function Expression)
//(someFuncion)(); makes some function execute immediately
(function() {
  // your page initialization code here
  myIntro();
  // the DOM will be available here
  //adds expressions (expressions evaluate)
  myOneLineExpressions();
  //adds multiline text (statements do not evalueate)
  myMultiLineTextStatements();
  //add footer
  myFooter();
})();


//append p-tag html-elements 
//to div-tag with id=content 
//in index.html
function p(text) {
  console.log(text);
  //create p elements
  var p = document.createElement("p");
  //create text node
  var t = document.createTextNode(text);
  console.log(t);
  //append text to p element 
  p.appendChild(t);
  //append p element to content element
  document.getElementById("content").appendChild(p);
}


//append pre-tag html-elements 
//to div-tag with id=content 
//in index.html
function pre(text) {
  console.log(text);
  //+= to append
  document.getElementById("content").innerHTML += '<pre>'+ text +'</pre>';
}


//append any tag
//to div-tag with id=content
//in index.html
function tag(tag, text){
  //+= to append
  document.getElementById("content").innerHTML += 
    '<'+tag+'>' + text + '</'+tag+'>';
}


//
function myIntro(){
  tag("h1","JavaScript Cheat-Sheet");
  tag("div","This cheat-sheet is generated with one single JavaScript file <strong>cheat-sheet.js</strong>. The <strong>index.html</strong> only contains some minimal styling and one empty div-tag with id=content, where the whole content is plugged in.<br>")
  tag("xmp",`
    <!DOCTYPE html>
    <html>
      <head>
        <title>JS</title>
      </head>
      <body>
        <style>
          #content > p,pre {margin: 0.1em; padding:0.2em; background-color:#eee } 
          #content > p,pre:nth-child(2n) { background-color:#ddd }
        </style>
        <div id="content"></div>
          <script type="text/javascript" src="cheat-sheet.js"></script>
      </body>
    </html>
    `)
  tag("p","To start this web-page open a shell, then enter: <strong>$ cd project-folder</strong> followed by <strong>$ chromium-browser index.html</strong>");
  tag("p","To try the code out open a shell, then enter:<br><strong>$ node</strong> and copy/paste the content.<br>");
  tag("div", "<br><strong>Source</strong> of the cheat-sheet content:<br>https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript<br>")

}


//footer
function myFooter(){
  tag("div", "<br>qoolixiloop, 9. Jan. 2019")
}


//prepares one liners with code and calculated result
function myOneLineExpressions(){
  tag("h2","JavaScript Basic Types");
  tag("h3", "Math");
  p("Math.sin(3.5)="
    +Math.sin(3.5));
  p("2 * Math.PI * 10="
    +2 * Math.PI * 10);
  tag("h3","ParseInt with arguments string and base");
  p("parseInt('123', 10)="
    +parseInt('123', 10));
  p("parseInt('11', 2)="
    +parseInt('11', 2)); 
  tag("h3","String methods");
  p("'hello'.length="
    +'hello'.length);
  p("'hello'.charAt(0)="
    +'hello'.charAt(0));
  p("'hello, world'.replace('world', 'mars')="
    +'hello, world'.replace('world', 'mars')); 
  p("'hello'.toUpperCase()'="
    +'hello'.toUpperCase());
  tag("h3","Boolean");
  p("Boolean('')="
    +Boolean(''));
  p("Boolean(234)="
    +Boolean(234));
}


//prepares multiline text
function myMultiLineTextStatements(){
  tag("h2","JavaScript Variables");
  tag("div","Blocks do not have scope, only functions have scope.<br><br>")
  pre(`
    //var is a function scoped variable
    var a; 
    var name = 'Simon';
    //let is a block scoped variable
    let a; 
    let name = 'Simon';
    //const is a block scoped constant
    const Pi = 3.14; // variable Pi is set 
    Pi = 1; // throws an error: you cannot change a constant.
    `)
  pre(`
    // myLetVariable is *not* visible out here
    for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
      // myLetVariable is only visible in here
    }
    // myLetVariable is *not* visible out here
    `)
  pre(`
    // myVarVariable *is* visible out here 
    for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) { 
      // myVarVariable is visible to the whole function 
    } 
    // myVarVariable *is* visible out here
    `)
  tag("h2","JavaScript C-family control structures");
  tag("h3","If, elseif, else - statement");
  pre(`
    //if, else if, else
    var name = 'kittens';
    if (name == 'puppies') {
      name += ' woof';
    } else if (name == 'kittens') {
      name += ' meow';
    } else {
      name += '!';
    } // kittens meow
    name == 'kittens meow'; // true
    `);
  tag("h3","Some more branching");
  pre(`
    //short circuit logic && and ||
    var name = o && o.getName()
    var name = cachedName || (cachedName = getName());
    `);
    pre(`
    //ternary operator for conditional expressions
    age=20;
    var allowed = (age > 18) ? 'yes' : 'no';
    allowed // yes
    `);
  pre(`
    //switch statment for multiple branches
    switch (action) {
      case 'draw':
        drawIt();
        break;
      case 'eat':
        eatIt();
        break;
      default:
        doNothing();
    }
    `);
  tag("h3","While - statement");
  pre(`
    //while statement
    while (true) {
      // an infinite loop!
    }
    `);
  tag("h3","Do, while - statement");
  pre(`
    //do while statement
    var input;
    do {
      input = get_input();
    } while (inputIsNotValid(input));
    `);
  tag("h3","For - statement with var i");
  pre(`
    for (var i = 0; i < 5; i++) {
      // Will execute 5 times
    }
    // is visible here
    `);
  tag("h3","For - statement with let i");
  pre(`
    for (var i = 0; i < 5; i++) {
      // Will execute 5 times
    }
    // is not visible here
    `);
  tag("h3","For - statement with array");
  pre(`
    for (let value of array) {
      // do something with value
    }
    `);
  tag("h3","For - statement with object (hash map)");
  pre(`
    for (let property in object) {
      // do something with object property
    }
    `);
  tag("h2","JavaScript Objects");
  tag("div","JS-Objects are data structures. In other languages they are called HashMaps, Dictionaries, Associative arrays. But they are also used to define functions or classes.<br><br>")
  pre(`
    //create empty objects
    var obj = new Object();
    var obj = {};
    `)
  pre(`
    //objects are initialized with 
    //a comma-separated list of key:value pairs
    //(json-format)
    var obj = {
      name: 'Carrot',
      _for: 'Max', // 'for' is a reserved word, use '_for' instead.
      details: {
        color: 'orange',
        size: 12
      }
    };
    `);  
  pre(`
    //access attributes
    obj.details.color; // orange
    obj['details']['size']; // 12
    `);  
  pre(`
    //create an object prototype
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    `);  
  pre(`
    //define an object with new keyword
    var obj = new Person('You', 24); 
    `);  
  pre(`
    //set or get attribute with dot notation
    obj.name = 'Simon';
    var name = obj.name;
    //set or get attribute with  bracket notation
    obj['name'] = 'Simon';
    var name = obj['name'];
    `);  
  pre(`
    //output to shell
    obj
    `);  
  pre(`
    //set attribute not in prototype
    obj.newattribute="value"
    `);  
  pre(`
    //delete attribute
    delete myObject.age;
    delete myObject['age'];
    `);  
  tag("h2","JavaScript Arrays");
  pre(`
    //create and initialize arrays
    var a = new Array();
    a[0] = 'dog';
    a[1] = 'cat';
    a[2] = 'hen';
    var b = ['dog', 'cat', 'hen'];
    var c = ['dog', 'cat', 'hen'];
    c[100] = 'fox';
    `);
  pre(`
    //length property
    a.length; // 3
    b.length; // 3
    c.length; // 101
    `);
  pre(`
    for (var i = 0; i < a.length; i++) {
      // Do something with a[i]
    }
    `);
  pre(`
    for (const currentValue of a) {
      // Do something with currentValue
    }  
    `);
  pre(`
    ['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
      // Do something with currentValue or array[index]
    });  
    `);  
  pre(`
    Method name           Description
    a.toString()          Returns a string with the toString() of each element separated by commas.
    a.toLocaleString()    Returns a string with the toLocaleString() of each element separated by commas.
    a.concat(item1,...)   Returns a new array with the items added on to it.
    a.join(sep)           Converts the array to a string — with values delimited by the sep param
    a.pop()               Removes and returns the last item.
    a.push(item1,...)     Appends items to the end of the array.
    a.reverse()           Reverses the array.
    a.shift()             Removes and returns the first item.
    a.slice(start[,end])  Returns a sub-array.
    a.sort([cmpfn])       Takes an optional comparison function.
    a.splice(start, delcount[, item1,...])  Lets you modify an array by deleting a section and replacing it with more items.
    a.unshift(item1,...)  Prepends items to the start of the array.
    `);  
  tag("h2","JavaScript Functions");
  pre(`
    //function definition
    function add(x, y) {
      var total = x + y;
      return total;
    }
    `);  
  pre(`
    //print function definiton in e.g. node.js
    console.log(charsInBody.toString())
    `);  
  pre(`
    //functions have arguments array 
    //which holds all passed arguments
    //as comma separated list
    function avg() {
      var sum = 0;
      for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
      }
      return sum / arguments.length;
    }
    `);
  pre(`
    //pass arguments as array
    function avgArray(arr) {
      var sum = 0;
      for (var i = 0, j = arr.length; i < j; i++) {
        sum += arr[i];
      }
      return sum / arr.length;
    }
    `);
  pre(`
    //rest parameter syntax
    //pass arguments as comma separated list
    //or as array with apply() method
    function avgRestPara(firstArg, ...args) {
      var sum = 0;
      for (let value of args) {
        sum += value;
      }
      return sum / args.length;
    }
    `)
  pre(`
    //arguments are optional, with default 'undefined'
    add() //error: undefined + undefined
    //you can pass more arguments
    add(2, 3, 4); // 5 
    avg(2, 3, 4, 5); // 3.5
    //here you can pass arrays
    avgArray([2, 3, 4, 5]); // 3.5
    //rest parameter takes any object
    //but use apply method for arrays
    //the first argument is the object threated as this. (here null)
    avgRestPara(99999, 2, 3, 4, 5); // 3.5
    avgRestPara.apply(null, [99999, 2, 3, 4, 5]); // 3.5
    `);  
  tag("h3","Recursive functions");
  pre(`
    function countChars(elm) {
      if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
      }
      var count = 0;
      for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child);
      }
      return count;
    }
    `);  
  tag("h3","Anonymous functions");
  tag("div","This is semantically equivalent to the function avg() form. It's extremely powerful, as it lets you put a full function definition anywhere that you would normally put an expression. This lets you simulate a block scope, with local variables (functions define scope). <br><br>")
  pre(`
    var avg = function() {
      var sum = 0;
      for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
      }
      return sum / arguments.length;
    };
    `);  
  pre(`
    var a = 1;
    var b = 2;
    //simulate C-block scope with IIFE structure
    //variable b inside is local
    (function() {
      var b = 3;
      a += b;
    })();
    a; // 4
    b; // 2
    `)
  tag("h3","Recursive Anonymous Functions");
  pre(`
    //named IIFE
    //this example only works in browser DOM structure, not in node.js
    var charsInBody = (function counter(elm) {
      if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
      }
      var count = 0;
      for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += counter(child);
      }
      return count;
    })(document.body);
    `);  
  tag("h2","JavaScript Custom Objects");
  tag("div", "In classic Object Oriented Programming, objects are collections of data and methods that operate on that data. JavaScript is a prototype-based language that contains no class statement, as you'd find in C++ or Java (this is sometimes confusing for programmers accustomed to languages with a class statement). Instead, JavaScript uses functions as classes. Actually, with ES6, there are now class, constructor,... keywords as well as arrow or lambda functions, as already known in TypeScript.<br><br>");
  pre(`
    //This works, but it's pretty ugly. 
    //You end up with dozens of functions in your global namespace.
    //notice the return-keyword
    function makePerson(first, last) {
      return {
        first: first,
        last: last
      };
    }
    function personFullName(person) {
      return person.first + ' ' + person.last;
    }
    function personFullNameReversed(person) {
      return person.last + ', ' + person.first;
    }
    //create object without new-keyword
    var s = makePerson('Simon', 'Willison');
    //call functions
    personFullName(s); // "Simon Willison"
    personFullNameReversed(s); // "Willison, Simon"
    `);  
  pre(`
    //Since functions are objects, we can attach member functions
    //'this.' refers to the current object
    //notice the return-keyword
    function makePerson(first, last) {
      return {
        first: first,
        last: last,
        fullName: function() {
          return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
          return this.last + ', ' + this.first;
        }
      };
    }
    //create object without new-keyword
    var s = makePerson('Simon', 'Willison');
    //call member functions
    s.fullName(); // "Simon Willison"
    s.fullNameReversed(); // "Willison, Simon"
    //store output of member function in variable
    var fullName = s.fullName();
    fullName(); // "Simon Wilson"
    //store classe's member function definition
    //output is undefined: on class level attributes are undefined
    var fullName = s.fullName;
    fullName(); // undefined undefined
    `);  
  pre(`
    //Contructor functions: Capitalize the name.
    //instead of return-statement we use this-keyword
    //objects are now created with new-keyword.
    //so, new-keyword actually returns the object.
    function Person(first, last) {
      this.first = first;
      this.last = last;
      this.fullName = function() {
        return this.first + ' ' + this.last;
      };
      this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
      };
    }
    //use new-keyword
    //better but still ugly in the following sense:
    //Every time we create a person object 
    //we are creating two brand new function objects within it 
    var s = new Person('Simon', 'Willison');
    s.fullName() //'Simon Willison'
    `);  
  pre(`
    //function objects
    function personFullName() {
      return this.first + ' ' + this.last;
    }
    function personFullNameReversed() {
      return this.last + ', ' + this.first;
    }
    //That's better: 
    //we are creating the method functions only once, 
    //and assigning references to them inside the constructor function. 
    function Person(first, last) {
      this.first = first;
      this.last = last;
      this.fullName = personFullName;
      this.fullNameReversed = personFullNameReversed;
    }
    //object does not have its own member functions
    //just references.
    var s = new Person('Simon', 'Willison');
    s.fullName() //'Simon Willison'
    `); 
  pre(`
    //add a new function
    function lastNameCaps() {
      return this.last.toUpperCase();
    }
    //object has no reference to new function
    //call function with call-method and pass object as argument
    var s = new Person('Simon', 'Willison');
    lastNameCaps.call(s);
    //this is like adding the function definition to the object
    //and then call it on the object. With the difference, that
    //lastNameCaps.call(s) does not add the definition to the object s.
    s.lastNameCaps = lastNameCaps;
    s.lastNameCaps(); // WILLISON
    `)
  tag("div","<br>Person.prototype is an object shared by all instances of Person. It forms part of a lookup chain (that has a special name, 'prototype chain'): any time you attempt to access a property of Person that isn't set, JavaScript will check Person.prototype to see if that property exists there instead. As a result, anything assigned to Person.prototype becomes available to all instances of that constructor via the this object. This is an incredibly powerful tool. JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to existing objects at runtime.<br><br>")
  pre(`
    //Better: The constructor function only contains
    //the attributes
    function Person(first, last) {
      this.first = first;
      this.last = last;
    }
    //the member functions
    Person.prototype.fullName = function() {
      return this.first + ' ' + this.last;
    };
    Person.prototype.fullNameReversed = function() {
      return this.last + ', ' + this.first;
    };
    //create new object
    var s = new Person('Simon', 'Willison');
    //create new member function at runtime
    Person.prototype.firstNameCaps = function() {
      return this.first.toUpperCase();
    };
    s.firstNameCaps(); // "SIMON"
    `);  
  pre(`
    //you can also add properties to the prototype of built-in
    //JS-Objects like String.
    String.prototype.reversed = function() {
      var r = '';
      for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
      }
      return r;
    };
    var s = 'Simon';
    s.reversed(); // nomiS
    'This can now be reversed'.reversed(); // desrever eb won nac sihT
    `);  
  pre(`
    //create new object and call toString() method
    var s = new Person('Simon', 'Willison');
    s.toString(); // [object Object]
    //add a toString method to prototype
    Person.prototype.toString = function() {
      return '<Person: ' + this.fullName() + '>';
    }
    //now we get some useful info
    s.toString(); // "<Person: Simon Willison>"
    `);  
  pre(`
    //trivial implementation of the new-keyword
    function trivialNew(constructor, ...args) {
      var o = {}; // Create an object
      constructor.apply(o, args);
      return o;
    }
    //the two object creaters new and trivialNew are nearly equivalent:
    var bill = trivialNew(Person, 'William', 'Orange');
    var bill = new Person('William', 'Orange');
    `);  
  tag("h2","JavaScript Inner Functions");
  pre(`
    //nested function can access parent attributes
    //but not vice versa.
    function parentFunc() {
      var a = 1;

      function nestedFunc() {
        var b = 4; // parentFunc can't use this
        return a + b; 
      }
      return nestedFunc(); // 5
    }
    `);  
  tag("h2","JavaScript Closures");
  tag("div","More here about closures: https://stackoverflow.com/questions/111102/how-do-javascript-closures-work<br><br>");
  pre(`
    //define closure
    function makeAdder(a) {
      return function(b) {
        return a + b;
      };
    }
    //call closure
    //x and y now store the code of the inner function.
    //somewhere the values of a=5 or a=20 are stored and remain accessible. 
    //The place where the properties are stored is called a scope object.
    //Closures keep a reference to the scope object even after they 
    //return, that's why argument a is still availabe.
    var x = makeAdder(5);
    var y = makeAdder(20);
    //6 and 7 are assigned to the attribute b
    x(6); // ? 11
    y(7); // ? 27
    `);  
  pre(``);  
  pre(``);  
  pre(``);  
  
}
