//rxslice
import { createSlice } from '@reduxjs/toolkit'
//state.facebookReducer = 
const initialState = {
    arrComment: [
        {name:'Khải',content: 'hihi 123'},
        {name:'Hậu',content: 'hihi 456'},
    ]
}

//redux saga
const facebookReducer = createSlice({
  name: 'facebookReducer', //tên nối với tên action
  initialState,
  reducers: {
    addComment: (state,action) => {
        //b1: lấy dữ liệu action gửi lên
        const userComment = action.payload;
        //b2: cập nhật state
        //Vì userComment.current 2 lần push là giống nhau vùng nhớ => clone ra trước khi push
        state.arrComment.push({...userComment});
    }
  }
});

export const {addComment} = facebookReducer.actions
export default facebookReducer.reducer
//---------------------- action ------------------

