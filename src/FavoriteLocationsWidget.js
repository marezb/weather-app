import { Button, IconButton, TextField } from "@material-ui/core/";
import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import useStyles from "./FavoriteLocationsWidgetStyles";

export default function FavoriteLocationsWidget(props) {
	const classes = useStyles();
	const { handleCitySearch } = props;
	const savedFavorites = JSON.parse(window.localStorage.getItem("favorites"));

	const [favorites, setFavorites] = useState(
		savedFavorites || [
			"Warsaw",
			"Opole",
			"Gdańsk",
			"London",
			"Hurghada",
			"New York",
		]
	);

	const [edit, setEdit] = useState(false);
	const [addLocation, setAddLocation] = useState("");

	function syncLocalStorage() {
		console.log("syncLocalStorage -> syncLocalStorage");
		//save palettes to local storage
		window.localStorage.setItem("favorites", JSON.stringify(favorites));
	}

	function removeLocation(location) {
		console.log("remove location", location);
		setFavorites(favorites.filter((favorite) => favorite !== location));
	}

	function handleEdit() {
		console.log("clicked edit");
		if (edit) syncLocalStorage();
		setEdit(!edit);
	}

	function handleAddLocation(value) {
		setFavorites([...favorites, value]);
		setAddLocation("");
	}

	function handleEnterAddLocation(e) {
		if (e.key === "Enter" && addLocation.length > 2) {
			handleAddLocation(addLocation);
		}
	}

	const favLocations = favorites.map((location) => (
		<span key={location}>
			<Button
				className={classes.favButton}
				onClick={() => handleCitySearch(location)}
				size='large'>
				{location}
			</Button>
			{
				edit && (
					<IconButton
						onClick={() => removeLocation(location)}
						className={classes.deleteIcon}>
						<DeleteIcon className={classes.deleteIcon} />
					</IconButton>
				)
				// <DeleteIcon></DeleteIcon>
				// <span
				// 	style={{
				// 		height: "20px",
				// 		color: "white",
				// 	}}>
				// {/* <DeleteIcon></DeleteIcon> */}
				// </span>
			}
		</span>
	));

	return (
		<div className={classes.root}>
			{favLocations}

			<Button
				onClick={handleEdit}
				variant='contained'
				className={classes.editButton}
				color='primary'
				endIcon={edit ? <SaveIcon /> : <EditIcon />}>
				{edit ? "Save" : "Edit Locations"}
			</Button>
			{edit && (
				<span>
					<TextField
						margin='normal'
						className={classes.textField}
						autoFocus
						type='input'
						variant='outlined'
						size='small'
						label='Add Location'
						value={addLocation}
						onChange={(e) => setAddLocation(e.target.value)}
						onKeyDown={handleEnterAddLocation}
						helperText='Press Enter to confirm'
					/>
				</span>
			)}
		</div>
	);
}
