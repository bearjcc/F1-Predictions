import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import "./App.css";
import { drivers } from "./classes/Drivers";
import { races } from "./classes/Races";
import { DragIcon, DriverNumber, List, Position } from "./components/List";
import { ListDrivers } from "./components/ListDrivers";
import { ListRaces } from "./components/ListRaces";
import { Tabs } from "./components/Tabs";
import * as Data2022 from "./data/2022";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { MUI } from "./components/MUI";

function App() {
	require("./data/2022.tsx");

	return (
		<div className="App">
			<MUI />
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
