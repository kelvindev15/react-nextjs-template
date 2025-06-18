import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "../slices/demoStore";

const store = configureStore({
    reducer: {
        demo: demoReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
