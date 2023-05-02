import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { UiState } from "../types/uiSlice";
import hydrate from "./reducers/hydrate";
import setCounter from "./reducers/setCounter";

export const uiInitialState: UiState = {
	counter: 0, // Example of how to add a state
};

const uiSlice = createSlice({
	name: "ui",
	initialState: uiInitialState,
	reducers: {
		setCounter, // Example of how to add a reducer
	},
	extraReducers(builder) {
		builder.addMatcher((action) => action.type.includes(HYDRATE), hydrate);
	},
});

export const uiReducer = uiSlice.reducer;
export const {
	setCounter: setCounterActionCreator, // Example of how to add a action creator
} = uiSlice.actions;
