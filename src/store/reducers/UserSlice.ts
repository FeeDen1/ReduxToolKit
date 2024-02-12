import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;

}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',

}

export const userSlice = createSlice({
    name: 'userActions',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer