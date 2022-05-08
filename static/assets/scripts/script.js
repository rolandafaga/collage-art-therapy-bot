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
	document.getElementById("image_option_1").src = "./static/assets/images/" + getRandomImage(0);
	document.getElementById("image_option_2").src = "./static/assets/images/" + getRandomImage(1);
	document.getElementById("image_option_3").src = "./static/assets/images/" + getRandomImage(2);
	
	document.getElementById("image_option_1").addEventListener("click", () => insertImage(document.getElementById("image_option_1")));
	document.getElementById("image_option_2").addEventListener("click", () => insertImage(document.getElementById("image_option_2")));
	document.getElementById("image_option_3").addEventListener("click", () => insertImage(document.getElementById("image_option_3")));
		
});

// list of all images in the directory
// TODO: Need to find a way to get all file names from the directory, currently set manually
var images = [
	"anger/anger1.jpg","anger/anger10.jpg","anger/anger11.jpg","anger/anger12.jpg","anger/anger13.jpg","anger/anger14.jpg","anger/anger15.jpg","anger/anger16.jpg","anger/anger17.jpg","anger/anger18.jpg","anger/anger19.jpg","anger/anger2.jpg","anger/anger20.jpg","anger/anger3.jpg","anger/anger4.jpg","anger/anger5.jpg","anger/anger6.jpg","anger/anger7.jpg","anger/anger8.jpg","anger/anger9.jpg","basketball/basketball1.jpg","basketball/basketball10.jpg","basketball/basketball11.jpg","basketball/basketball12.jpg","basketball/basketball13.jpg","basketball/basketball14.jpg","basketball/basketball15.jpg","basketball/basketball16.jpg","basketball/basketball17.jpg","basketball/basketball18.jpg","basketball/basketball19.jpg","basketball/basketball2.jpg","basketball/basketball20.jpg","basketball/basketball3.jpg","basketball/basketball4.jpg","basketball/basketball5.jpg","basketball/basketball6.jpg","basketball/basketball7.jpg","basketball/basketball8.jpg","basketball/basketball9.jpg","beach/beach1.jpg","beach/beach10.jpg","beach/beach11.jpg","beach/beach12.jpg","beach/beach13.jpg","beach/beach14.jpg","beach/beach15.jpg","beach/beach16.jpg","beach/beach17.jpg","beach/beach18.jpg","beach/beach19.jpg","beach/beach2.jpg","beach/beach20.jpg","beach/beach3.jpg","beach/beach4.jpg","beach/beach5.jpg","beach/beach6.jpg","beach/beach7.jpeg","beach/beach8.jpg","beach/beach9.jpg","car/car1.jpg","car/car10.jpg","car/car11.jpg","car/car12.jpg","car/car13.jpg","car/car14.jpg","car/car15.jpg","car/car16.jpg","car/car17.jpg","car/car18.jpg","car/car19.jpg","car/car2.jpg","car/car20.jpg","car/car21.jpg","car/car22.jpg","car/car23.jpg","car/car24.jpg","car/car25.jpg","car/car26.jpg","car/car27.jpg","car/car3.jpg","car/car4.jpg","car/car5.jpg","car/car6.jpg","car/car7.jpg","car/car8.jpg","car/car9.jpg","cat/cat1.jpg","cat/cat10.jpg","cat/cat11.jpg","cat/cat12.jpg","cat/cat13.jpg","cat/cat14.jpg","cat/cat15.jpg","cat/cat16.jpg","cat/cat17.jpg","cat/cat18.jpg","cat/cat19.jpg","cat/cat2.jpg","cat/cat20.jpg","cat/cat3.jpg","cat/cat4.jpg","cat/cat5.jpg","cat/cat6.jpg","cat/cat7.jpg","cat/cat8.jpg","cat/cat9.jpg","cooking/cooking1.jpg","cooking/cooking10.jpg","cooking/cooking11.jpg","cooking/cooking12.jpg","cooking/cooking14.jpg","cooking/cooking15.jpg","cooking/cooking16.jpg","cooking/cooking17.jpg","cooking/cooking18.jpg","cooking/cooking19.jpg","cooking/cooking2.jpg","cooking/cooking20.jpg","cooking/cooking21.jpg","cooking/cooking22.jpg","cooking/cooking3.jpg","cooking/cooking4.jpg","cooking/cooking5.jpg","cooking/cooking6.jpg","cooking/cooking7.jpg","cooking/cooking8.jpg","cooking/cooking9.jpg","crying/crying1.jpg","crying/crying10.jpg","crying/crying11.jpg","crying/crying12.jpg","crying/crying13.jpg","crying/crying14.jpg","crying/crying15.jpg","crying/crying16.jpg","crying/crying17.jpg","crying/crying18.jpg","crying/crying19.jpg","crying/crying2.jpg","crying/crying20.jpg","crying/crying3.jpg","crying/crying4.jpg","crying/crying5.jpg","crying/crying6.jpg","crying/crying7.jpg","crying/crying8.jpg","crying/crying9.jpg","dance/dance1.jpg","dance/dance10.jpg","dance/dance11.jpg","dance/dance12.jpg","dance/dance13.jpg","dance/dance14.jpg","dance/dance15.jpg","dance/dance16.jpg","dance/dance17.jpg","dance/dance18.jpg","dance/dance19.jpg","dance/dance2.jpg","dance/dance20.jpg","dance/dance21.jpg","dance/dance22.jpg","dance/dance23.jpg","dance/dance24.jpg","dance/dance25.jpg","dance/dance26.jpg","dance/dance3.jpg","dance/dance4.jpg","dance/dance5.jpg","dance/dance6.jpg","dance/dance7.jpg","dance/dance8.jpg","dance/dance9.jpg","dog/dog1.jpg","dog/dog10.jpg","dog/dog11.jpg","dog/dog12.jpg","dog/dog13.jpg","dog/dog14.jpg","dog/dog15.jpg","dog/dog16.jpg","dog/dog17.jpg","dog/dog18.jpg","dog/dog19.jpg","dog/dog2.jpg","dog/dog20.jpg","dog/dog3.jpg","dog/dog4.jpg","dog/dog5.jpg","dog/dog6.jpg","dog/dog7.jpg","dog/dog8.jpg","dog/dog9.jpg","drinking/drinking1.jpg","drinking/drinking10.jpg","drinking/drinking11.jpg","drinking/drinking12.jpg","drinking/drinking13.jpg","drinking/drinking14.jpg","drinking/drinking15.jpg","drinking/drinking16.jpg","drinking/drinking17.jpg","drinking/drinking18.jpg","drinking/drinking19.jpg","drinking/drinking2.jpg","drinking/drinking20.jpg","drinking/drinking21.jpg","drinking/drinking22.jpg","drinking/drinking23.jpg","drinking/drinking24.jpg","drinking/drinking25.jpg","drinking/drinking26.jpg","drinking/drinking3.jpg","drinking/drinking4.jpg","drinking/drinking5.jpg","drinking/drinking6.jpg","drinking/drinking7.jpg","drinking/drinking8.jpg","drinking/drinking9.jpg","family/family1.jpg","family/family10.jpg","family/family11.jpg","family/family12.jpg","family/family13.jpg","family/family14.jpg","family/family15.jpg","family/family16.jpg","family/family17.jpg","family/family18.jpg","family/family19.jpg","family/family2.jpg","family/family20.jpg","family/family21.jpg","family/family3.jpg","family/family4.jpg","family/family5.jpg","family/family6.jpg","family/family7.jpg","family/family8.jpg","family/family9.jpg","food/food1.jpg","food/food10.jpg","food/food11.jpg","food/food12.jpg","food/food13.jpg","food/food14.jpg","food/food15.jpg","food/food16.jpg","food/food17.jpg","food/food18.jpg","food/food19.jpg","food/food2.jpg","food/food20.jpg","food/food21.jpg","food/food22.jpg","food/food23.jpg","food/food24.jpg","food/food25.jpg","food/food3.jpg","food/food4.jpg","food/food5.jpeg","food/food6.jpg","food/food7.jpeg","food/food8.jpg","food/food9.jpg","home/hom2.jpeg","home/home1.jpg","home/home10.jpg","home/home11.jpg","home/home12.jpeg","home/home13.jpg","home/home14.jpg","home/home15.jpg","home/home16.jpg","home/home17.jpg","home/home18.jpg","home/home19.jpg","home/home20.jpg","home/home3.jpg","home/home4.jpg","home/home5.jpg","home/home6.jpg","home/home7.jpg","home/home8.jpg","home/home9.jpg","jewelry/jewelry1.jpg","jewelry/jewelry10.jpg","jewelry/jewelry11.jpg","jewelry/jewelry12.jpg","jewelry/jewelry13.jpg","jewelry/jewelry14.jpg","jewelry/jewelry15.jpg","jewelry/jewelry16.jpg","jewelry/jewelry17.jpg","jewelry/jewelry18.jpg","jewelry/jewelry19.jpg","jewelry/jewelry2.jpg","jewelry/jewelry20.jpg","jewelry/jewelry21.jpg","jewelry/jewelry22.jpg","jewelry/jewelry23.jpg","jewelry/jewelry24.jpg","jewelry/jewelry3.jpg","jewelry/jewelry4.jpg","jewelry/jewelry5.jpg","jewelry/jewelry6.jpg","jewelry/jewelry7.jpg","jewelry/jewelry8.jpg","jewelry/jewelry9.jpg","love/love1.jpg","love/love10.jpg","love/love11.jpg","love/love12.jpg","love/love13.jpg","love/love14.jpg","love/love15.jpg","love/love16.jpg","love/love17.jpg","love/love18.jpg","love/love19.jpg","love/love2.jpg","love/love20.jpg","love/love21.jpg","love/love22.jpg","love/love23.jpg","love/love24.jpg","love/love3.jpg","love/love4.jpg","love/love5.jpg","love/love6.jpg","love/love7.jpg","love/love8.jpg","love/love9.jpg","makeup/makeup1.jpg","makeup/makeup10.jpg","makeup/makeup11.jpg","makeup/makeup12.jpg","makeup/makeup13.jpg","makeup/makeup14.jpg","makeup/makeup15.jpg","makeup/makeup16.jpg","makeup/makeup17.jpg","makeup/makeup18.jpg","makeup/makeup19.jpg","makeup/makeup2.jpg","makeup/makeup20.jpg","makeup/makeup21.jpg","makeup/makeup3.jpg","makeup/makeup4.jpg","makeup/makeup5.jpg","makeup/makeup6.jpg","makeup/makeup7.jpg","makeup/makeup8.jpg","makeup/makeup9.jpg","marriage/marriage1.jpg","marriage/marriage10.jpg","marriage/marriage11.jpg","marriage/marriage12.jpg","marriage/marriage13.jpg","marriage/marriage14.jpg","marriage/marriage15.jpg","marriage/marriage16.jpg","marriage/marriage17.jpg","marriage/marriage18.jpg","marriage/marriage19.jpg","marriage/marriage2.jpg","marriage/marriage20.jpg","marriage/marriage21.jpg","marriage/marriage22.jpg","marriage/marriage3.jpg","marriage/marriage4.jpg","marriage/marriage5.jpg","marriage/marriage6.jpg","marriage/marriage7.jpg","marriage/marriage8.jpg","marriage/marriage9.jpg","money/money1.jpg","money/money10.jpg","money/money11.jpg","money/money12.jpg","money/money13.jpg","money/money14.jpg","money/money15.jpg","money/money16.jpg","money/money17.jpg","money/money18.jpg","money/money19.jpg","money/money2.jpg","money/money20.jpg","money/money21.jpg","money/money22.jpg","money/money23.jpg","money/money24.jpg","money/money25.jpg","money/money3.jpg","money/money4.jpg","money/money5.jpg","money/money6.jpg","money/money7.jpg","money/money8.jpg","money/money9.jpg","music/music1.jpg","music/music10.jpg","music/music11.jpg","music/music12.jpg","music/music13.jpg","music/music14.jpg","music/music15.jpg","music/music16.jpg","music/music17.jpg","music/music18.jpg","music/music19.jpg","music/music2.jpg","music/music20.jpg","music/music21.jpg","music/music22.jpg","music/music3.jpg","music/music4.jpg","music/music5.jpg","music/music6.jpg","music/music7.jpg","music/music8.jpg","music/music9.jpg","plane/plane1.jpg","plane/plane10.jpg","plane/plane11.jpg","plane/plane12.jpg","plane/plane13.jpg","plane/plane14.jpg","plane/plane15.jpg","plane/plane16.jpg","plane/plane17.jpg","plane/plane18.jpg","plane/plane19.jpg","plane/plane2.jpg","plane/plane20.jpg","plane/plane21.jpg","plane/plane3.jpg","plane/plane4.jpg","plane/plane5.jpg","plane/plane6.jpg","plane/plane7.jpg","plane/plane8.jpg","plane/plane9.jpg","rain/rain1.jpg","rain/rain10.jpg","rain/rain11.jpg","rain/rain12.jpg","rain/rain13.jpg","rain/rain14.jpg","rain/rain15.jpg","rain/rain16.jpg","rain/rain17.jpg","rain/rain18.jpg","rain/rain19.jpg","rain/rain2.jpg","rain/rain20.jpg","rain/rain3.jpg","rain/rain4.jpg","rain/rain5.jpg","rain/rain6.jpg","rain/rain7.jpg","rain/rain8.jpg","rain/rain9.jpg","rose/rose1.jpg","rose/rose10.jpg","rose/rose11.jpg","rose/rose12.jpg","rose/rose13.jpg","rose/rose14.jpg","rose/rose15.jpg","rose/rose16.jpg","rose/rose17.jpg","rose/rose18.jpg","rose/rose19.jpg","rose/rose2.jpg","rose/rose20.jpg","rose/rose3.jpg","rose/rose4.jpg","rose/rose5.jpg","rose/rose6.jpeg","rose/rose7.jpg","rose/rose8.jpg","rose/rose9.jpg","sadness/sadness1.jpg","sadness/sadness10.jpg","sadness/sadness11.jpg","sadness/sadness12.jpg","sadness/sadness13.jpg","sadness/sadness14.jpg","sadness/sadness15.jpg","sadness/sadness16.jpg","sadness/sadness17.jpg","sadness/sadness18.jpg","sadness/sadness19.jpg","sadness/sadness2.jpg","sadness/sadness20.jpg","sadness/sadness3.jpg","sadness/sadness4.jpg","sadness/sadness5.jpg","sadness/sadness6.jpg","sadness/sadness7.jpg","sadness/sadness8.jpg","sadness/sadness9.jpg","school/school1.jpg","school/school10.jpg","school/school11.jpg","school/school12.jpg","school/school13.jpg","school/school14.jpg","school/school15.jpg","school/school16.jpg","school/school17.jpg","school/school18.jpg","school/school19.jpg","school/school2.jpg","school/school20.jpg","school/school3.jpg","school/school4.jpg","school/school5.jpg","school/school6.jpg","school/school7.jpg","school/school8.jpg","school/school9.jpg","smile/smile1.jpg","smile/smile10.jpg","smile/smile11.jpg","smile/smile12.jpg","smile/smile13.jpg","smile/smile14.jpg","smile/smile15.jpg","smile/smile16.jpg","smile/smile17.jpg","smile/smile18.jpg","smile/smile19.jpg","smile/smile2.jpg","smile/smile20.jpg","smile/smile3.jpg","smile/smile4.jpg","smile/smile5.jpg","smile/smile6.jpg","smile/smile7.jpg","smile/smile8.jpg","smile/smile9.jpg","smoking/smoking1.jpg","smoking/smoking10.jpg","smoking/smoking11.jpg","smoking/smoking12.jpg","smoking/smoking13.jpg","smoking/smoking14.jpg","smoking/smoking15.jpg","smoking/smoking16.jpg","smoking/smoking17.jpg","smoking/smoking18.jpg","smoking/smoking19.jpg","smoking/smoking2.jpg","smoking/smoking20.jpg","smoking/smoking21.jpg","smoking/smoking22.jpg","smoking/smoking23.jpg","smoking/smoking24.jpg","smoking/smoking25.jpg","smoking/smoking26.jpg","smoking/smoking27.jpg","smoking/smoking28.jpg","smoking/smoking29.jpg","smoking/smoking3.jpg","smoking/smoking30.jpg","smoking/smoking31.jpg","smoking/smoking32.jpg","smoking/smoking4.jpg","smoking/smoking5.jpg","smoking/smoking6.jpg","smoking/smoking7.jpg","smoking/smoking8.jpg","smoking/smoking9.jpg","stress/stress1.jpg","stress/stress10.jpg","stress/stress11.jpg","stress/stress12.jpg","stress/stress13.jpg","stress/stress14.jpg","stress/stress15.jpg","stress/stress16.jpg","stress/stress17.jpg","stress/stress18.jpg","stress/stress19.jpg","stress/stress2.jpg","stress/stress20.jpg","stress/stress3.jpg","stress/stress4.jpg","stress/stress5.jpg","stress/stress6.jpeg","stress/stress7.jpg","stress/stress8.jpg","stress/stress9.jpg","sunshine/sunshine1.jpg","sunshine/sunshine10.jpg","sunshine/sunshine11.jpg","sunshine/sunshine12.jpg","sunshine/sunshine13.jpg","sunshine/sunshine14.jpg","sunshine/sunshine15.jpg","sunshine/sunshine16.jpg","sunshine/sunshine17.jpg","sunshine/sunshine18.jpg","sunshine/sunshine19.jpg","sunshine/sunshine2.jpg","sunshine/sunshine20.jpg","sunshine/sunshine21.jpg","sunshine/sunshine22.jpg","sunshine/sunshine3.jpg","sunshine/sunshine4.jpg","sunshine/sunshine5.jpg","sunshine/sunshine6.jpg","sunshine/sunshine7.jpg","sunshine/sunshine8.jpg","sunshine/sunshine9.jpg","technology/technology1.jpg","technology/technology10.jpg","technology/technology11.jpg","technology/technology12.jpg","technology/technology13.jpg","technology/technology14.jpg","technology/technology15.jpg","technology/technology16.jpg","technology/technology17.jpg","technology/technology18.jpg","technology/technology19.jpg","technology/technology2.jpg","technology/technology20.jpg","technology/technology21.jpg","technology/technology22.jpg","technology/technology23.jpg","technology/technology24.jpg","technology/technology25.jpg","technology/technology3.jpg","technology/technology4.jpg","technology/technology5.jpg","technology/technology6.jpg","technology/technology7.jpg","technology/technology8.jpg","technology/technology9.jpg","tired/tired1.jpg","tired/tired10.jpg","tired/tired11.jpg","tired/tired12.jpg","tired/tired13.jpg","tired/tired14.jpg","tired/tired15.jpg","tired/tired16.jpg","tired/tired17.jpg","tired/tired18.jpg","tired/tired19.jpg","tired/tired2.jpg","tired/tired20.jpg","tired/tired3.jpg","tired/tired4.jpg","tired/tired5.jpg","tired/tired6.jpg","tired/tired7.jpg","tired/tired8.jpg","tired/tired9.jpg","workout/workout1.jpg","workout/workout10.jpg","workout/workout11.jpg","workout/workout12.jpg","workout/workout13.jpg","workout/workout14.jpg","workout/workout15.jpg","workout/workout16.jpg","workout/workout17.jpg","workout/workout18.jpg","workout/workout19.jpg","workout/workout2.jpg","workout/workout20.jpg","workout/workout3.jpg","workout/workout4.jpg","workout/workout5.jpg","workout/workout6.jpg","workout/workout7.jpg","workout/workout8.jpg","workout/workout9.jpg",
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
	console.log (images[arr[x]]);
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
	
	document.getElementById("image_option_1").src = "./static/assets/images/" + getRandomImage(0);
	document.getElementById("image_option_2").src = "./static/assets/images/" + getRandomImage(1);
	document.getElementById("image_option_3").src = "./static/assets/images/" + getRandomImage(2);
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