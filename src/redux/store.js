import { configureStore } from "@reduxjs/toolkit";
import fileExplorer from "./slice/file.slice"

export const store = configureStore({
    reducer: {
        fileExplorerStore: fileExplorer
    }
})