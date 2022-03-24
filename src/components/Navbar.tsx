import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { NavList } from "./NavList";
import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// interface Props {
// 	defaultPage: string;
// }

type E = React.KeyboardEvent | React.MouseEvent;

interface NavbarProps {
	defaultPage: string;
}

export default function Navbar(props: NavbarProps) {
	const [state, setState] = React.useState({
		drawerOpen: false,
		currentPage: props.defaultPage,
	});

	const toggleDrawer = (drawerOpen: boolean) => (event: E) => {
		// console.log("toggleDrawer", drawerOpen);
		if (
			event &&
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setState({ ...state, drawerOpen: drawerOpen });
	};

	const openDrawer = (e: E) => {
		toggleDrawer(true)(e);
		console.log("openDrawer", state.drawerOpen);
	};

	const closeDrawer = (e: E) => {
		toggleDrawer(false)(e);
		console.log("closeDrawer", state.drawerOpen);
	};

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
						}}
					>
						{state.currentPage}
					</Typography>
				</Toolbar>
			</AppBar>
			<NavDrawer
				closeDrawer={closeDrawer}
				openDrawer={openDrawer}
				isOpen={state.drawerOpen}
			/>
		</div>
	);
}

function NavDrawer(props: {
	closeDrawer: (e: E) => void;
	openDrawer: (e: E) => void;
	isOpen: boolean;
}) {
	return (
		<SwipeableDrawer
			anchor="left"
			open={props.isOpen}
			onClose={props.closeDrawer}
			onOpen={props.openDrawer}
		>
			<NavList />
		</SwipeableDrawer>
	);
}
