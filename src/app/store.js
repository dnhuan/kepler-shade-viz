import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import keplerGlReducer from "kepler.gl/reducers";
import { taskMiddleware } from "react-palm/tasks";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		keplerGl: keplerGlReducer,
	},
	middleware: [taskMiddleware],
});
