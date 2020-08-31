export default {
	container: {
		width: "100%",
		display: "flex",
		alignItems: "center",
	},
	widgets: {
		width: "100%",
		gap: "0.4rem",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
		gridTemplateRows: "1fr",
	},
};
