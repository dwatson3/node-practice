// Write code using readFileSync() to count the number of new line characters in a given file. 
// The user should supply the file name as an argument when running the script. For example:

// Given the following test.txt file:

// hello
// blah blah
// goodbye

// Running node newLineCount.js test.txt should print out 2.

// how do you count the number of new line characters?
// create a variable to store all of the new line characters


// readFileSync is synchronist
var fs = require('fs')
var contents = fs.readFileSync("countCharacters.js")

console.log(contents)
console.log(contents.toString())
console.log(contents.toString().split(""))
console.log(contents.toString().split("").filter(function(char){ return char === "\n"}))
console.log(contents.toString().split("").filter(function(char){ return char === "\n"}).length)


// readFile is asynchronist
// var data = fs.readFile("countCharacters.js")

var fs = require('fs')
fs.readFile("countCharacters.js", function(err, data){
	if(err) throw err
		console.log(data.toString().split(""));
		console.log(data.toString().split("").filter(function(char){ return char === "\n"}).length)
});





// console.log(str.split(""))
// console.log(str.split("").)

// console.log(contents.toString())

