import {GET_GENRE_ITEMS, ITEMS_LOADING} from '../actions/types';

const initialState = {
    genreItems : [],
    itemsLoading: false
};

export default function(state = initialState, action){
    switch (action.type) {
        case GET_GENRE_ITEMS:
          return {
            ...state,
            genreItems: action.genreItems,
            itemsLoading:false
          };
        case ITEMS_LOADING:
        return {
            ...state,
            itemsLoading:true
        }
        default:
          return state;
      }
}