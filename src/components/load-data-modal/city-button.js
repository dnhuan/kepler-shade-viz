import React from "react";
import { Button } from "kepler.gl/components";

export default function CityButton({
	cityName,
	cityURL,
	cityConfigURL,
	onSelectCity,
}) {
	let onSelectCityClick = () => {
		onSelectCity({ cityURL, cityConfigURL });
	};

	return (
		<Button type="submit" cta size="small" onClick={onSelectCityClick}>
			{cityName}
		</Button>
	);
}
