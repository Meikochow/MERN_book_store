import {GET_CART_CONTENTS, SET_VIEW} from './types';
import axios from 'axios';

export const getUserCart = () => dispatch =>{
  axios
  .get('/api/user/userdata')
  .then(res => 
      dispatch({
        type: GET_CART_CONTENTS,
        userCart: res.data.cart
      })
    )
  .catch(err => console.log(err));
  };

  export const setView = (view) => dispatch => {
        dispatch({
          type: SET_VIEW,
          view: view
        })
   }