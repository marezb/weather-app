import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;
