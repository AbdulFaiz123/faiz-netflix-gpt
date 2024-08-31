import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../utils/userSlice';
import moviesReducer from '../utils/movieSlice';
import gptReducer from '../utils/gptSlice';
import configReducer from '../utils/configSlice';


// Our store and one reducer
const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        config : configReducer,
    },

});

export default appStore;