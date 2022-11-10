import React from "react";
import styled from "styled-components";
import { AUTH_TOKENS } from "./constants/default-settings";
import AutoSizer from "react-virtualized-auto-sizer";
import { replaceLoadDataModal } from "./factories/load-data-modal";
import { injectComponents } from "kepler.gl/components";

const KeplerGl = injectComponents([replaceLoadDataModal()]);

let getMapboxRef = (mapbox, index) => {
	if (mapbox) {
		console.log(index);
		window.mapboxgl = mapbox;
		const map = mapbox.getMap();
		map.on("load", () => {
			map.addSource("radar", {
				type: "image",
				url: "https://huandoan.tech/cors/https://www.dropbox.com/s/a6j0fh27p19sp2n/mrt_20120627_1600_clipped.png?dl=1",
				coordinates: [
					// lat, long
					[-111.942731, 33.427787], // north west
					[-111.925167, 33.427787], // north east
					[-111.925167, 33.41347], // south east
					[-111.942731, 33.41347], // south west
				],
			});
			map.addLayer({
				id: "radar-layer",
				type: "raster",
				source: "radar",
				paint: {
					"raster-fade-duration": 0,
				},
			});
		});
	}
};

export default function App() {
	return (
		<GlobalStyledDiv
			className="App"
			style={{
				transition: "margin 1s, height 1s",
				position: "absolute",
				width: "100%",
				height: "100%",
				left: 0,
				top: 0,
			}}
		>
			<AutoSizer>
				{({ height, width }) => (
					<KeplerGl
						id="shademap"
						mapboxApiAccessToken={AUTH_TOKENS.MAPBOX_TOKEN}
						width={width}
						height={height}
						getMapboxRef={getMapboxRef}
					/>
				)}
			</AutoSizer>
		</GlobalStyledDiv>
	);
}

const GlobalStyledDiv = styled.div`
	font-family: ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif;
	font-weight: 400;
	font-size: 0.875em;
	line-height: 1.71429;
	*,
	*:before,
	*:after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		margin: 0;
	}
	a {
		text-decoration: none;
		color: ${(props) => props.theme.labelColor};
	}
`;
