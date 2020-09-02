import {
	AppBar,
	Button,
	CssBaseline,
	IconButton,
	List,
	ListItem,
	ListItemText,
	SwipeableDrawer,
	Tab,
	Tabs,
	Toolbar,
	useMediaQuery,
	useScrollTrigger,
	useTheme,
} from "@material-ui/core/";
import React, { useEffect, useState } from "react";

import CurrentTime from "./CurrentTime";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import useStyles from "./HeaderStyles";

function HideOnScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

////////////////////////////////////////////////////

export default function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	const [drawerState, setDrawerState] = useState(false);
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	//this is for refresh to make sure that after refresh browser stays on the same side
	useEffect(() => {
		switch (window.location.pathname) {
			case "/":
				if (value !== 0) setValue(0);
				break;
			case "/hourly":
				if (value !== 1) setValue(1);
				break;
			case "/daily":
				if (value !== 2) setValue(2);
				break;
			default:
				setValue(0);
		}
	}, [value]);

	const tabs = (
		<React.Fragment>
			<Tabs
				value={value}
				indicatorColor='secondary'
				textColor='secondary'
				onChange={handleChange}
				aria-label='disabled tabs example'
				className={classes.links}>
				<Tab
					component={Link}
					to='/'
					className={classes.tab}
					label='Now and Today'
					onChange={handleChange}></Tab>
				<Tab
					component={Link}
					to='/hourly'
					className={classes.tab}
					label='Hourly Weather'
					onChange={handleChange}></Tab>
				<Tab
					component={Link}
					to='/daily'
					className={classes.tab}
					label='8-day Forecast'
					onChange={handleChange}></Tab>
			</Tabs>
			<Typography className={classes.dateTime} variant='subtitle1'>
				<CurrentTime />
			</Typography>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setDrawerState(!drawerState)}>
				<MenuIcon className={classes.drawerIcon}></MenuIcon>
			</IconButton>

			<Typography className={classes.dateTime} variant='subtitle1'>
				<CurrentTime />
			</Typography>

			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={drawerState}
				onClose={() => {
					setDrawerState(false);
				}}
				onOpen={() => setDrawerState(true)}
				classes={{ paper: classes.drawer }}>
				<List>
					<ListItem
						onClick={() => {
							setDrawerState(false);
							setValue(0);
						}}
						button
						divider
						component={Link}
						to='/'
						selected={value === 0}>
						<ListItemText
							className={classNames(classes.drawerItem, {
								[classes.drawerItemSelected]: value === 0,
							})}
							disableTypography>
							Now and Today
						</ListItemText>
					</ListItem>

					<ListItem
						onClick={() => {
							setDrawerState(false);
							setValue(1);
						}}
						button
						divider
						component={Link}
						to='/hourly'
						selected={value === 1}>
						<ListItemText
							className={classNames(classes.drawerItem, {
								[classes.drawerItemSelected]: value === 1,
							})}
							disableTypography>
							Hourly Weather
						</ListItemText>
					</ListItem>

					<ListItem
						onClick={() => {
							setDrawerState(false);
							setValue(2);
						}}
						button
						divider
						component={Link}
						to='/daily'
						selected={value === 2}>
						<ListItemText
							className={classNames(classes.drawerItem, {
								[classes.drawerItemSelected]: value === 2,
							})}
							disableTypography>
							8-day Forecast
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll>
				<AppBar>
					<Toolbar disableGutters>
						<Button
							component={Link}
							to='/'
							className={classes.logoContainer}
							onClick={() => setValue(0)}>
							<img
								className={classes.icon}
								src={require(`./icons/logobw.png`)}
								alt='logo'
							/>
						</Button>
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
