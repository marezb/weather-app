import { Divider, Typography } from "@material-ui/core/";
import {
	convertUnixDateDay,
	convertUnixDateToHour,
} from "../unixTimeConverter";

import Paper from "@material-ui/core/Paper";
import React from "react";
import useStyles from "./TodayWidgetStyles";

function TodayWidget({
	day,
	eve,
	max,
	min,
	morn,
	night,
	date,
	weatherDesc,
	icon,
	feelsDay,
	feelsMorn,
	feelsEve,
	feelsNight,
	sunrise,
	sunset,
	uv,
	pressure,
	humidity,
	windSpeed,
	rain,
	snow,
}) {
	const classes = useStyles();

	return (
		<Paper align='center' elevation={3} className={classes.paper}>
			<Typography align='center' variant='h4'>
				{convertUnixDateDay(date)}
			</Typography>

			{/* <Divider style={{ marginBottom: "10px" }} /> */}

			<div>
				<Typography align='center' variant='h5'>
					{weatherDesc}
				</Typography>
				<div>
					<img
						className={classes.icon}
						src={require(`../icons/${icon}.svg`)}
						alt='weather icon'
					/>
				</div>
				<Typography variant='h5'>
					Max {Math.round(max)}° / Min {Math.round(min)}°
				</Typography>
			</div>

			<div className={classes.tempBlock}>
				<Typography align='left' variant='h6' component='div'>
					Day {Math.round(day)}°C
					<Typography variant='body2' component={"span"}>
						<div>Feels like {Math.round(feelsDay)}°</div>
					</Typography>
					<Divider />
					Morning {Math.round(morn)}°
					<Typography variant='body2'>
						Feels like {Math.round(feelsMorn)}°
					</Typography>
				</Typography>

				<Typography align='left' variant='h6' component='div'>
					Evening {Math.round(eve)}°
					<Typography variant='body2'>
						Feels like {Math.round(feelsEve)}°
					</Typography>
					<Divider />
					Night {Math.round(night)}°
					<Typography variant='body2'>
						Feels like {Math.round(feelsNight)}°
					</Typography>
				</Typography>
			</div>

			<div className={classes.additionalInfo}>
				<Typography variant={"subtitle1"}>
					<Typography align='left'>
						Sunrise: {convertUnixDateToHour(sunrise)}
					</Typography>
					<Typography align='left'>
						Sunset: {convertUnixDateToHour(sunset)}
					</Typography>

					<Typography align='left'>
						Daytime: {convertUnixDateToHour(sunset - sunrise)} hours
					</Typography>
					<Typography align='left'>UV index: {Math.round(uv)}</Typography>
				</Typography>
				<Typography variant={"subtitle1"}>
					<Typography align='left'>Pressure: {pressure} hpa</Typography>
					<Typography align='left'>Humidity: {humidity}%</Typography>
					<Typography align='left'>
						Wind Speed: {Math.round(windSpeed * 3.6 * 10) / 10} km/h
					</Typography>
					<Typography align='left'>
						{rain ? `Rain: ${rain} mm/h` : snow ? `Snow: ${snow} mm/h` : null}
					</Typography>
				</Typography>
			</div>
		</Paper>
	);
}

export default TodayWidget;
