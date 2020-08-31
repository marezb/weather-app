import DailyContainer from "./DailyContainer";
import React from "react";
import styles from "./DailyListStyles";
import { withStyles } from "@material-ui/core/styles";

function DailyList(props) {
	const { classes, openWeatherData } = props;
	return (
		<div className={classes.container}>
			<div className={classes.widgets}>
				<DailyContainer openWeatherData={openWeatherData.daily} />
			</div>
		</div>
	);
}

export default withStyles(styles)(DailyList);
