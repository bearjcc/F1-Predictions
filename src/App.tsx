import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import { Driver, drivers } from "./classes/Drivers";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Typography from "@mui/material/Typography";
import { Team, teams } from "./classes/Teams";
import { AppBar } from "@mui/material";

type E = React.KeyboardEvent | React.MouseEvent;
let badgeHeight = "20px";

export const App = () => {
	require("./data/2022.tsx");

	const [state, setState] = React.useState({
		loading: true,
		error: null,
		page: "Drivers",
		loggedIn: false,
		// user: {} as User,
	});

	const changePage = (page: string) => {
		setState({ ...state, page });
	};

	return (
		<div className="App">
			<Box
				sx={{ pb: 7 }}
				// ref={ref}
			>
				<CssBaseline />
				<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
					<BottomNavigation
						showLabels
						value={state.page}
						onChange={(event, newValue) => {
							changePage(newValue);
						}}
					>
						<BottomNavigationAction
							component={Link}
							to="/Drivers"
							label="Drivers"
							value="Drivers"
							icon={<RestoreIcon />}
						/>
						<BottomNavigationAction
							component={Link}
							to="/Teams"
							label="Teams"
							value="Teams"
							icon={<FavoriteIcon />}
						/>
						<BottomNavigationAction
							component={Link}
							to="/Races"
							label="Races"
							value="Races"
							icon={<RestoreIcon />}
						/>
						<BottomNavigationAction
							component={Link}
							to="/Players"
							label="Players"
							value="Players"
							icon={<ArchiveIcon />}
						/>
						<BottomNavigationAction
							component={Link}
							to="/Settings"
							label="Settings"
							value="Settings"
							icon={<SettingsIcon />}
						/>
					</BottomNavigation>
				</Paper>
				<Routes>
					<Route path="/Drivers" element={<Drivers />} />
					<Route path="/Teams" element={<Teams />} />
					<Route path="/Races" element={<Races />} />
					<Route path="/Players" element={<Players />} />
					<Route path="/Settings" element={<Settings />} />
				</Routes>
			</Box>
		</div>
	);
};

function Drivers() {
	function Row(props: { driver: Driver; position: number }) {
		const { driver, position } = props;
		const [open, setOpen] = React.useState(false);

		return (
			<React.Fragment>
				<TableRow style={{ height: 48 }}>
					<TableCell component="th" scope="row">
						<VertLine color={driver.team.color} />
						{driver.tla}
					</TableCell>
					<TableCell>P{position}</TableCell>
					<TableCell>
						<img
							src={require(`./img/numbers/${driver.name}.png`)}
							height={badgeHeight}
							alt={driver.number.toString()}
							style={{ verticalAlign: "middle" }}
						/>
					</TableCell>
					<TableCell sx={{ textTransform: "uppercase" }}>{driver.name}</TableCell>
					<TableCell>
						<Tooltip title={driver.team.name}>
							<img
								src={require(`./img/teams/${driver.team.name}.png`)}
								height={badgeHeight}
							/>
						</Tooltip>
					</TableCell>
					<TableCell>{driver.points}</TableCell>
					<TableCell>
						<IconButton
							aria-label="expand row"
							size="small"
							onClick={() => setOpen(!open)}
						>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<Box sx={{ margin: 1 }}>
								<Typography variant="h6" gutterBottom component="div">
									History
								</Typography>
								{/* <Table size="small" aria-label="purchases">
									<TableHead>
										<TableRow>
											<TableCell>Date</TableCell>
											<TableCell>Customer</TableCell>
											<TableCell align="right">Amount</TableCell>
											<TableCell align="right">Total price ($)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{team.history.map((historyRow) => (
											<TableRow key={historyteam.date}>
												<TableCell component="th" scope="row">
													{historyteam.date}
												</TableCell>
												<TableCell>{historyteam.customerId}</TableCell>
												<TableCell align="right">
													{historyteam.amount}
												</TableCell>
												<TableCell align="right">
													{Math.round(
														historyteam.amount * team.price * 100
													) / 100}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table> */}
							</Box>
						</Collapse>
					</TableCell>
				</TableRow>
			</React.Fragment>
		);
	}

	return (
		<main>
			<AppBar sx={{ textAlign: "center", height: "64px" }}>
				<Typography variant="h5" sx={{ margin: "auto" }}>
					Drivers
				</Typography>
			</AppBar>
			<TableContainer component={Paper}>
				<Table sx={{}}>
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>Position</TableCell>
							<TableCell>Number</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Team</TableCell>
							<TableCell>Points</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{drivers.map((driver, index) => (
							<Row key={driver.name} driver={driver} position={index + 1} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</main>
	);
}

function Teams() {
	function Row(props: { team: Team; position: number }) {
		const { team, position } = props;
		const [open, setOpen] = React.useState(false);

		return (
			<React.Fragment>
				<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
					<TableCell>
						<IconButton
							aria-label="expand row"
							size="small"
							onClick={() => setOpen(!open)}
						>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell>
					<TableCell component="th" scope="row">
						P{position}
					</TableCell>
					<TableCell>
						<img src={require(`./img/teams/${team.name}.png`)} height={badgeHeight} />
					</TableCell>
					<TableCell>{team.name}</TableCell>
					<TableCell>{team.points}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<Box sx={{ margin: 1 }}>
								<Typography variant="h6" gutterBottom component="div">
									History
								</Typography>
								{/* <Table size="small" aria-label="purchases">
									<TableHead>
										<TableRow>
											<TableCell>Date</TableCell>
											<TableCell>Customer</TableCell>
											<TableCell align="right">Amount</TableCell>
											<TableCell align="right">Total price ($)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{team.history.map((historyRow) => (
											<TableRow key={historyteam.date}>
												<TableCell component="th" scope="row">
													{historyteam.date}
												</TableCell>
												<TableCell>{historyteam.customerId}</TableCell>
												<TableCell align="right">
													{historyteam.amount}
												</TableCell>
												<TableCell align="right">
													{Math.round(
														historyteam.amount * team.price * 100
													) / 100}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table> */}
							</Box>
						</Collapse>
					</TableCell>
				</TableRow>
			</React.Fragment>
		);
	}

	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table" sx={{ width: { badgeHeight } }}>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Position</TableCell>
						<TableCell>Badge</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Points</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{teams.map((team, index) => (
						<Row key={team.name} team={team} position={index + 1} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function Races() {
	return (
		<main>
			<AppBar sx={{ textAlign: "center" }}>
				<Typography variant="h4">Races</Typography>
			</AppBar>
		</main>
	);
}

function Players() {
	return (
		<main>
			<AppBar sx={{ textAlign: "center" }}>
				<Typography variant="h4">Players</Typography>
			</AppBar>
		</main>
	);
}

function Settings() {
	return (
		<main>
			<AppBar sx={{ textAlign: "center" }}>
				<Typography variant="h4">Settings</Typography>
			</AppBar>
		</main>
	);
}

function VertLine(props: { color: string }) {
	return (
		<Box
			sx={{
				height: "1.5em",
				width: "0.5ch",
				marginRight: "0.5ch",
				backgroundColor: props.color,
				display: "inline-block",
				verticalAlign: "middle",
			}}
		/>
	);
}

export default App;

// 	{/* <Navbar changePage={changePage} currentPage={state.currentPage} />
// <Page currentPage={state.currentPage} /> */}
// 	{/* <DrawerDemo /> */}

/* <Tabs>
	<div id="Test">
		<List >
			{drivers.map((driver, i) => (
				<>
					<Position position={i+1}/>
					<DragIcon />
					<DriverNumber obj={driver} />
				</>
			))}
		</List>
	</div>
	<div id="Drivers">
		<ListDrivers
			id="driverList"
			drivers={drivers}
			type="sorted"
		></ListDrivers>
	</div>
	<div id="Races">
		<ListRaces races={races}/>
	</div>
	<div id="Teams">Teams</div>
	<div id="Players">Players</div>
</Tabs> */
