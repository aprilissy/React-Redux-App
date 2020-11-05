import {FETCH_BERRIES_START, FETCH_BERRIES_SUCCESS, FETCH_BERRIES_FAILURE} from '../actions'

const initialState = {
  isLoading: false,
  berriesData: [],
  error:''
}

export const berriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BERRIES_START:
      return {
        ...state,
        isLoading:true,
        error:''
      }
    case FETCH_BERRIES_SUCCESS:
      return {
        ...state,
        isLoading:false,
        berriesData:action.payload
      }
    case FETCH_BERRIES_FAILURE:
      return {
        ...state,
        isLoading:false,
        error:action.payload
      }
    default:
      return state
  }
}