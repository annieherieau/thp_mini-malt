

// INITIAL STATE
const initialUserState = { firstName: null, lastName: null, fullName: null };

// REDUCER
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "user/updateUserName": {
      if (action.payload.firstName && action.payload.lastName) {
        return {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          fullName: `${action.payload.firstName} ${action.payload.lastName}`,
        };
      }
    }

    default: {
      return state;
    }
  }
};
export default userReducer
