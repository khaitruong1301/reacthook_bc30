//rxslice
import React from 'react';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Component: (props) => {
        return <div>
            default component
        </div>
    }
}

const drawerReducer = createSlice({
  name: 'drawerReducer',
  initialState,
  reducers: {
    setComponent: (state,action) => {
        //Lấy component từ payload
        let Component = action.payload;
        state.Component = Component;
    }
  }
});

export const {setComponent} = drawerReducer.actions

export default drawerReducer.reducer