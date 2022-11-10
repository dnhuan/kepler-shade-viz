import React from "react";
import { Button } from "kepler.gl/components";
import { addDataToMap } from "kepler.gl/actions";
import KeplerGlSchema from "kepler.gl/schemas";
import { store } from "../../store";

export default function CityButton({ cityName, cityURL, cityConfigURL }) {
	async function onSelectCityClick() {
		console.log(`cityURL`, cityURL);
		console.log(`cityConfigURL`, cityConfigURL);

		try {
			// get current map state
			const { datasets, config } = KeplerGlSchema.save(
				store.getState().keplerGl.shademap
			);

			// get new data
			const [cityDataRaw, cityConfigRaw] = await Promise.all([
				fetch(cityURL),
				fetch(cityConfigURL),
			]);
			const [cityData, cityConfig] = await Promise.all([
				cityDataRaw.json(),
				cityConfigRaw.json(),
			]);
			console.log(cityData, cityConfig);

			// merge new data with current map state
			const newDatasets = [].concat(datasets, cityData.datasets);

			// add new data to map
			const mapToLoad = KeplerGlSchema.load(newDatasets, config);
			store.dispatch(addDataToMap(mapToLoad));
		} catch (err) {
			console.log(err);
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
