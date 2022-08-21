// export const numberReducer =(state = 1, action) => {
//     switch(action.type){
//         case 'CHANGE_NUMBER': {
//             state = action.payload;
//         }
//         default : return state;
//     }
// }
//rxslice

import { createSlice } from '@reduxjs/toolkit'


const initialState = 1;

const numberReducer = createSlice({
  name: 'numberReducer', //tên reducer => ghép tạo thành tên action
  initialState, //Giá trị ban đầu của state
  reducers: { //ứng với hàm reducer khi trước khai báo
    changeNumber: (state, action) => { //type:numberReducer/changeNumber
       console.log( typeof state);
        // debugger;
        state = action.payload;
        return state;
    }
  }
});

export const {changeNumber} = numberReducer.actions

export default numberReducer.reducer


// let ob = {
//     id:1
// }

// Object.defineProperty(ob,'name',{
//     value:'a',
//     writable:false
// });

// ob.name  ='xyz';
// console.log(ob);


