// Importa las action types acá
import {GET_ALL_MOVIES, GET_MOVIE_DETAILS, CREATE_MOVIE,  DELETE_MOVIE, SENT_EMAIL} from '../actions';
import api from '../../../db.json';


const initialState = {
  movies: [],
  movieDetail: {},
  email: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload,
      }
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetail: action.payload,
      }
    case CREATE_MOVIE:
      return {

      }
    case DELETE_MOVIE:
    case SENT_EMAIL:
      default:
        return {...state}
  }
};

export default rootReducer;
