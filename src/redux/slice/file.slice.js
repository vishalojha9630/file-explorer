import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  folders: [],
  currentPath: '/',
}

const fileExplorerSlice = createSlice({
  name: 'fileExplorer',
  initialState,
  reducers: {
    addFile: (state, action) => {
      state.files.push(action.payload)
    },

    addFolder: (state, action) => {
      state.folders.push(action.payload)
    },

    addcurrentPath: (state, action) => {
      state.currentPath = action.payload
    },
  }

})

export const { addFile, addFolder, addcurrentPath } = fileExplorerSlice.actions;

export default fileExplorerSlice.reducer;