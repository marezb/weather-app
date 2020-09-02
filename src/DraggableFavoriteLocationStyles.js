const styles = {
	root: {
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
	},
	favButton: {
		textTransform: "none",
		fontSize: "1.1rem",
		fontWeight: 400,
		heigh: ".4rem",
		padding: "0.2rem",
	},
	deleteIcon: {
		height: "20px",
		padding: "0px",
		color: "#b5bbbf",
		"&:hover svg": {
			transition: "all 0.5s ease-in-out",
			color: "#de4536",
			transform: "scale(1.3)",
		},
	},
	paper: { marginRight: ".6rem", marginBottom: ".4rem", padding: "0.2rem" },
};

export default styles;
