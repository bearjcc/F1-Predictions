import {
	AppBar,
	Button,
	Drawer,
	IconButton,
	ThemeProvider,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { f1Theme } from "./themes/f1Theme";
import { Navbar } from "./components/Navbar";

function App() {
	require("./data/2022.tsx");

	return (
		<div className="App">
			<Navbar defaultPage="Home" />
			{/* <Tabs>
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
			</Tabs> */}
		</div>
	);
}

export default App;
