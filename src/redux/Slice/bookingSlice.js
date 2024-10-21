import { createSlice } from "@reduxjs/toolkit";

const bookingSlice= createSlice({
    name:"booking",
    initialState:{
        bookingList:{
            data:[],
            isFetching:false,
            error:false,
            success:false,
        },
        bookingDetail:{
            data:null,
            isFetching:false,
            error:false,
            success:false,
        },
        createBooking:{
            data:null,
            isFetching:false,
            error:false,
            success:false,
        }
    },
    reducers:{
        bookingListStart: (state) => {
            state.bookingList.isFetching = true;
            state.bookingList.error = false;
        },
        bookingListSuccess: (state, action) => {
            state.bookingList.isFetching = false;
            state.bookingList.data = action.payload.data.bookings;
            state.bookingList.success = true;
        },
        bookingListFailure: (state) => {
            state.bookingList.isFetching = false;
            state.bookingList.error = true;
        },
        bookingDetailStart: (state) => {
            state.bookingDetail.isFetching = true;
            state.bookingDetail.error = false;
        },
        bookingDetailSuccess: (state, action) => {
            state.bookingDetail.isFetching = false;
            state.bookingDetail.data = action.payload.data;
            state.bookingDetail.success = true;
        },
        bookingDetailFailure: (state) => {
            state.bookingDetail.isFetching = false;
            state.bookingDetail.error = true;
        },
        createBookingStart: (state) => {
            state.createBooking.isFetching = true;
            state.createBooking.error = false;
        },
        createBookingSuccess: (state,action) => {
            state.createBooking.isFetching = false;
            state.createBooking.data = action.payload.data;
            state.createBooking.success = true;
        },
        createBookingFailure: (state) => {
            state.createBooking.isFetching = false;
            state.createBooking.error = true;
        }
    }
})

export const { 
    bookingListStart, 
    bookingListSuccess, 
    bookingListFailure,

    bookingDetailStart,
    bookingDetailSuccess,
    bookingDetailFailure,

    createBookingStart,
    createBookingSuccess,
    createBookingFailure
} = bookingSlice.actions

export default bookingSlice.reducer