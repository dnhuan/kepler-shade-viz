import { LoadDataModalFactory } from "kepler.gl/components";
import { LOADING_METHODS } from "../constants/default-settings";
import SelectCityModal from "../components/select-city/select-city-modal";
import LinkToRaster from "../components/link-to-raster/link-to-raster-modal";
// missing actions

const CustomLoadDataModalFactory = (...deps) => {
	const LoadDataModal = LoadDataModalFactory(...deps);
	const defaultLoadingMethods = LoadDataModal.defaultProps.loadingMethods;
	const additionalMethods = {
		city: {
			id: LOADING_METHODS.city,
			label: "Select City",
			elementType: SelectCityModal,
		},
		raster: {
			id: LOADING_METHODS.raster,
			label: "Link to raster data",
			elementType: LinkToRaster,
		},
	};

	// add more loading methods
	LoadDataModal.defaultProps = {
		...LoadDataModal.defaultProps,
		loadingMethods: [
			additionalMethods.city,
			defaultLoadingMethods.find((lm) => lm.id === "upload"),
			additionalMethods.raster,
			// defaultLoadingMethods.find((lm) => lm.id === "storage"), // TODO: add storage
		],
	};

	return LoadDataModal;
};

CustomLoadDataModalFactory.deps = LoadDataModalFactory.deps;

export function replaceLoadDataModal() {
	return [LoadDataModalFactory, CustomLoadDataModalFactory];
}
