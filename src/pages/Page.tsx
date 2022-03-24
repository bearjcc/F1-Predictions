import React from "react";
import { Account } from "./Account";
import { Drivers } from "./Drivers";
import { Home } from "./Home";
import { Players } from "./Players";
import { Settings } from "./Settings";
import { Teams } from "./Teams";

export type PageName =
	| "Home"
	| "Drivers"
	| "Teams"
	| "Players"
	| "Account"
	| "Settings";

interface PageProps {
	currentPage: PageName;
}

export default function Page(props: PageProps) {
	return (
		<>
			{
				{
					Home: <Home />,
					Drivers: <Drivers />,
					Teams: <Teams />,
					Players: <Players />,
					Account: <Account />,
					Settings: <Settings />,
				}[props.currentPage]
			}
		</>
	);
}
