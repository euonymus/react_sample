import { SELECT_SAMPLE_MENU } from '../types/sample_component';

const initState = null;
export default (state = initState, action) => {
    switch(action.type) {

    case SELECT_SAMPLE_MENU:
	return action.payload;

    default :
	return state
    }
}
