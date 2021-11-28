import React from "react";
import styled from "styled-components";
import CityButton from "./city-button";

const FlexedDiv = styled.div`
	display: flex;
	justify-content: space-around;
`;

export default function SelectCityViewer(onSelectCity) {
	// use effect hook
	// get city list - map to buttons
	let cityList = [
		{
			cityName: "Phoenix",
			cityURL: "https://city.com",
			cityConfigURL: "https://config.com",
		},
		{
			cityName: "San Francisco",
			cityURL: "https://city.com",
			cityConfigURL: "https://config.com",
		},
	];
	return (
		<FlexedDiv>
			{cityList.map((city) => (
				<CityButton
					key={city.cityName}
					cityName={city.cityName}
					cityURL={city.cityURL}
					cityConfigURL={city.cityConfigURL}
					onSelectCity={onSelectCity}
				/>
			))}
		</FlexedDiv>
	);
}
