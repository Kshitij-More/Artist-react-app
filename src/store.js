import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer from './features/users/usersSlice';
import artistReducer from './features/artist/artistSlice';
import albumReducer from './features/albums/albumSlice';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer= combineReducers({
    user: userReducer,
    artist: artistReducer,
    album: albumReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;