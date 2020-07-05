import { types } from "../types/authTypes";

export const authReducer = (state = {}, action) => {


  
  switch (action.type) {
    case types.LOGIN: {
      const Data = { ...action.payload, logged: true };
      localStorage.setItem("user", JSON.stringify(Data));
      return Data;
    }
    case types.LOGOUT: {
      localStorage.removeItem("user");
      return { logged: false };
    }

    default:
      return state;
  }
};
