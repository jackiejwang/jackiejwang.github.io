// alert("works");
// Exercise2
var profilePic = document.body.getElementsByTagName("img")[0];
function increasePictureSize(){
  profilePic.style.width = "200px";
  profilePic.style.height = "200px";
};
profilePic.addEventListener("dblclick",increasePictureSize);
// Exercise3
var nameHeading = document.getElementById("nameHeading");
console.log(nameHeading);
// alert("hi");
function changeHeadingColor(color){
	console.log(arguments);
	console.log("x in changeHeadingColor",color);
	nameHeading.style.color = color;
};
// alert("fds");
// var color = document.getElementByID('textBox').innerText
var color = "red"
var color2 = "green"
nameHeading.addEventListener("mouseover",function(){
	// nameHeading.style.color = "orange";
	changeHeadingColor(color);
});
// alert("end");
nameHeading.addEventListener("mouseout",function(){
	changeHeadingColor(color2);

});

// Exercise4
var factButton = document.createElement("button")
factButton.innerText="Random Facts about Me"