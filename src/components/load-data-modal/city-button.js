import React from "react";
import { Button } from "kepler.gl/components";
import { addDataToMap } from "kepler.gl/actions";
import { store } from "../../store";

export default function CityButton({
	cityName,
	cityURL,
	cityConfigURL,
	onSelectCity,
}) {
	async function onSelectCityClick() {
		console.log(`cityURL`, cityURL);
		console.log(`cityConfigURL`, cityConfigURL);

		try {
			const [cityDataRaw, cityConfigRaw] = await Promise.all([
				fetch(cityURL),
				fetch(cityConfigURL),
			]);
			const [cityData, cityConfig] = await Promise.all([
				cityDataRaw.json(),
				cityConfigRaw.json(),
			]);
			console.log(cityData, cityConfig);

			store.dispatch(
				addDataToMap({
					// datasets
					datasets: {
						info: {
							label: cityData.datasets[0].data.label,
							id: cityData.datasets[0].data.id,
						},
						data: {
							fields: cityData.datasets[0].data.fields,
							rows: cityData.datasets[0].data.allData,
						},
					},
					// option
					option: {
						centerMap: true,
						readOnly: false,
					},
					// config
					config: cityConfig.config,
				})
			);
		} catch (err) {
			console.log(err);
			alert(err);
		}
	}

	return (
		<Button
			type="submit"
			style={{ flex: "1 0 1", margin: "0.5em" }}
			cta
			size="small"
			onClick={onSelectCityClick}
		>
			{cityName}
		</Button>
	);
}
