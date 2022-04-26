$(document).ready(function() {	
	// Initializing all images uploaded by the user 
	if (window.File && window.FileList && window.FileReader) {
		$("#files").on("change", function(e) {
			var files = e.target.files,
			filesLength = files.length;
			for (var i = 0; i < filesLength; i++) {
				var f = files[i]
				var fileReader = new FileReader();
				fileReader.onload = (function(e) {
					var file = e.target;
					$("<div class=\"img-thumb-wrapper card shadow\"><span class=\"remove\">&times;</span>" + "<img id=\"image-" + getRandomID() + "\"class=\"img-thumb\" src=\"" + e.target.result + "\"/></div>").insertAfter("#collage");
					$(".remove").click(function() {
						$(this).parent(".img-thumb-wrapper").remove();
					});
					$(".img-thumb").click(SetParameters);
				});
				fileReader.readAsDataURL(f);
			}
		});
	}
	
	// Initializing the first three image options on page load
	document.getElementById("image_option_1").src = "assets/images/" + getRandomImage(0);
	document.getElementById("image_option_2").src = "assets/images/" + getRandomImage(1);
	document.getElementById("image_option_3").src = "assets/images/" + getRandomImage(2);
	
	document.getElementById("image_option_1").addEventListener("click", () => insertImage(document.getElementById("image_option_1")));
	document.getElementById("image_option_2").addEventListener("click", () => insertImage(document.getElementById("image_option_2")));
	document.getElementById("image_option_3").addEventListener("click", () => insertImage(document.getElementById("image_option_3")));
		
});

// list of all images in the directory
// TODO: Need to find a way to get all file names from the directory, currently set manually
var images = [
	"image_001.jpg",
	"image_002.jpg",
	"image_003.jpg",
	"image_004.jpg",
	"image_005.jpg",
	"image_006.jpg",
	"image_007.jpg",
	"image_008.jpg",
	"image_009.jpg",
	"image_010.jpg",
	"image_011.jpg",
	"image_012.jpg",
	"image_013.jpg",
	"image_014.jpg",
	"image_015.jpg",
	"image_016.jpg"
];

// selects a random image from the directory
function getRandomImage(x) {
	var arr = [];
	for (var i = 0; i < 3; i++){ 
		var r = Math.floor(Math.random() * images.length) + 1;
		if (arr.indexOf(r) === -1) {
			arr.push(r);
		}
	}
       return images[arr[x]];
}

// Sets a random ID for all images inserted in the collage
function getRandomID() {
	return Math.floor(Math.random()*90000) + 10000;
}

// Once image is selected from image options, inserts into collage and refreshes with three new image options
function insertImage(img) {
	var file = img;
	$("<div class=\"img-thumb-wrapper card shadow\"><span class=\"remove\">&times;</span>" + "<img id=\"image-" + getRandomID() + "\"class=\"img-thumb\" src=\"" + file.src + "\"/></div>").insertAfter("#collage");
	$(".remove").click(function() {
		$(this).parent(".img-thumb-wrapper").remove();
	});
	$(".img-thumb").click(SetParameters);
	
	document.getElementById("image_option_1").src = "assets/images/" + getRandomImage(0);
	document.getElementById("image_option_2").src = "assets/images/" + getRandomImage(1);
	document.getElementById("image_option_3").src = "assets/images/" + getRandomImage(2);
}

var modal = document.getElementById("myModal"); // Pop up
var save = document.getElementById("modal-save"); // Save button
var close = document.querySelector('.close'); // Close button
var currentImage; // ID of the selected image

// When the user clicks anywhere outside of the modal or the x button, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		document.getElementById("selected-img-desc").value = "";
	}
}
close.onclick = function(event) {
	modal.style.display = "none";
	document.getElementById("selected-img-desc").value = "";
}

// Saves image desription as alt text for the image
save.onclick = function() {
	document.getElementById(currentImage).alt = document.getElementById("selected-img-desc").value;
	modal.style.display = "none";
	document.getElementById("selected-img-desc").value = "";
}

// Opens pop up with relevant information
function SetParameters () {
	currentImage = $(this).attr("id");
	document.getElementById("selected-img-label").textContent = $(this).attr("id");
	document.getElementById("selected-img").src = $(this).attr("src");
	if (document.getElementById(currentImage).alt == "") {
		document.getElementById("selected-img-desc").value = "";
		console.log ("option 1");
	} else {
		document.getElementById("selected-img-desc").value = document.getElementById(currentImage).alt;
		console.log ("option 2");
	}
	modal.style.display = "block";
}