import React from "react";
import KeplerGl from "kepler.gl";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import "./mapbox-gl.css";
import mapboxToken from "./configs/config";
import AutoSizer from "react-virtualized-auto-sizer";

function App() {
	return (
		<div
			className="App"
			style={{ position: "absolute", width: "100%", height: "100%" }}
		>
			<AutoSizer>
				{({ height, width }) => (
					<KeplerGl
						id="shademap"
						mapboxApiAccessToken={mapboxToken}
						width={width}
						height={height}
					/>
				)}
			</AutoSizer>
		</div>
	);
}

export default App;
