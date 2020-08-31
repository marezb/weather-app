import React from "react";
import TodayWidget from "./TodayWidget";

function TodayContainer(props) {
	const { day } = props;
	// const day = openWeatherData && openWeatherData.daily[0];

	return (
		<React.Fragment>
			<TodayWidget
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
		</React.Fragment>
	);
}

export default TodayContainer;
