import React from "react";
import styled from "styled-components";
import CityButton from "./city-button";
import { cityList } from "./cityDB";

const FlexedDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
`;

export default function CityGroup({ group }) {
	// create a group of button component
	return (
		<div>
			<h3>{group}</h3>
			<hr />
			<FlexedDiv>
				{cityList
					.filter((city) => city.group === group)
					.map((city) => (
						<CityButton
							key={city.cityName}
							cityName={city.cityName}
							cityURL={city.cityURL}
							cityConfigURL={city.configURL}
						/>
					))}
			</FlexedDiv>
		</div>
	);
}
