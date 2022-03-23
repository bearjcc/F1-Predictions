import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
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
	CardActions,
	CardContent,
	Checkbox,
	Chip,
	CircularProgress,
	Container,
	Divider,
	Drawer,
	Fab,
	Grid,
	Hidden,
	Icon,
	IconButton,
	ImageList,
	ImageListItem,
	InputLabel,
	LinearProgress,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Pagination,
	Paper,
	Rating,
	Select,
	Skeleton,
	Slider,
	Snackbar,
	SpeedDial,
	SpeedDialAction,
	SpeedDialIcon,
	Stack,
	Step,
	StepLabel,
	Stepper,
	styled,
	Switch,
	Table,
	Tabs,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { ReactNode } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { NightModeSwitch } from "./NightModeSwitch";
import TextAlignGroup from "./TextAlignGroup";
import { deepPurple } from "@mui/material/colors";
import MailIcon from "@mui/icons-material/Mail";
import AbcIcon from "@mui/icons-material/Abc";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import NutritionTable from "./NutritionTable";
import TypographyDemo from "./TypographyDemo";
import BackdropDemo from "./BackdropDemo";
import AlertDialogDemo from "./DialogDemo";
import SnackbarDemo from "./SnackBarDemo";
import AccordianDemo from "./AccordianDemo";
import AppBarDemo from "./AppBarDemo";
import BottomNavigationDemo from "./BottomNavigationDemo";
import BreadcrumbDemo from "./BreadcrumbDemo";
import TabsDemo from "./TabsDemo";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export class MUI extends React.Component {
	render() {
		return (
			<>
				{/* <Autocomplete
					id="combo-box-demo"
					options={["Hamburger", "Fries", "Frosty"]}
					sx={{ width: 300 }}
					renderInput={(params) => <TextField {...params} label="Meals" />}
				/> */}
				{/* <ButtonGroup variant="outlined">
					<Button variant="text">Hi Mom</Button>
					<Button variant="contained">Hi Mom</Button>
					<Button variant="outlined">Hi Mom</Button>
				</ButtonGroup> */}
				{/* <Checkbox /> */}
				{/* <Fab color="primary" aria-label="add">
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
				</Fab> */}
				{/* <Rating /> */}
				{/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					// value={age}
					label="Age"
					// onChange={handleChange}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select> */}
				{/* <Slider />
				<Slider marks step={10} min={10} max={110} /> */}
				{/* <Switch /> */}
				{/* <NightModeSwitch /> */}
				{/* <TextField /> */}
				{/* Only works on desktop <TransferList /> */}
				{/* See next for example <ToggleButtonGroup></ToggleButtonGroup> */}
				{/* <TextAlignGroup /> */}
				{/* <Avatar sx={{ bgcolor: deepPurple[500] }}>JC</Avatar> */}
				{/* <Badge badgeContent={4} color="success">
					<MailIcon color="action" />
				</Badge> */}
				{/* <Chip label="Basic Chip" /> */}
				{/* <Divider>Test</Divider> */}
				{/* <Icon color="primary">star</Icon> */}
				{/* import AbcIcon @mui/icons-material/ABC
					 <AbcIcon /> */}
				{/* <List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Inbox" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText primary="Drafts" />
						</ListItemButton>
					</ListItem>
				</List> */}
				{/* <NutritionTable /> */}
				{/* See example below <Table /> */}
				{/* <Tooltip title="Drafts">
					<IconButton>
						<DraftsIcon />
					</IconButton>
				</Tooltip> */}
				{/* See Demo Below <Typography /> */}
				{/* <TypographyDemo /> */}
				{/* <Alert severity="error">This is an error alert — check it out!</Alert>
				<Alert severity="warning">This is a warning alert — check it out!</Alert>
				<Alert severity="info">This is an info alert — check it out!</Alert>
				<Alert severity="success">This is a success alert — check it out!</Alert> */}
				{/* See demo below <Backdrop /> */}
				{/* <BackdropDemo /> */}
				{/* See Demo Below <Dialogs /> */}
				{/* <AlertDialogDemo /> */}
				{/* <CircularProgress />
				<CircularProgress variant="determinate" value={75} />
				<LinearProgress />
				<LinearProgress variant="determinate" value={75} />
				<LinearProgress variant="buffer" value={75} valueBuffer={85} /> */}
				{/* <Stack spacing={1} width={210}>
					<Skeleton variant="text" />
					<Skeleton variant="circular" width={40} height={40} />
					<Skeleton variant="rectangular" width={210} height={118} />
				</Stack> */}
				{/* <Snackbar /> */}
				{/* <SnackbarDemo /> */}
				{/* <Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
							malesuada lacus ex, sit amet blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<AccordianDemo /> */}
				{/* <AppBar position="sticky">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">News</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
				<AppBarDemo /> */}
				{/* <Card sx={{ width: 275 }}>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							Word of the Day
						</Typography>
						<Typography variant="h5" component="div">
							benevolent
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							adjective
						</Typography>
						<Typography variant="body2">
							well meaning and kindly.
							<br />
							{'"a benevolent smile"'}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Card> */}
				{/* <Paper elevation={24} sx={{ width: "500px", height: "500px" }} /> */}
				{/* <BottomNavigationDemo /> */}
				{/* <Breadcrumbs aria-label="breadcrumb">
					<div>a</div>
					<div>b</div>
				</Breadcrumbs>
				<BreadcrumbDemo /> */}
				{/* <Drawer anchor="left" open={true} onClose={console.log}>
					<div style={{ width: "250px" }}>a</div>
					<div>b</div>
				</Drawer> */}
				{/* <Link>Hi mom!</Link> */}
				{/* <Menu open={true}>
					<MenuItem>Hi mom!</MenuItem>
					<MenuItem>Hi dad!</MenuItem>
				</Menu> */}
				{/* <Pagination count={10} /> */}
				{/* <SpeedDial ariaLabel={"SpeedDial basic example"} icon={<SpeedDialIcon />}>
					<SpeedDialAction aria-label="Add" icon={<AddIcon />} onClick={console.log} />
				</SpeedDial> */}
				{/* <Stepper activeStep={1} alternativeLabel>
					<Step key="step1">
						<StepLabel>Step 1</StepLabel>
					</Step>
					<Step key="step2">
						<StepLabel>Step 2</StepLabel>
					</Step>
					<Step key="step3">
						<StepLabel>Step 3</StepLabel>
					</Step>
				</Stepper> */}
				{/* <Tabs /> */}
				{/* <TabsDemo /> */}
				{/* <Box
					sx={{
						width: 300,
						height: 300,
						backgroundColor: "primary.dark",
						"&:hover": {
							backgroundColor: "primary.main",
							opacity: [0.9, 0.8, 0.7],
						},
					}}
				>
					<div>a</div>
					<div>b</div>
				</Box> */}
				{/* <Container sx={{ bgcolor: "#cfe8fc", height: "20vh" }} /> */}
				{/* <Grid container spacing={3}>
					<Grid item xs>
						<Item>Item 1</Item>
					</Grid>
					<Grid item xs={6}>
						<Item>Item 2</Item>
					</Grid>
					<Grid item xs>
						<Item>Item 3</Item>
					</Grid>
				</Grid> */}
				{/* <Stack spacing={2}>
					<Item>Item 1</Item>
					<Item>Item 2</Item>
					<Item>Item 3</Item>
				</Stack> */}
				{/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
					<ImageListItem key="img1">
						<img
							src="http://unsplash.it/164/164?random&gravity=center"
							alt="img1"
							loading="lazy"
						/>
					</ImageListItem>
					<ImageListItem key="img2">
						<img
							src="http://unsplash.it/164/164?random&gravity=center"
							alt="img2"
							loading="lazy"
						/>
					</ImageListItem>
				</ImageList> */}
			</>
		);
	}
}
