import React from "react";

import DailyWidget from "./DailyWidget";

function DailyContainer(props) {
	const { openWeatherData } = props;

	const days =
		openWeatherData &&
		openWeatherData.map((day) => (
			<DailyWidget
				key={day.dt}
				date={day.dt}
				icon={day.weather[0].icon}
				weatherDesc={day.weather[0].description}
				{...day.temp}
				feelsDay={day.feels_like.day}
				feelsMorn={day.feels_like.morn}
				feelsEve={day.feels_like.eve}
				feelsNight={day.feels_like.night}
				sunrise={day.sunrise}
				sunset={day.sunset}
				uv={day.uvi}
				pressure={day.pressure}
				humidity={day.humidity}
				windSpeed={day.wind_speed}
				rain={day.rain}
				snow={day.snow}
			/>
		));

	return <>{days}</>;
}

export default DailyContainer;
