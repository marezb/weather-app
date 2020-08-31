import React from "react";
import { withStyles } from "@material-ui/core/styles";

import HourlyContainer from "./HourlyContainer";
import styles from "./HourlyListStyles";

function HourlyList(props) {
	const { classes, openWeatherData } = props;
	return (
		<div className={classes.container}>
			<div className={classes.widgets}>
				<HourlyContainer openWeatherData={openWeatherData.hourly} />
			</div>
		</div>
	);
}

export default withStyles(styles)(HourlyList);
