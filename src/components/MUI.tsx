import {
	Accordion,
	Alert,
	AppBar,
	Autocomplete,
	AutocompleteRenderInputParams,
	Backdrop,
	Badge,
	BottomNavigation,
	Box,
	Breadcrumbs,
	Button,
	ButtonGroup,
	Card,
	Checkbox,
	Chip,
	Container,
	Divider,
	Drawer,
	Fab,
	Grid,
	Hidden,
	ImageList,
	Link,
	List,
	Menu,
	Pagination,
	Paper,
	Rating,
	Select,
	Skeleton,
	Slider,
	Snackbar,
	SpeedDial,
	Stack,
	Stepper,
	Switch,
	Table,
	Tabs,
	TextField,
	ToggleButton,
	Tooltip,
	Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { ReactNode } from "react";

export class MUI extends React.Component {
	render() {
		return (
			<>
				{/* Nothing visible <Autocomplete renderInput={function (params: AutocompleteRenderInputParams): ReactNode {
					throw new Error("Function not implemented.");
				} } options={[]} /> */}
				{/* <ButtonGroup variant="outlined">
					<Button variant="text">Hi Mom</Button>
					<Button variant="contained">Hi Mom</Button>
					<Button variant="outlined">Hi Mom</Button>
				</ButtonGroup> */}
				{/* <Checkbox /> */}
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
				<Fab color="secondary" aria-label="edit">
					<EditIcon />
				</Fab>
				<Fab variant="extended">
					<NavigationIcon sx={{ mr: 1 }} />
					Navigate
				</Fab>
				<Fab disabled aria-label="like">
					<FavoriteIcon />
				</Fab>
				{/* <Rating /> */}
				{/* <Select /> */}
				{/* <Slider /> */}
				{/* <Switch /> */}
				{/* <TextField /> */}
				{/* <TransferList /> */}
				{/* <ToggleButton /> */}

				{/* <Avatar /> */}
				{/* <Badge /> */}
				{/* <Chip /> */}
				{/* <Divider /> */}
				{/* <Icons /> */}
				{/* <MaterialIcons /> */}
				{/* <List /> */}
				{/* <Table /> */}
				{/* <Tooltip children={undefined} title={""} /> */}
				{/* <Typography /> */}

				{/* <Alert /> */}
				{/* <Backdrop /> */}
				{/* <Dialogs /> */}
				{/* <Progress /> */}
				{/* <Skeleton /> */}
				{/* <Snackbar /> */}

				{/* <Accordion children={""} /> */}
				{/* <AppBar /> */}
				{/* <Card /> */}
				{/* <Paper /> */}

				{/* <BottomNavigation /> */}
				{/* <Breadcrumbs /> */}
				{/* <Drawer /> */}
				{/* <Link /> */}
				{/* <Menu open={false} /> */}
				{/* <Pagination /> */}
				{/* <SpeedDial ariaLabel={""}  /> */}
				{/* <Stepper /> */}
				{/* <Tabs /> */}

				{/* <Box /> */}
				{/* <Container /> */}
				{/* <Grid /> */}
				{/* <Stack /> */}
				{/* <ImageList /> */}
				{/* <Hidden /> */}
			</>
		);
	}
}
