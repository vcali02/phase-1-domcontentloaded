// Your code goes here
//set up DOMContentLoaded event listener to detect
//when HTML page has loaded and doc is ready to be manipulated

document.addEventListener("DOMContentLoaded", function(){
    console.log(document.getElementById("text").textContent = "This is really cool!");
})
//callback function grabs the id ="text" and changes the value to
//"This is really cool!"