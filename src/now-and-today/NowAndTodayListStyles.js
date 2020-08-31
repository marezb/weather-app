import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		display: "flex",
		alignItems: "center",
	},

	nowAndMap: {
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
		gap: "0.4rem",
		// gridTemplateRows: "1fr",
	},
	map: {
		gridColumn: "span 2",

		[theme.breakpoints.down("xl")]: {
			gridColumn: "span 2",
		},
		[theme.breakpoints.down("lg")]: {
			gridColumn: "span 2",
		},
		[theme.breakpoints.down("md")]: {
			gridColumn: "span 2",
		},
		[theme.breakpoints.down("sm")]: {
			gridColumn: "span 2",
		},
		[theme.breakpoints.down("xs")]: {
			gridColumn: "span 1",
		},
	},
}));

export default useStyles;
