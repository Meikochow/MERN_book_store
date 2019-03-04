import axios from 'axios';
import {GET_GENRE_ITEMS, ITEMS_LOADING} from './types';

export const getGenreBooks = (genre) => dispatch => {
    dispatch(setItemsLoading());
    axios
    .get(`/api/items/getsomebooks/${genre}`)
    .then(res => 
        dispatch({
          type: GET_GENRE_ITEMS,
          genreItems: res.data
        })
      )
    .catch(err => console.log(err));
   }

    export const setItemsLoading = ()=> {
      return {
          type: ITEMS_LOADING
      }
  }
  
