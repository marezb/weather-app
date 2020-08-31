function convertUnixDateDay(timeStamp) {
	const convertedTime = new Date(timeStamp * 1000).toLocaleString();

	const stringVer = convertedTime.toString();
	const dateOnly = stringVer.substr(0, stringVer.lastIndexOf(","));

	const today = new Date().setHours(0, 0, 0, 0);
	const otherDate = new Date(timeStamp * 1000).setHours(0, 0, 0, 0);

	const dateObject = new Date(timeStamp * 1000);
	const weekDay = dateObject.toLocaleString("en-US", { weekday: "long" });

	const DateToday = `Today`;
	const completeDate = `${weekDay} ${dateOnly}`;

	if (today === otherDate) return DateToday;
	return completeDate;
}

function convertUnixDateToDayOnly(timeStamp) {
	const today = new Date().setHours(0, 0, 0, 0);
	const otherDate = new Date(timeStamp * 1000).setHours(0, 0, 0, 0);

	const dateObject = new Date(timeStamp * 1000);
	const weekDay = dateObject.toLocaleString("en-US", { weekday: "long" });

	const DateToday = `Today`;

	if (today === otherDate) return DateToday;
	return weekDay;
}

function convertUnixDateToFullTime(timeStamp) {
	const convertedTime = new Date(timeStamp * 1000).toLocaleString();

	return convertedTime;
}

function convertUnixDateToHour(timeStamp) {
	const convertedTime = new Date(timeStamp * 1000).toLocaleString();
	const stringVer = convertedTime.toString();
	const hourOnly = stringVer.substr(stringVer.lastIndexOf(",") + 2, 5);

	return hourOnly;
}

function convertUnixDateToDay(timeStamp) {
	const convertedTime = new Date(timeStamp * 1000).toLocaleString();
	const stringVer = convertedTime.toString();

	return stringVer;
}

export {
	convertUnixDateDay,
	convertUnixDateToFullTime,
	convertUnixDateToHour,
	convertUnixDateToDayOnly,
	convertUnixDateToDay,
};
