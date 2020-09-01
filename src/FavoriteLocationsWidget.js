import { Button, IconButton, TextField } from "@material-ui/core/";
import React, { Component } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import { DragDropContext } from "react-beautiful-dnd";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { nanoid } from "nanoid";
import styles from "./FavoriteLocationsWidgetStyles";
import { withStyles } from "@material-ui/core/styles";

class FavoriteLocationsWidget extends Component {
	constructor(props) {
		super(props);
		const savedFavorites = JSON.parse(window.localStorage.getItem("items"));

		this.state = savedFavorites
			? {
					items: [...savedFavorites],
					edit: false,
					addLocation: "",
			  }
			: {
					items: [
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

	syncLocalStorage() {
		// this.setState({ edit: false });
		window.localStorage.setItem("items", JSON.stringify(this.state.items));
		console.log("syncLocalStorage -> syncLocalStorage");
		//save palettes to local storage
	}

	removeLocation(location) {
		console.log("remove location", location.id);
		const filtered = this.state.items.filter((item) => item.id !== location.id);

		console.log(filtered);
		this.setState({ items: [...filtered] });
	}

	handleEdit() {
		console.log("clicked edit");
		this.setState({ edit: !this.state.edit });
		console.log(this.state);
		if (this.state.edit) this.syncLocalStorage();
	}

	handleAddLocation(value) {
		this.setState({
			items: [...this.state.items, { id: nanoid(5), content: value }],
			addLocation: "",
		});
	}

	handleEnterAddLocation(e) {
		if (e.key === "Enter" && this.state.addLocation.length > 2) {
			this.handleAddLocation(this.state.addLocation);
		}
	}

	render() {
		const { items, edit, addLocation } = this.state;
		const { classes, handleCitySearch } = this.props;

		const favLocations = items.map((location, index) => (
			<span key={index}>
				<Button
					className={classes.favButton}
					onClick={() => handleCitySearch(location.content)}
					size='large'>
					{location.content}
				</Button>
				{edit && (
					<IconButton
						onClick={() => this.removeLocation(location)}
						className={classes.deleteIcon}>
						<DeleteIcon className={classes.deleteIcon} />
					</IconButton>
				)}
			</span>
		));

		return (
			<div className={classes.root}>
				{favLocations}

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
							helperText='Press Enter to confirm'
						/>
					</span>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(FavoriteLocationsWidget);
