import React, { useEffect } from "react"
import "./css/App.css"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home"
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'
function App(){
    const [{basket},dispatch]=useStateValue()
    useEffect(()=>{
        const change=auth.onAuthStateChanged((authUser)=>{
            if (authUser){
                //user logged in
                dispatch({
                    type:"SET_USER",
                    user:authUser
                })
            }
            else{
                //user logged out
                dispatch({
                    type:"SET_USER",
                    user:null
                })
            }
    
        })
        return ()=>{
            change();
        }
    },[])
    return (
        <Router>
            <Switch>
                <Route path="/checkout">
                    <Checkout/>
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/">
                    <Header />
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
export default App