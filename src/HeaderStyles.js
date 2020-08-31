import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	icon: {
		width: "60px",
		marginLeft: "1rem",
		fill: "white",
		fontSize: "2.5rem",
	},

	tabContainer: { marginLeft: "1rem" },
	tab: {
		...theme.typography.tab,
		transform: "scale(1)",
		transition: "all .3s ease-in-out",
		"&:hover": {
			transform: "scale(1.1)",
			color: "#e4e8e9",
		},
	},
	links: {
		flexGrow: 1,
	},
	dateTime: {
		paddingRight: "2rem",
		paddingLeft: "1.5rem",
		fontSize: "1.2rem",
		color: "#ffff",
		[theme.breakpoints.down("sm")]: {
			fontSize: ".95rem",
		},
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	drawerIconContainer: {
		marginLeft: "1rem",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	drawerIcon: {
		height: "40px",
		width: "40px",
	},
	drawer: {
		backgroundColor: theme.palette.primary.main,
	},
	drawerItem: {
		...theme.typography.tab,
		marginLeft: ".1rem",
		color: "white",
		opacity: 0.6,
	},
	drawerItemSelected: {
		opacity: 1,
	},
}));

export default useStyles;
