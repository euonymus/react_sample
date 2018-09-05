import { createStore, combineReducers, applyMiddleware } from 'redux'
import currentSampleComponentData from './reducers/reducer_current_sample_component_data'

import thunk from 'redux-thunk'
const reducer = combineReducers({
    current_sample_component_data:   currentSampleComponentData,
})
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store;
