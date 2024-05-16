import { createStoreHook } from "react-redux";

const initialUserState = { firstName: null, lastName: null, fullName: null };

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "user/updateName": {
      if (!action.payload.firstName || !action.payload.lastName) {
        return { ...state, fullName: null };
      } else {
        return {
          ...state,
          fullName: `${action.payload.firstName} ${action.payload.lastName}`,
        };
      }
    }

    default: {
      return state;
    }
  }
};

const userStore = createStoreHook(userReducer);
