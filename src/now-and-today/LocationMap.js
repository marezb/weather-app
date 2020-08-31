import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	paper: {
		textAlign: "center",
		borderRadius: "10px",
		padding: "0.5rem",
		height: "35rem",
	},
};

const containerStyle = {
	width: "100%",
	height: "100%",
};

const tooltip = "your location";

class LocationMap extends Component {
	render() {
		const center = {
			lat: this.props.lat,
			lng: this.props.lon,
		};

		const position = center;
		// const classes = useStyles();
		const { classes } = this.props;
		return (
			<Paper elevation={3} className={classes.paper}>
				<LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}>
					<GoogleMap
						className={classes.paper}
						mapContainerStyle={containerStyle}
						center={center}
						zoom={14}>
						{/* Child components, such as markers, info windows, etc. */}
						<>
							<Marker
								onLoad={this.onLoad}
								position={position}
								title={tooltip}
							/>
						</>
					</GoogleMap>
				</LoadScript>
			</Paper>
		);
	}
}

export default withStyles(styles)(LocationMap);
