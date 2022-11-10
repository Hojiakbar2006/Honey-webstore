export const reLoading = (state = false, action) => {
  switch (action.type) {
    case "LOADING":
      return action.payload;
    default:
      return state;
  }
};


export const acLoading =(booling)=>{
    return{
        type : "LOADING",
        payload :booling

    }

}