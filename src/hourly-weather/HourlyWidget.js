import { Divider, Typography } from "@material-ui/core/";
import {
	convertUnixDateToDayOnly,
	convertUnixDateToHour,
} from "../unixTimeConverter";

import Paper from "@material-ui/core/Paper";
import React from "react";
import useStyles from "./HourlyWidgetStyles";

function HourlyWidget({
	temp,
	date,
	weatherDesc,
	icon,
	feelsLike,
	pressure,
	humidity,
	windSpeed,
}) {
	const classes = useStyles();

	const addInfoStyle = "body2";

	return (
		<div className={classes.root}>
			<Paper elevation={0} className={classes.paper}>
				<Typography variant='h5'>{convertUnixDateToHour(date)}</Typography>
				<Typography variant='h6'>
					{convertUnixDateToDayOnly(date)}
				</Typography>
				<Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
				<Typography variant='subtitle1'>{weatherDesc}</Typography>
				<img
					className={classes.icon}
					src={require(`../icons/${icon}.svg`)}
					alt='weather icon'
				/>
				<div>
					<Typography variant='h3' component={"span"}>
						{Math.round(temp)}°C
					</Typography>
					<Typography variant='subtitle2'>
						Feels like {Math.round(feelsLike)}°
					</Typography>
				</div>
				<Divider style={{ marginTop: "10px", marginBottom: "5px" }} />
				<Typography variant={addInfoStyle}>
					Pressure: {pressure} hpa
				</Typography>
				<Typography variant={addInfoStyle}>
					Humidity: {humidity}%
				</Typography>
				<Typography variant={addInfoStyle}>
					Wind Speed: {Math.round(windSpeed * 3.6 * 10) / 10} km/h
				</Typography>
			</Paper>
		</div>
	);
}

export default HourlyWidget;
