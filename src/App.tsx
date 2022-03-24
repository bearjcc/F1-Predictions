import React from "react";
import Navbar from "./components/Navbar";
import { User } from "./Interfaces";
import { Home } from "./pages/Home";
import type { PageName } from "./pages/Page";
import Page from "./pages/Page";

export const App = () => {
	require("./data/2022.tsx");

	const [state, setState] = React.useState({
		loading: true,
		error: null,
		currentPage: "Home" as PageName,
		loggedIn: false,
		user: {} as User,
	});

	const changePage = (page: PageName) => {
		setState({ ...state, currentPage: page });
	};

	return (
		<div className="App">
			<Navbar changePage={changePage} currentPage={state.currentPage} />
			<Page currentPage={state.currentPage} />
			{/* <DrawerDemo /> */}
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
};

export default App;
