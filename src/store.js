import { configureStore } from "@reduxjs/toolkit";
import keplerGlReducer from "kepler.gl/reducers";
import { taskMiddleware } from "react-palm/tasks";

export const store = configureStore({
	reducer: {
		keplerGl: keplerGlReducer,
	},
	middleware: [taskMiddleware],
});
