import { SEND_MESSAGE, JOIN_CHAT, LEFT_CHAT, RECEIVE_MESSAGE } from '../constants/chat';

// export default {
//   [SEND_MESSAGE]: (state, { payload }) => {
//     return [...state, payload.msg];
//   },
//   [RECEIVE_MESSAGE]: (state, { payload }) => {
//     return [...state, payload.msg];
//   },
//   [JOIN_CHAT]: (state, { payload }) => {
//     return [...state, payload.user];
//   },
//   [LEFT_CHAT]: (state, { payload }) => {
//     return [...state, payload.user];
//   }
// };

export default function (state=[], action) {
    switch (action.type) {
      case SEND_MESSAGE:
      return [...state, action.payload.msg];
        
      case RECEIVE_MESSAGE:
      return [...state, action.payload.msg];

      case JOIN_CHAT:
      return [...state, action.payload.user];

      case LEFT_CHAT:
      return [...state, action.payload.user];
    
      default:
        return state
    }
}