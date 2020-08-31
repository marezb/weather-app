import { Divider, Typography } from "@material-ui/core/";
import {
	convertUnixDateDay,
	convertUnixDateToHour,
} from "../unixTimeConverter";

import Paper from "@material-ui/core/Paper";
import React from "react";
import useStyles from "./DailyWidgetStyles";

function DailyWidget({
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
		<Paper elevation={3} className={classes.paper}>
			<Typography variant='h4'>{convertUnixDateDay(date)}</Typography>
			<Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
			<div className={classes.pictureTemp}>
				<div>
					<Typography variant='h5'>{weatherDesc}</Typography>

					<img
						className={classes.icon}
						src={require(`../icons/${icon}.svg`)}
						alt='weather icon'
					/>
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
						<Divider />
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
			</div>

			<Divider style={{ marginTop: "10px", marginBottom: "5px" }} />

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
						{rain
							? `Rain: ${rain} mm/h`
							: snow
							? `Snow: ${snow} mm/h`
							: null}
					</Typography>
				</Typography>
			</div>
		</Paper>
	);
}

export default DailyWidget;
