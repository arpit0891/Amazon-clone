export const initialState={
    basket:[],
    user:null
}
export const getBasketTotal=(basket)=>{
    return(
    basket?.reduce((amount,item)=>item.price+amount,0))
}

const reducer = (state,action)=>{
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "ADD_TO_BASKET":
            return {
                ...state,//returning the curent state,
                basket:[...state.basket,action.item]//adding the item to the current basket
            };
        case "REMOVE_FROM_BASKET":
            let newBasket=[...state.basket] //cloned the basket
            //find index of product id to be removed
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)
            if (index>=0)
            {   //got to index and remove first occurence of that particular id
                newBasket.splice(index,1)//items exist in basket
            
            }
            else{
                console.warn("Can't remove")
            }
            return {...state,basket:newBasket}
        default:
            return state
    }
}
export default reducer