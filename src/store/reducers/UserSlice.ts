import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            function getErrorMessage(error: unknown) {
                if (error instanceof Error) return error.message
                return String(error)
            }
            state.isLoading = false;
            state.error = getErrorMessage(action.payload)
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        })
    // extraReducers: {
    //     [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
    //         state.isLoading = false
    //         state.error = ''
    //         state.users = action.payload
    //     },
    //     [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload
    //     },
    //     [fetchUsers.pending.type]: (state) => {
    //         state.isLoading = true
    //     },
    }
})

export default userSlice.reducer