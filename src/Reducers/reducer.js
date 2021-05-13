import { ADD_ITEM, REMOVE_ITEM, FILTER_ITEM } from '../action/action-type';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload)
        default:
            return state;
    }
}

