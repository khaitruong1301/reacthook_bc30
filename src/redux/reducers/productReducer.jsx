import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { http } from '../../util/tools';

const initialState = {
    arrProduct: [],
    productDetail: {}
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductAction: (state, action) => {
            //Lấy dữ liệu từ payload
            const arrProduct = action.payload;
            //cập nhật lại state 
            state.arrProduct = arrProduct;
        },
        getProductDetailAction: (state,action) => {
            //Bước 4: Sau khi nhận được dữ liệu từ dispatch2
            const productDetail = action.payload;
            state.productDetail = productDetail;
        }
    }
});
/* ------------ action: {type,payload} -------------------- */
export const { getProductAction,getProductDetailAction } = productReducer.actions

export default productReducer.reducer

/* ------------ action api -------------------- */
export const getProductApi = () => {
    return async (dispatch2,getState) => {

        // console.log(getState())
        try {
            const result = await http.get('/product');

            const action = getProductAction(result.data.content)
            dispatch2(action)
        } catch (err) {
            console.log({ err });
        }
    }
}

export const getProductDetailApi = (id) => {

    return async (dispatch) =>{
        //Bước 2: Thực thi thunk
        try {
            let result = await http.get(`/Product/getbyid?id=${id}`);
            //Sau khi lấy dữ liệu api thành công => đưa lên reducer = hàm dispatch2 từ thunk 
            // const action = {type,payload} 
            //Bước 3: Sau khi có dữ liệu => dispatch lần 2
            const action = getProductDetailAction(result.data.content);
            dispatch(action);
        } catch (err) {
            console.log(err);
        }
    }
}






// const addProductApi = () => {
//     return async (dispatch) => {
//         //Thực thi add api
//         // axios thêm
//         //axios getALl
//         //thực thi getAll
//         // dispatch(getProductApi());
//         //dispatch => dispatch các thunk khác liên 
//     }
// }