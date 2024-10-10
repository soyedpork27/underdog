
import {createSlice} from '@reduxjs/toolkit';

// 초기 상태값
const initialState = {
  userData : {
    id : "",
    email : "",
    name : "",
    nickName : "",
    age : 0,
    gender : "",
    image : "",
    role : 0
  },
  isAuth : false,
  isLoading : false,
  error : ""
}

// slice 생성
// createSlice
// @reduxjs/toolkit 에서 가져옴
// name , initialState, reducers, extraReducers
const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {},
  extraReducers : (builder) => {

  }
});

export default userSlice.reducer;