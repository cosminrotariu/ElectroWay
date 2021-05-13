import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import authReducer from './reducers/AuthReducer'
import loginReducer from './reducers/LoginReducer'
import errorReducer from './reducers/ErrorReducer'
import thunk from 'redux-thunk'


const allReducers = combineReducers({
    authReducer,
    loginReducer,
    errorReducer,
});


// !!!!!!!!!
// Daca va da eroare la deschidere comentati de aici:



const middlewareEnhancer = applyMiddleware(thunk);
const composedEnchancer = compose(middlewareEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const myStore = createStore(
    allReducers,
    composedEnchancer);

export default myStore;




// Pana aici
// !!!!!!!!

// Si decomentati partea de jos:
// PS: daca e deja decomentata partea de jos si comentata partea de mai sus nu e 
// de aici eroarea



// const middlewareEnhancer = applyMiddleware(thunk);

// const myStore = createStore(
//     allReducers,
//     middlewareEnhancer);

// export default myStore;