import React from 'react'
import "./css/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
function Subtotal() {
    
    const [{basket}]=useStateValue()
    console.log(getBasketTotal(basket));
    return (
        
        <div className="subtotal">
            <img className="subtotal_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"/>
            <CurrencyFormat
                renderText={(value)=>(
                <>
                    <p>Subtotal ({basket.length} items):<strong>{`${value}`}</strong></p>
                <small className="gift">
                    <input type="checkbox"/>This oder contains  gift
                </small>
                </>
                    )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
