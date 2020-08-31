import React, { useState } from "react";

function CurrentTime() {
	const now = new Date().toLocaleString();
	const weekDay = new Date().toLocaleString("en-US", { weekday: "long" });
	const [timeNow, setTimeNow] = useState(now);

	setInterval(() => {
		const now = new Date().toLocaleString();
		setTimeNow(now);
		// console.log(timeNow)
	}, 1000);

	return (
		<div>
			{weekDay} {timeNow}
		</div>
	);
}

export default CurrentTime;
