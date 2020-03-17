import SHOPPING_DATA from './shopping.data';

const INITIAL_STATE = {
    collections: SHOPPING_DATA
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shoppingReducer;