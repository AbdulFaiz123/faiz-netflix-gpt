import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../utils/userSlice';
import moviesReducer from '../utils/movieSlice';


// Our store and one reducer
const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : moviesReducer,
    },

});

export default appStore;