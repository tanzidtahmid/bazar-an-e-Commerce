export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cartList: state.cartList.filter((curElem) => {
                //  const a = curElem._id !==action.paylode
                 console.log(curElem._id !==action.paylode)
                return curElem._id !==action.paylode
            })
           
        }

    }
    
    return state
}