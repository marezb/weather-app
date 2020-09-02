import { Button, TextField, Typography } from "@material-ui/core/";
import React, { Component } from "react";

import DraggableFavoriteLocationsList from "./DraggableFavoriteLocationsList";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import arrayMove from "array-move";
import { nanoid } from "nanoid";
import styles from "./FavoriteLocationsWidgetStyles";
import { withStyles } from "@material-ui/core/styles";

class FavoriteLocationsWidget extends Component {
	constructor(props) {
		super(props);
		const savedFavorites = JSON.parse(window.localStorage.getItem("locations"));

		this.state = savedFavorites
			? {
					locations: [...savedFavorites],
					edit: false,
					addLocation: "",
			  }
			: {
					locations: [
						{ id: nanoid(5), content: "Warsaw" },
						{ id: nanoid(5), content: "Opole" },
						{ id: nanoid(5), content: "Gdańsk" },
						{ id: nanoid(5), content: "London" },
						{ id: nanoid(5), content: "Hurghada" },
						{ id: nanoid(5), content: "New York" },
					],
					edit: false,
					addLocation: "",
			  };

		this.syncLocalStorage = this.syncLocalStorage.bind(this);
		this.removeLocation = this.removeLocation.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleAddLocation = this.handleAddLocation.bind(this);
		this.handleEnterAddLocation = this.handleEnterAddLocation.bind(this);
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ locations }) => ({
			locations: arrayMove(locations, oldIndex, newIndex),
		}));
		this.syncLocalStorage();
	};

	syncLocalStorage() {
		// this.setState({ edit: false });
		window.localStorage.setItem(
			"locations",
			JSON.stringify(this.state.locations)
		);
		console.log("syncLocalStorage -> syncLocalStorage");
		//save palettes to local storage
	}

	removeLocation(location) {
		console.log("remove location", location.id);
		const filtered = this.state.locations.filter(
			(item) => item.id !== location.id
		);

		console.log(filtered);
		this.setState({ locations: [...filtered] });
	}

	handleEdit() {
		console.log("clicked edit");
		this.setState({ edit: !this.state.edit });
		console.log(this.state);
		if (this.state.edit) this.syncLocalStorage();
	}

	handleAddLocation(value) {
		this.setState({
			locations: [...this.state.locations, { id: nanoid(5), content: value }],
			addLocation: "",
		});
	}

	handleEnterAddLocation(e) {
		if (e.key === "Enter" && this.state.addLocation.length > 2) {
			this.handleAddLocation(this.state.addLocation);
		}
	}

	render() {
		const { locations, edit, addLocation } = this.state;
		const { classes, handleCitySearch } = this.props;

		return (
			<div className={classes.root}>
				<DraggableFavoriteLocationsList
					distance={10}
					locations={locations}
					removeLocation={this.removeLocation}
					handleCitySearch={handleCitySearch}
					axis='xy'
					onSortEnd={this.onSortEnd}
					edit={edit}
				/>

				<Button
					onClick={this.handleEdit}
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
							onChange={(e) => this.setState({ addLocation: e.target.value })}
							onKeyDown={this.handleEnterAddLocation}
							helperText='At least 3 letters. Press Enter to confirm. Locations are draggable. You can change their order.'
						/>
					</span>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(FavoriteLocationsWidget);
