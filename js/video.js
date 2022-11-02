var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// Sets video for all other functions
	video = document.querySelector("#player1");
	console.log("Autoplay is set to false")
	video.autoplay = false;
	console.log("Loop is set to false")
	video.loop = false;

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	
	let currentRate = video.playbackRate;
	video.playbackRate = currentRate - 0.1;

	let newRate = video.playbackRate;
	console.log("Speed is " + newRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	
	let currentRate = video.playbackRate;
	video.playbackRate = currentRate + 0.1;

	let newRate = video.playbackRate;
	console.log("Speed is " + newRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	
	let oldTime = video.currentTime;

	if (oldTime >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = oldTime + 10;
	}

	let newTime = video.currentTime;
	console.log("Video current time is " + newTime);
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Change volume");

	video.volume = document.querySelector("#slider").value / 100;

	console.log("The current value is " + video.volume);

	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Mute");
		document.querySelector("#volume").innerHTML = 0 + "%";
	} else {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmute");
		document.querySelector("#volume").innerHTML = 100 + "%";
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

