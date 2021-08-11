import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {favorites} from './favorites';
import {sauces} from './sauces';
import {pastas} from './pastas';
import {drinks} from './drinks';
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config ={
    key: 'root',
    storage, 
    debug: true
}

export const ConfigureStore =() => {
    const store = createStore(
        persistCombineReducers(config, {
            favorites, 
            sauces, 
            pastas, 
            drinks
        }), 
        applyMiddleware(thunk, logger)
    );
    const persistor = persistStore(store);

    return {persistor, store}
};