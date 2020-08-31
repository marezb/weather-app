import React from "react";

import HourlyWidget from "./HourlyWidget";

function OpenWeatherHourly(props) {
	const { openWeatherData } = props;

	const days =
		openWeatherData &&
		openWeatherData.map((hour) => (
			<HourlyWidget
				key={hour.dt}
				date={hour.dt}
				icon={hour.weather[0].icon}
				weatherDesc={hour.weather[0].description}
				temp={hour.temp}
				windSpeed={hour.wind_speed}
				feelsLike={hour.feels_like}
				pressure={hour.pressure}
				uv={hour.uvi}
				humidity={hour.humidity}
			/>
		));

	return <>{days}</>;
}

export default OpenWeatherHourly;
