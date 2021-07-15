import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { booksAPI } from "../api/api";

export const getBooksList = createAsyncThunk(
    'books/getBooksList',
    async () => {
        const response = await booksAPI.getBooks()
        return response
    }
)
export const deleteBookThunk = createAsyncThunk(
    'books/deleteBookThunk',
    async (id) => {
        const response = await booksAPI.deleteBook(id)
        return response
    }
)
export const postBookThunk = createAsyncThunk(
    'books/postBookThunk',
    async (obj) => {
       
        const response = await booksAPI.postBook(obj)
        return response
    }
)
export const updateBookThunk = createAsyncThunk(
    'posts/updateBookThunk',
    async (bookId, values) => {
        return booksAPI.updateBook(bookId, values);
    }
)
export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        booksList: [],
        isFetching: false,
    },
    reducers: {
    },
    extraReducers: {
        [getBooksList.fulfilled]: (state, action) => {
            state.booksList = action.payload.data
        },
        [deleteBookThunk.fulfilled]: (state, action) => {
            state.booksList = state.booksList.filter(item => item.id !== action.meta.arg)
        },
        [postBookThunk.fulfilled]: (state, action) => {
            state.booksList.push(action.meta.arg)
        },
        [updateBookThunk.fulfilled]: (state, action) => {
            let newElem = action.meta.arg.values
            state.booksList = state.booksList.filter(item => item.id !== newElem.id)
            state.booksList.push(newElem)
        },
    }
})

export const { } = booksSlice.actions;
export default booksSlice.reducer;