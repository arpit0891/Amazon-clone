//this all is like global variable which can be used directly in ract
//app without passing props to parent, grandparent and i's child

//we need this to track basket
import React , {createContext,useContext,useReducer} from "react" 
//this is data layer
export const StateContext = createContext();

//build a provider
export const StateProvider= ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
)

//this is how we use it inside the components, eg: while creating add to basket stuff
export const useStateValue = () =>useContext(StateContext)