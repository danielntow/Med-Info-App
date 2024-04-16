import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:8000/api/drugs/';

const initialState = {
    loading: false,
    drugs: [],
    drug: {},
    error: '',
};

const handleAsyncError = (state, action) => {
    state.loading = false;
    state.error = action.error.message;
};

export const getAllDrugs = createAsyncThunk(
    'medinfo/getAllDrugs',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(baseURL);
            if (response.status === 200) {
                console.log('RESPONSE----', response.data)
                return response.data;
            }
        } catch (err) {
            console.error('Error fetching all drugs:', err);
            return rejectWithValue(err.response?.data);
        }
    }
);

export const getDrug = createAsyncThunk(
    'medinfo/getDrug',
    async (searchTerm, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseURL}?search=${searchTerm}`);
            if (response.status === 200) {
                console.log('RESPONSE----', response.data)
                return response.data;
            }
        } catch (err) {
            console.error('Error fetching drug:', err);
            return rejectWithValue(err.response?.data);
        }
    }
);

export const drugSlice = createSlice({
    name: 'medinfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllDrugs.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllDrugs.fulfilled, (state, action) => {
                state.loading = false;
                state.drugs = action.payload.results;
            })
            .addCase(getAllDrugs.rejected, handleAsyncError)
            .addCase(getDrug.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDrug.fulfilled, (state, action) => {
                state.loading = false;
                state.drug = action.payload.results;
            })
            .addCase(getDrug.rejected, handleAsyncError);
    },
});

export const { } = drugSlice.actions
export default drugSlice.reducer;
