import React from "react";
import { Button } from "kepler.gl/components";
import { addDataToMap } from "kepler.gl/actions";
import KeplerGlSchema from "kepler.gl/schemas";
import { store } from "../../store";
import axios from "axios";

import * as nprogress from "nprogress";

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
			const controller = new AbortController();
			if (window.controller) {
				window.controller.abort();
			}
			window.controller = controller;
			nprogress.configure({ trickle: false, minimum: 0.02 });
			nprogress.start();

			const [cityDataRaw] = await Promise.all([
				axios({
					url: cityURL,
					method: "GET",
					signal: controller.signal,
					onDownloadProgress(progress) {
						// console.log("download progress:", progress);
						nprogress.set(progress.loaded / progress.total);
					},
				}),
				// axios.get(cityConfigURL),
			]);
			const cityData = cityDataRaw.data;
			// const cityConfig = cityConfigRaw.data;
			console.log(cityData);

			// merge new data with current map state
			const newDatasets = [].concat(cityData.datasets, datasets);

			// add new data to map
			const mapToLoad = KeplerGlSchema.load(newDatasets, config);
			store.dispatch(addDataToMap(mapToLoad));
			nprogress.done();
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
