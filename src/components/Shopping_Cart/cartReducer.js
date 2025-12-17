export const initialState = [];

export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exsisting = state.find((item) => item.id === action.payload.id);

      if (exsisting) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...state, { ...action.payload, qty: 1 }];
    }

    case "DECREASE_ITEM": {
      return state
        .map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);
    }

    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "CLEAR_CART": {
      return [];
    }

    default:
      return state;
  }
}
