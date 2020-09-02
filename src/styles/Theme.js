import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		background: { paper: "#fff", default: "#fafafa" },
		primary: { main: "#59b5e4" },
		secondary: { main: "#ffff", contrastText: "#FAFAFA" },

		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "#ffff",
		},
		text: {
			primary: "rgb(0,53,84)",
			secondary: "rgba(0, 0, 0, 0.58)",
			disabled: "rgba(0, 0, 0, 0.38)",
			hint: "rgba(0, 0, 0, 0.38)",
		},
		action: {
			primary: "#ffff",
		},
	},
	typography: {
		fontSize: 13,
		tab: {
			textTransform: "none",
			fontWeight: 400,
			fontSize: "1.2rem",
			marginLeft: "25px",
		},
		h1: {
			fontSize: "2.6rem",
			fontWeight: 400,
		},
		h2: {
			fontSize: "2.1rem",
			fontWeight: 600,
		},
		h3: {
			fontSize: "1.8rem",
		},
		h4: {
			fontSize: "1.4rem",
		},
		h5: {
			fontSize: "1.2rem",
		},
		h6: {
			fontSize: "0.9rem",
			fontWeight: 500,
		},
		subtitle2: {
			fontWeight: 400,
		},
	},
});

export default theme;
