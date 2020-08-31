import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",

		borderRadius: "10px",
		padding: "1.5rem",
		height: "100%",
	},
	temperature: {
		fontSize: "1rem",
		fontWeight: "500",
	},
	icon: { width: "130px" },

	pictureTemp: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},

	tempBlock: {
		padding: "1rem",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "flex-start",
	},
	additionalInfo: {
		width: "100%",
		padding: "1rem",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "flex-start",
	},
}));

export default useStyles;
