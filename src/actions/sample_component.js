import { SELECT_SAMPLE_MENU } from '../types/sample_component';

export const selectMenu = (menu) => {
    return {
	type:    SELECT_SAMPLE_MENU,
	payload: menu
    }
}

