import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./LocationAndSearchStyles";

function LocationAndSearch(props) {
	const classes = useStyles();
	const { handleCitySearch, geoLocation, address } = props;
	const [locationInputLocal, setLocationInputLocal] = useState("");

	function handleSearch(e) {
		if (e.key === "Enter" && locationInputLocal.length > 2) {
			handleCitySearch(locationInputLocal);
			setLocationInputLocal("");
		}
	}

	return (
		<div className={classes.root}>
			<TextField
				className={classes.textField}
				type='input'
				onKeyDown={handleSearch}
				label='Search by any Location'
				margin='normal'
				variant='outlined'
				InputProps={{ type: "search" }}
				onChange={(e) => setLocationInputLocal(e.target.value)}
				value={locationInputLocal}
				autoFocus
				size='small'
			/>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				className={classes.button}
				endIcon={
					locationInputLocal.length > 2 ? <SearchIcon /> : <LocationOnIcon />
				}
				onClick={() =>
					locationInputLocal.length < 3
						? geoLocation()
						: handleCitySearch(locationInputLocal)
				}>
				{locationInputLocal.length > 2
					? "Search by Location"
					: "Use Geolocation"}
			</Button>

			<Typography className={classes.address}>{address}</Typography>
		</div>
	);
}

export default LocationAndSearch;
