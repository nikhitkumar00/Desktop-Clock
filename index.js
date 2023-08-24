setInterval(() => {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let meridian;

	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	second = second < 10 ? "0" + second : second;

	meridian = hour < 12 ? "AM" : "PM";
	hour = hour > 12 ? hour - 12 : hour;
	hour = hour == 0 ? 12 : hour;

	document.getElementById("hour").innerText = hour;
	document.getElementById("min").innerText = minute;
	document.getElementById("sec").innerText = second;
	document.getElementById("mer").innerText = meridian;
}, 1000);
