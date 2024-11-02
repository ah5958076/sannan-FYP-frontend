// reducer.js
import { SET_NOTIFICATION } from "../actions/userActions";
import { SET_LAST_MESSAGE } from "../actions/userActions";
import { SET_RECEIVER_ID } from "../actions/userActions";


const initialState = {
  notifications: [],
  lastMessage:[],
  receiverId:null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
      };
      case SET_LAST_MESSAGE:
        return {
          ...state,
          lastMessage: action.payload,
        };
        case SET_RECEIVER_ID:
          return {
            ...state,
            receiverId: action.payload,
          };
  
    default:
      return state;
  }
};

export default reducer;
