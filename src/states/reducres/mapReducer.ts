import { createSlice } from "@reduxjs/toolkit";
import { View } from "ol";

export interface MapState {
    view: View
}

const initialState: MapState = {
    view: new View({
        center: [85, 21],
        zoom: 4,
        projection: 'EPSG:4326',
    })
}

export const mapReducer = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setView: (state, action) => {
            state.view = action.payload
            return state
        }
    }
})

export const { setView } = mapReducer.actions

export const selectMapView = (state: { map: MapState }) => state.map.view

export default mapReducer.reducer