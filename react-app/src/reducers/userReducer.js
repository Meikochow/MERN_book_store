import {GET_CART_CONTENTS, SET_VIEW} from '../actions/types';

const initialState = {
    userCart : [],
    view: 'store'
};

export default function(state = initialState, action){
    switch (action.type) {
        case GET_CART_CONTENTS:
          return {
            ...state,
            userCart: action.userCart
          };
          case SET_VIEW:
          return {
            ...state,
            view: action.view
          };
        default:
          return state;
      }
}
