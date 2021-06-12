import * as AC from "../constants/userContstants";

const initial_state = {
  users: false,
  basic: false,
  skill: false,
  address: false,
  location: false,
  selectedUser: false,
};
const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case AC.UPDATE_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case AC.SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case AC.UPDATE_BASIC: {
      return {
        ...state,
        basic: action.payload,
      };
    }
    case AC.UPDATE_UESR_SKILL: {
      return {
        ...state,
        skill: action.payload,
      };
    }
    case AC.UPDATE_USER_ADDRESS: {
      return {
        ...state,
        address: action.payload,
      };
    }
    case AC.UPDATE_USER_LOCATION: {
      return {
        ...state,
        location: action.payload,
      };
    }
    case AC.CLEAR_OLD_DATA: {
      return {
        ...state,
        basic: false,
        skill: false,
        address: false,
        location: false,
        selectedUser: false,
      };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
