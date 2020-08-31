import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DailyList from "./daily-weather/DailyList";
import FavoriteLocationsWidget from "./FavoriteLocationsWidget";
import Header from "./Header";
import HourlyList from "./hourly-weather/HourlyList";
import LocationAndSearch from "./LocationAndSearch";
import NowAndTodayList from "./now-and-today/NowAndTodayList";
import { ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import theme from "./styles/Theme";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	root: { backgroundColor: "white", padding: "1.5rem" },
	main: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		height: "100%",
	},
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openWeatherData: {},
			lat: 27.26,
			lon: 33.81,
			address: "",
			locationInput: "",
			area: "",
		};

		this.locationSuccess = this.locationSuccess.bind(this);
		this.locationError = this.locationError.bind(this);
		this.getData = this.getWeatherData.bind(this);
		this.getLocationData = this.getLocationData.bind(this);
		this.handleCitySearch = this.handleCitySearch.bind(this);
		this.geoLocation = this.geoLocation.bind(this);
		this.getCoordinates = this.getCoordinates.bind(this);
	}

	componentDidMount() {
		if (!navigator.geolocation) {
			window.alert("Geolocation is not supported by your browser");
		}
		this.geoLocation();
	}

	geoLocation() {
		navigator.geolocation.getCurrentPosition(
			this.locationSuccess,
			this.locationError
		);
	}

	locationSuccess(position) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		this.setState({ lat: latitude, lon: longitude }, this.getWeatherData);
		this.getLocationData();
	}

	locationError(err) {
		window.alert(
			"Geolocation is not supported for your device. Please search manually for your location. Or turn on location on your device"
		);

		console.warn(`ERROR(${err.code}): ${err.message}`);
		this.getWeatherData();
		this.getLocationData();
	}

	async getWeatherData() {
		try {
			const { lon, lat } = this.state;
			let apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
			let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${apiKey}`;

			await axios
				.get(url)
				.then((result) => this.setState({ openWeatherData: result.data }));
		} catch (error) {
			window.alert(error);
		}
	}

	async getLocationData() {
		try {
			const { lon, lat } = this.state;
			let apiKey2 = process.env.REACT_APP_GEOCODING_KEY;

			let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey2}`;

			await axios.get(url).then((location) => {
				let area = "";
				try {
					area = location.data.results[3].address_components[2].long_name;
				} catch (error) {
					area = location.data.results[0].address_components[1].long_name;
				}

				let address = location.data.results[3].formatted_address;
				this.setState({ address: address, area: area });
			});
		} catch (error) {
			console.log(error);
		}
	}

	async getCoordinates() {
		try {
			const { locationInput } = this.state;
			let apiKey2 = process.env.REACT_APP_GEOCODING_KEY;

			let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${locationInput}&&key=${apiKey2}`;

			await axios.get(url).then((coordinates) => {
				let lat = coordinates.data.results[0].geometry.location.lat;
				let lon = coordinates.data.results[0].geometry.location.lng;

				this.setState({ lat: lat, lon: lon }, this.getLocationData);

				this.getWeatherData();
			});
		} catch (error) {
			console.log(error);
		}
	}

	handleCitySearch(value) {
		this.setState({ locationInput: value }, this.getCoordinates);
	}

	render() {
		const {
			openWeatherData,
			address,
			lat,
			lon,
			locationInput,
			area,
		} = this.state;
		const { classes } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<div className={classes.root}>
					<Header></Header>
					<FavoriteLocationsWidget handleCitySearch={this.handleCitySearch} />

					<LocationAndSearch
						handleCitySearch={this.handleCitySearch}
						geoLocation={this.geoLocation}
						getCoordinates={this.getCoordinates}
						address={address}
						locationInput={locationInput}
					/>

					<div className={classes.main}>
						<Switch>
							<Route
								exact
								path='/'
								render={(routeProps) => (
									<NowAndTodayList
										openWeatherData={openWeatherData}
										address={address}
										area={area}
										lat={lat}
										lon={lon}
										{...routeProps}
									/>
								)}
							/>
							<Route
								exact
								path='/hourly'
								render={(routeProps) => (
									<HourlyList
										openWeatherData={openWeatherData}
										address={address}
										lat={lat}
										lon={lon}
										{...routeProps}
									/>
								)}
							/>
							<Route
								exact
								path='/daily'
								render={(routeProps) => (
									<DailyList
										openWeatherData={openWeatherData}
										address={address}
										area={area}
										lat={lat}
										lon={lon}
										{...routeProps}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</ThemeProvider>
		);
	}
}

export default withStyles(styles)(App);
