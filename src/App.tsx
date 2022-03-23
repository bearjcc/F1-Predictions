import React from "react";
import "./App.css";
import { drivers } from "./classes/Drivers";
import { ListDrivers } from "./components/ListDrivers";
import { Tabs } from "./components/Tabs";
import * as Data2022 from "./data/2022";

function App() {
	require("./data/2022.tsx");

	return (
		<div className="App">
			<Tabs>
				<div id="Drivers">
					<ListDrivers
						id="driverList"
						drivers={drivers}
						type="sorted"
					></ListDrivers>
				</div>
				<div id="Teams">Teams</div>
				<div id="Races">Races</div>
				<div id="Players">Players</div>
			</Tabs>
		</div>
	);
}

export default App;
