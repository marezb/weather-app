import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		textAlign: "center",
		borderRadius: "10px",
		padding: "1.5rem",
	},
	temperature: {
		fontSize: "1rem",
		fontWeight: "500",
	},
	icon: { width: "130px" },

	pictureTemp: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},

	tempBlock: {
		padding: "1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-start",
	},
	additionalInfo: {
		padding: "1rem",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
}));

export default useStyles;
