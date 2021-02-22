import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIncon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header() {
    const [{basket},user]=useStateValue()
    console.log(basket);
    const login=()=>{
        if (user){
            auth.signOut()
        }
    }
    console.log(user);
    return (
        <nav className="header">
            {/* logo */}
            <Link to="/">
            <img className="logo" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt=""/>
            </Link>
            {/* Search Box */}
            <div className="search">
                <input type="text" className="search_box"/>
                <SearchIcon className="search_icon"/>
            </div>
            {/* 3 links: SignIn/Orders/Prime */}
            <div className="header_links">
                {/* Link: 1 */}
                <Link to={!user && "/login"} className="link">
                    <div onClick={login} className="options">
                        <span className="span1">Hello!,{user?.email}</span>
                        <span className="span2">{user?'Sign out':'Sign In'}</span>
                    </div>
                </Link>

                {/* Link: 2 */}
                <Link to="/" className="link">
                    <div className="options">
                        <span className="span1">Return &</span>
                        <span className="span2">Orders</span>
                    </div>
                </Link>

                {/* Link: 3 */}
                <Link to="/" className="link">
                    <div className="options">
                        <span className="span1">Your</span>
                        <span className="span2">Prime</span>
                    </div>
                </Link>

                {/* Link: 4 */}
                <Link to="/checkout" className="link">
                    <div className="options_checkout">
                        {/* basket icon */}
                        <ShoppingBasketIncon />
                        {/* basket count */}
                        <span className="span3">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
