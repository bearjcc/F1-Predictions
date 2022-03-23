import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	drawerClasses,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { f1Theme } from "../themes/f1Theme";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

// export function Navbar() {
// 	const [state, setState] = React.useState({
// 		drawerOpen: false,
// 	});

// 	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
// 		if (
// 			event &&
// 			event.type === "keydown" &&
// 			((event as React.KeyboardEvent).key === "Tab" ||
// 				(event as React.KeyboardEvent).key === "Shift")
// 		) {
// 			return;
// 		}

// 		setState({ ...state, drawerOpen: open });
// 	};

// 	const list = () => (
// 		<Box
// 			sx={{ width: 250 }}
// 			role="presentation"
// 			onClick={toggleDrawer(false)}
// 			onKeyDown={toggleDrawer(false)}
// 		>
// 			<List>
// 				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
// 					<ListItem button key={text}>
// 						<ListItemIcon>
// 							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
// 						</ListItemIcon>
// 						<ListItemText primary={text} />
// 					</ListItem>
// 				))}
// 			</List>
// 			<Divider />
// 			<List>
// 				{["All mail", "Trash", "Spam"].map((text, index) => (
// 					<ListItem button key={text}>
// 						<ListItemIcon>
// 							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
// 						</ListItemIcon>
// 						<ListItemText primary={text} />
// 					</ListItem>
// 				))}
// 			</List>
// 		</Box>
// 	);

// 	return (
// 		<div>
// 			<ThemeProvider theme={f1Theme}>
// 				<AppBar position="sticky" color="primary">
// 					<Toolbar>
// 						<IconButton
// 							edge="start"
// 							color="inherit"
// 							aria-label="menu"
// 							onClick={toggleDrawer(true)}
// 						>
// 							<MenuIcon />
// 						</IconButton>
// 						<Typography variant="h6">Home</Typography>
// 						{/* <Button color="inherit">Login</Button> */}
// 					</Toolbar>
// 				</AppBar>
// 				{/* <SwipeableTemporaryDrawer /> */}
// 				<SwipeableDrawer
// 					anchor="left"
// 					open={state["drawerOpen"]}
// 					onClose={toggleDrawer(false)}
// 					onOpen={toggleDrawer(true)}
// 					color="primary"
// 				>
// 					{list()}
// 				</SwipeableDrawer>
// 			</ThemeProvider>
// 		</div>
// 	);
// }
// make this component with a class instead of function

interface NavbarProps {
	defaultPage: string;
}

interface NavbarState {
	drawerOpen: boolean;
	currentPage: string;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
	constructor(props: NavbarProps) {
		super(props);
		this.state = {
			drawerOpen: false,
			currentPage: props.defaultPage,
		};

		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		this.setState({ ...this.state, drawerOpen: open });
	};

	list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={this.toggleDrawer(false)}
			onKeyDown={this.toggleDrawer(false)}
		>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Forky", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	render() {
		return (
			<div>
				<ThemeProvider theme={f1Theme}>
					<AppBar position="sticky" color="primary">
						<Toolbar>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="menu"
								onClick={toggleDrawer(true)}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6">Home</Typography>
							{/* <Button color="inherit">Login</Button> */}
						</Toolbar>
					</AppBar>
					{/* <SwipeableTemporaryDrawer /> */}
					{/* <SwipeableDrawer
						anchor="left"
						open={this.state.drawerOpen}
						onClose={this.toggleDrawer(false)}
						onOpen={this.toggleDrawer(true)}
						color="primary"
					>
						{this.list()}
					</SwipeableDrawer> */}
					<NavDrawer />
				</ThemeProvider>
			</div>
		);
	}
}

interface NavDrawerProps {}

interface NavDrawerState {
	drawerOpen: boolean;
}

export class NavDrawer extends React.Component<NavDrawerProps, NavDrawerState> {
	constructor(props: NavDrawerProps) {
		super(props);
		this.state = {
			drawerOpen: false,
		};
	}

	toggleDrawer(open: boolean) {
		return (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			this.setState({ ...this.state, drawerOpen: open });
		};
	}

	list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={this.toggleDrawer(false)}
			onKeyDown={this.toggleDrawer(false)}
		>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Forky", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	render() {
		return (
			<div>
				<SwipeableDrawer
					anchor="left"
					open={this.state.drawerOpen}
					onClose={this.toggleDrawer(false)}
					onOpen={this.toggleDrawer(true)}
					color="primary"
				>
					{this.list()}
				</SwipeableDrawer>
			</div>
		);
	}
}
