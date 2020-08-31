import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: { position: "relative" },

	paper: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",

		borderRadius: "10px",
		padding: "1.5rem",
		height: "100%",
	},
	weatherDesc: {
		paddingTop: "1rem",
	},
	icon: {
		height: "120px",
		width: "120px",
	},

	additionalInfo: {
		padding: "1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: "100px",
		position: "absolute",
		right: "10px",
		bottom: "10px",
		zIndex: 1,
	},
}));

export default useStyles;
