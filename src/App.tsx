import React from "react";
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
import { drivers } from "./classes/Drivers";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Typography from "@mui/material/Typography";
import { Team, teams } from "./classes/Teams";

type E = React.KeyboardEvent | React.MouseEvent;

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
	return (
		<main>
			<h2>Drivers</h2>
			<TableContainer component={Paper}>
				<Table sx={{}}>
					<TableHead>
						<TableRow>
							<TableCell>Position</TableCell>
							<TableCell>Number</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Team</TableCell>
							<TableCell>Points</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{drivers.map((driver, index) => (
							<TableRow key={driver.number}>
								<TableCell>{`P${index + 1}`}</TableCell>
								<TableCell>
									<img
										src={require(`./img/numbers/${driver.name}.png`)}
										height="30px"
									/>
								</TableCell>
								<TableCell sx={{ textTransform: "uppercase" }}>
									{driver.name}
								</TableCell>
								<TableCell>
									<Tooltip title={driver.team.name}>
										<img
											src={require(`./img/teams/${driver.team.name}.png`)}
											height="30px"
										/>
									</Tooltip>
								</TableCell>
								<TableCell sx={{ textAlign: "center" }}>{driver.points}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</main>
	);
}

function Teams() {
	function createData(
		name: string,
		calories: number,
		fat: number,
		carbs: number,
		protein: number,
		price: number
	) {
		return {
			name,
			calories,
			fat,
			carbs,
			protein,
			price,
			history: [
				{
					date: "2020-01-05",
					customerId: "11091700",
					amount: 3,
				},
				{
					date: "2020-01-02",
					customerId: "Anonymous",
					amount: 1,
				},
			],
		};
	}

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
						<img src={require(`./img/teams/${team.name}.png`)} height="30px" />
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

	const rows = [
		createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
		createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
		createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
		createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
		createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
	];

	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Ranking</TableCell>
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
		<>
			<main>
				<h2>Races</h2>
				<p>List of Races</p>
			</main>
		</>
	);
}

function Players() {
	return (
		<>
			<main>
				<h2>Players</h2>
				<p>List of Players</p>
			</main>
		</>
	);
}

function Settings() {
	return (
		<>
			<main>
				<h2>Settings</h2>
				<p>Here is where you change settings.</p>
			</main>
		</>
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
