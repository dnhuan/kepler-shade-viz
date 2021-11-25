import React from "react";
import styled from "styled-components";
import KeplerGl from "kepler.gl";
import mapboxToken from "./configs/config";
import AutoSizer from "react-virtualized-auto-sizer";
import "./ff-clan-web-pro.css";

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
						mapboxApiAccessToken={mapboxToken}
						width={width}
						height={height}
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
