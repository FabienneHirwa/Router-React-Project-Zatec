const initalUsers = [];
  const userReducer = (state = initalUsers, action) => {
    switch (action.type) {
      case "ADD_USER":
        return state.concat([action.payload]);
      case "EDIT_USER":
        return state.map((user) =>
          user.id === action.id ? { ...user, editing: !user.editing } : user
        );
      case "UPDATE_USER":
        return state.map((user) => {
          if (user.id === action.id) {
            return {
              ...user,
              name: action.payload.name,
              telephone: action.payload.telephone,
              surname: action.payload.surname,
              email: action.payload.email,
              editing: !user.editing
            };
          } else {
            return user;
          }
        });
      case "DELETE_USER":
        return state.filter((user) => user.id !== action.id);
      default:
        return state;
    }
  };
  
  export default userReducer;
  