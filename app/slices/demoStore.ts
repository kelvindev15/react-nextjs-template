import { createSlice } from "@reduxjs/toolkit";

export interface DemoState {
    author: string;
    title: string;
    description: string;
    items: string[];
}

const initialState: DemoState = {
    author: "John Doe",
    title: "Demo Store",
    description: "This is an usage example of Redux Toolkit features.",
    items: [],
};

export const demoStore = createSlice({
    name: "demo",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item !== action.payload);
        },
    },
})

export const { addItem, removeItem } = demoStore.actions;
export default demoStore.reducer;
