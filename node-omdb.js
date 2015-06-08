// Use the HTTP module to make a request to "http://omdbapi.com/?i=tt0241527" 
// and store the data in an array. 
// Once the first request is finished, 
// make another request to "http://omdbapi.com/?i=tt0295297" 
// and add the data to the same array. 
// When the second request is finished, 
// console.log the array with the data. Callbacks!!!


var http = require("http")
var movieArray = [];
http.get("http://omdbapi.com/?i=tt0241527", function(response){
	// utf8 means unicode formatting, setting it as a string. 
	// Otherwise it would treat the response as binary data
	response.setEncoding("utf8");
	response.on("data", function(data){
		// console.log.push("some data", data);
		movieArray.push(data);	
	})

	// when you get the "end" event, so we're not telling it close. 
	// when it does "end", give us this movieArray
	response.on("end", function(){
		http.get("http://omdbapi.com/?i=tt0295297", function(response){
			response.setEncoding("utf8");
			response.on("data", function(data){
				movieArray.push(data);
			})
	// this is the official end point		
			response.on("end", function(){
				console.log("movieArray", movieArray);	
			})
		})
	})
})