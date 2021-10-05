import { createSlice, configureStore } from "@reduxjs/toolkit";

const imageReducer = createSlice({
	name: "images",
	initialState: {
		images: [],
		selectedImage: null
	},
	reducers: {
		getImages: (state, action) => {
			state.images = action.payload;
		},
		setSelectedImage: (state, action) => {
			state.selectedImage = action.payload;
		}
	}
});

export const { getImages, setSelectedImage } = imageReducer.actions;

export const store = configureStore({
	reducer: imageReducer.reducer
});
