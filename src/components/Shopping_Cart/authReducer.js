export default function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { isAuth: true, user: action.payload };

    case "LOGOUT":
      return { isAuth: false, user: null };

    default:
      return state;
  }
}
