import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { ACCESS_TOKEN, getStore, getStoreJson, http, setCookie, setStore, setStoreJson, USER_LOGIN } from '../../util/tools';
import { history } from '../../index';

const initialState = {
    userLogin: getStoreJson(USER_LOGIN) // có thể null hoặc object
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        getProfileAction: (state,action)=>{
            state.userLogin = action.payload;
        }
    }
});

export const { getProfileAction} = userReducer.actions

export default userReducer.reducer

export const loginApi = (userLogin) => { //{email,password}

    return async (dispatch) => {
        try {
            const result = await http.post('/users/signin',userLogin);
            //Sau khi đăng nhập thành công => lưu dữ liệu vào localstorage hoặc cookie
            console.log(result);
            setCookie(ACCESS_TOKEN,result.data.content.accessToken,30);
            setStore(ACCESS_TOKEN,result.data.content.accessToken);
            //Chuyển hướng về profile, trang quên mật khẩu
            history.push('/profile');
            //Sau khi đăng nhập thành công thì dispatch action getProfile
            dispatch(getProfileApi());
        } catch (err) {
            history.push('/home');

            console.log(err);
        }
    }
}

export const getProfileApi = () => {
    return async dispatch => {
        try {
            const result = await http.post('/users/getProfile');
            //Lấy được thông tin profile => Đưa lên redux
            const action = getProfileAction(result.data.content);
            dispatch(action);

            //Lưu vào storage
            setStoreJson(USER_LOGIN,result.data.content);

        }catch(err) {
            console.log(err);
        }
    }
}




