import { Box, Divider, List, ListItem, ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import GroupsIcon from "@mui/icons-material/Groups";
import { PageName } from "../pages/Page";

export const NavList = (props: {
	changePage: (page: PageName) => void;
	currentPage: PageName;
}) => (
	<Box sx={{ width: 250 }} role="presentation">
		<List>
			<ListItemButton key="Home" href="#Home" component="a">
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary="Home" />
			</ListItemButton>
			<ListItem button key="Drivers">
				<ListItemIcon>
					<SportsMotorsportsIcon />
				</ListItemIcon>
				<ListItemText primary="Drivers" />
			</ListItem>
			<ListItem button key="Teams">
				<ListItemIcon>
					<GroupsIcon />
				</ListItemIcon>
				<ListItemText primary="Teams" />
			</ListItem>
		</List>
		{/* <Divider /> */}
		<List sx={{ position: "fixed", bottom: "0", width: "250px" }}>
			<ListItem button key="Account">
				<ListItemIcon>
					<AccountCircleIcon />
				</ListItemIcon>
				<ListItemText primary="Account" />
			</ListItem>
			<ListItem button key="Settings">
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary="Settings" />
			</ListItem>
		</List>
	</Box>
);
