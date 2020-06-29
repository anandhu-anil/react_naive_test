import {BOOKMARKED} from '../Type';

const initialState = [];

function getUnique(arr, comp) {
  const unique = arr
    .map(e => e[comp])

    // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the false indexes & return unique objects
    .filter(e => arr[e])
    .map(e => arr[e]);

  return unique;
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case BOOKMARKED:
      return getUnique([...state, action.payload], 'id');
    default:
      return state;
  }
}

export default Reducer;
