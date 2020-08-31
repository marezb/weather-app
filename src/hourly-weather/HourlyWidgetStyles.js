import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		background: "#f2f5f6",
		borderRadius: "10px",
		margin: "-0.2rem",
		marginBottom: "2rem",
	},
	paper: {
		background: "white",
		minWidth: "130px",
		textAlign: "center",
		margin: "0.2rem",
		height: "auto",
		// borderRadius: "10px",
	},

	icon: { width: "80px" },
}));

export default useStyles;
