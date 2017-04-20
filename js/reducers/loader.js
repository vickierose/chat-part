import { SHOW_LOADER, HIDE_LOADER } from '../constants/loader';

// export default {
//   [SHOW_LOADER]: () => true,
//   [HIDE_LOADER]: () => false
// };

export default function (state = false, action){
  switch(action.type){
    case SHOW_LOADER:
    return true;

    case HIDE_LOADER:
    return false;

    default:
    return state;
  }
}