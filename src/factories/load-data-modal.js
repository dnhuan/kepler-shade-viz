import { LoadDataModalFactory } from "kepler.gl/components";
import { LOADING_METHODS } from "../constants/default-settings";
import SelectCityViewer from "../components/load-data-modal/select-city-viewer";

// missing actions

const CustomLoadDataModalFactory = (...deps) => {
	const LoadDataModal = LoadDataModalFactory(...deps);
	const defaultLoadingMethods = LoadDataModal.defaultProps.loadingMethods;
	const additionalMethods = {
		city: {
			id: LOADING_METHODS.city,
			label: "Select City",
			elementType: SelectCityViewer,
		},
	};

	// add more loading methods
	LoadDataModal.defaultProps = {
		...LoadDataModal.defaultProps,
		loadingMethods: [
			additionalMethods.city,
			defaultLoadingMethods.find((lm) => lm.id === "upload"),
			// defaultLoadingMethods.find((lm) => lm.id === "storage"), // TODO: add storage
		],
	};

	return LoadDataModal;
};

CustomLoadDataModalFactory.deps = LoadDataModalFactory.deps;

export function replaceLoadDataModal() {
	return [LoadDataModalFactory, CustomLoadDataModalFactory];
}
