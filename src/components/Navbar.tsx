import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { NavList } from "./NavList";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { PageName } from "../pages/Page";

// interface Props {
// 	defaultPage: string;
// }

type E = React.KeyboardEvent | React.MouseEvent;

interface NavbarProps {
	changePage: (page: PageName) => void;
	currentPage: PageName;
}

export default function Navbar(props: NavbarProps) {
	const [state, setState] = React.useState({
		drawerOpen: false,
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
						{props.currentPage}
					</Typography>
				</Toolbar>
			</AppBar>
			<SwipeableDrawer
				anchor="left"
				open={state.drawerOpen}
				onClose={closeDrawer}
				onOpen={openDrawer}
			>
				<NavList
					changePage={props.changePage}
					currentPage={props.currentPage}
				/>
			</SwipeableDrawer>
		</div>
	);
}
