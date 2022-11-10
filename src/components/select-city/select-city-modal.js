import React from "react";
import styled from "styled-components";
import CityButton from "./city-button";
import { cityList } from "./cityDB";

const FlexedDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export default function SelectCityModal(onSelectCity) {
	// use effect hook
	// get city list - map to buttons
	// on button click, call onSelectCity with cityURL and cityConfigURL
	return (
		<FlexedDiv>
			{cityList.map((city) => (
				<CityButton
					key={city.cityName}
					cityName={city.cityName}
					cityURL={city.cityURL}
					cityConfigURL={city.configURL}
					onSelectCity={onSelectCity}
				/>
			))}
		</FlexedDiv>
	);
}
