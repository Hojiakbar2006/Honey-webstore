export const reProduct = (state = [], action) => {
  switch (action.type) {
    case "PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export const acProduct = (arr) => {
  return {
    type: "PRODUCT",
    payload: arr,
  };
};
