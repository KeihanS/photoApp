"use strict";

document.querySelector("#search").addEventListener("click", function () {
	const input = document.getElementById("input").value;
	document.getElementById("image-link").src = `https://source.unsplash.com/1600x900/?${input}`;
});

document.querySelector("#Afg").addEventListener("click", function () {
	document.getElementById("image-link").src =
		"https://source.unsplash.com/1600x900/?Afghanistan,Kabul";
});

document.querySelector("#Japan").addEventListener("click", function () {
	document.getElementById("image-link").src =
		"https://source.unsplash.com/1600x900/?Japan,Kyoto,Tokyo,Sakura";
});

document.querySelector("#image-link").addEventListener("click", function () {
	console.log("click work");
	const link = document.getElementById("image-link").src + new Date().getTime();
	return (document.getElementById("image-link").src = link);
});

document.addEventListener("keydown", function (e) {
	console.log(e.key);
	const link = document.getElementById("image-link").src + new Date().getTime();
	return (document.getElementById("image-link").src = link);
});
