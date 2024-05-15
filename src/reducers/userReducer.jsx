import { createStoreHook } from 'react-redux';

const initialUser = { firstName: null, lastName: null, fullName: null };

export default function userReducer(
  state = initialUser,
  action
) {
  switch (action.type) {
    case "user/updateName": {
      if (!action.payload.firstName || !action.payload.lastName) {
        return { ...state, fullName: null };
      } else {
        return { ...state, fullName: `${action.payload.firstName} ${action.payload.lastName}` };
      }
    }

    default: {
      return state;
    }
  }
}

const userStore = createStoreHook(userReducer);