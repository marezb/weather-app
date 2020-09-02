import { Button, IconButton, Paper } from "@material-ui/core/";

import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";
import React from "react";
import { SortableElement } from "react-sortable-hoc";
import styles from "./DraggableFavoriteLocationStyles";
import { withStyles } from "@material-ui/core/styles";

const DraggableFavoriteLocation = SortableElement((props) => {
	const { classes, location, removeLocation, handleCitySearch, edit } = props;
	return (
		<div className={classes.root}>
			<Paper className={classes.paper} elevation={3}>
				<Button
					className={classes.favButton}
					onClick={() => handleCitySearch(location.content)}
					size='large'>
					{location.content}
				</Button>
				{edit && (
					<IconButton
						onClick={() => removeLocation(location)}
						className={classes.deleteIcon}>
						<HighlightOffSharpIcon className={classes.deleteIcon} />
					</IconButton>
				)}
			</Paper>
		</div>
	);
});

export default withStyles(styles)(DraggableFavoriteLocation);
