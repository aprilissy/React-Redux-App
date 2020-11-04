import axios from 'axios'

// action types
export const FETCH_BERRIES_START = 'FETCH_BERRIES_START'
export const FETCH_BERRIES_SUCCESS = 'FETCH_BERRIES_SUCCESS'
export const FETCH_BERRIES_FAILURE = 'FETCH_BERRIES_FAILURE'

// action creators (async)
export const fetchBerries = () => {
  return (dispatch) =>{
    // async actions here:
    dispatch({type:FETCH_BERRIES_START})

    // fetch data
    axios
      .get('https://pokeapi.co/api/v2/berry')
      .then(res => {
        console.log('res',res);
        dispatch({type:FETCH_BERRIES_SUCCESS, payload: res.data.results})
      })
      .catch(err => {
        console.log('err',err);
        dispatch({type:FETCH_BERRIES_FAILURE, payload: err.message})
      })
  }
}