import Paper from "@material-ui/core/Paper";
import React from "react";
import { Typography } from "@material-ui/core/";
import useStyles from "./CurrentWidgetStyles";

function CurrentWidget({
	temp,
	weatherDesc,
	icon,
	tempFeelsLike,
	visibility,
	windSpeed,
	clouds,
	area,
}) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper align='center' elevation={3} className={classes.paper}>
				<Typography variant='h4' align='center'>
					Now
				</Typography>
				<Typography variant='h1' align='center'>
					{area}
				</Typography>

				<Typography variant='h4' className={classes.weatherDesc}>
					{weatherDesc}
				</Typography>
				<div>
					<img
						className={classes.icon}
						src={require(`../icons/${icon}.svg`)}
						alt='weather icon'
					/>
				</div>

				<Typography variant={"h2"}>{Math.round(temp)}°C</Typography>
				<Typography variant='subtitle1'>
					Feels like {Math.round(tempFeelsLike)}°
				</Typography>

				<div className={classes.additionalInfo}>
					<Typography variant='subtitle1'>
						Wind Speed: {Math.round(windSpeed * 3.6 * 10) / 10} km/h
					</Typography>

					<Typography variant='subtitle1'>
						Visibility: {visibility / 1000} km/h
					</Typography>

					<Typography variant='subtitle1'>
						Cloudiness: {clouds}%
					</Typography>

					<img
						className={classes.logo}
						src={require(`../icons/OpenWeather-Logo.jpg`)}
						alt='logo'
					/>
				</div>
			</Paper>
		</div>
	);
}

export default CurrentWidget;
