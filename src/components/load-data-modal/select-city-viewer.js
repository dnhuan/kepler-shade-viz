import React from "react";
import CityGroup from "./city-group";
import styled from "styled-components";

const GroupDiv = styled.div`
	/* position: absolute; */
	margin-top: -2em;
`;
export default function SelectCityViewer() {
	// use effect hook
	// get city list - map to buttons
	// on button click, call onSelectCity with cityURL and cityConfigURL
	let groups = ["North America", "Europe", "Asia", "South America", "Africa"];
	return (
		<GroupDiv>
			{groups.map((group, index) => (
				<CityGroup key={index} group={group} />
			))}
		</GroupDiv>
	);
}
