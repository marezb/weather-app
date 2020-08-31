import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		boxSizing: "border-box",
		width: "100%",
		padding: "0rem",
	},
	deleteIcon: {
		height: "20px",
		padding: "0px",
		color: "#b5bbbf",
		"&:hover svg": {
			transition: "all 0.5s ease-in-out",
			color: "#de4536",
			transform: "scale(1.4)",
		},
	},
	favButton: {
		textTransform: "none",
		// padding: "1rem",
		fontSize: "1.1rem",
		fontWeight: 400,
		transition: "all .5s ease-in-out",
		"&:hover": {
			transform: "scale(1.2)",
			backgroundColor: "transparent",
		},
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
	},
	addIcon: {
		height: "40px",
	},
}));

export default useStyles;
