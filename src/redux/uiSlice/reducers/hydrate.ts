import { UiState } from "@/redux/types/uiSlice";
import { Draft, PayloadAction } from "@reduxjs/toolkit";

const hydrate = (state: Draft<UiState>, action: PayloadAction<{ ui: UiState }>): UiState => ({
	...state,
	...action.payload.ui,
});

export default hydrate;
