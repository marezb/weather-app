import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		boxSizing: "border-box",
		paddingBottom: "1rem",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "21rem  auto auto",
		gridColumnGap: "1rem",
		justifyItems: "start",
		alignItems: "center",
		justifyContent: "start",
		[theme.breakpoints.down("sm")]: {
			gridTemplateColumns: "20rem auto",
		},
		[theme.breakpoints.down("xs")]: {
			gridTemplateColumns: "auto",
		},
	},
	textField: {
		margin: theme.spacing(1),
		width: "20rem",
	},
	button: {
		margin: theme.spacing(1),
		height: "3em",

		textTransform: "none",
		borderRadius: "5px",
		width: "15em",
	},
	address: {
		margin: theme.spacing(1),

		fontSize: "1.3rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.25rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.1rem",
		},
	},
}));

export default useStyles;
