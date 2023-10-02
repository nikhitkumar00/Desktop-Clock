setInterval(() => {
	const date: Date = new Date();
	let hour: number | string = date.getHours();
	let minute: number | string = date.getMinutes();
	let second: number | string = date.getSeconds();
	let meridian: string;

	hour = hour < 10 ? "0" + hour : hour.toString();
	minute = minute < 10 ? "0" + minute : minute.toString();
	second = second < 10 ? "0" + second : second.toString();

	meridian = hour < "12" ? "AM" : "PM";
	hour = hour > "12" ? (parseInt(hour) - 12).toString() : hour.toString();
	hour = hour === "00" ? "12" : hour;

	const hourElement: HTMLElement | null = document.getElementById("hour");
	const minuteElement: HTMLElement | null = document.getElementById("min");
	const secondElement: HTMLElement | null = document.getElementById("sec");
	const meridianElement: HTMLElement | null = document.getElementById("mer");

	if (hourElement) hourElement.innerText = hour;
	if (minuteElement) minuteElement.innerText = minute;
	if (secondElement) secondElement.innerText = second;
	if (meridianElement) meridianElement.innerText = meridian;
}, 1000);
