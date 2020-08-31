import CurrentWidget from "./CurrentWidget";
import LocationMap from "./LocationMap";
import React from "react";
import TodayContainer from "./TodayContainer";
import useStyles from "./NowAndTodayListStyles";

function DailyList(props) {
	const classes = useStyles();
	const { openWeatherData, address, lat, lon, area } = props;
	return (
		<div className={classes.container}>
			<div className={classes.nowAndMap}>
				{openWeatherData.current && (
					<CurrentWidget
						date={openWeatherData.current.dt}
						icon={openWeatherData.current.weather[0].icon}
						weatherDesc={openWeatherData.current.weather[0].description}
						temp={openWeatherData.current.temp}
						tempFeelsLike={openWeatherData.current.feels_like}
						pressure={openWeatherData.current.pressure}
						humidity={openWeatherData.current.humidity}
						visibility={openWeatherData.current.visibility}
						windSpeed={openWeatherData.current.wind_speed}
						rain={openWeatherData.current.rain}
						clouds={openWeatherData.current.clouds}
						address={address}
						area={area}
					/>
				)}
				{openWeatherData.current && (
					<TodayContainer
						openWeatherData={openWeatherData}
						day={openWeatherData.daily[0]}
					/>
				)}
				<div className={classes.map}>
					<LocationMap lat={lat} lon={lon} address={address}></LocationMap>
				</div>
			</div>
			<div className={classes.widgets}></div>
		</div>
	);
}

export default DailyList;
