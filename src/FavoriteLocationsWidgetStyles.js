const styles = (theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "flex-start",
		alignContent: "center",

		boxSizing: "border-box",
		width: "100%",
		padding: "0rem",
	},

	inactive: {
		color: "white",
		padding: "0px",
		height: "20px",
	},
	editButton: {
		margin: theme.spacing(1),

		borderRadius: "5px",
		textTransform: "none",
		width: "15em",
	},
	textField: {
		margin: theme.spacing(1),
		width: "20rem",
		alignSelf: "flex-end",
	},
	addIcon: {
		height: "40px",
	},
	infoDraggable: {
		margin: "1rem",
		width: "10rem",
		fontSize: ".7rem",
		alignSelf: "center",
	},
});

export default styles;
