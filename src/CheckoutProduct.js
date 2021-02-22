import React from 'react'
import "./css/CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct(props) {
    const [{basket},dispatch]=useStateValue()
    const RemovefromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:props.id,
        })
    }
   
    return (
        <div className="checkout_prod">
            <div class="product_card">
            <img className="checkoutproduct_image" src ={props.image} alt=""/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{props.title}</p>
                <p className="checkoutproduct_price"><small>$</small><strong>{props.price}</strong></p>
                <p className="checkoutproduct_rating">
                    {
                        Array(props.rating)
                        .fill()
                        .map((_)=>(<p>⭐</p>))
                    }
                    {
                        Array(5-props.rating)
                        .fill()
                        .map((_)=>(<p>☆</p>))
                    }
                </p>
                <button className="checkoutproduct_button" onClick={RemovefromBasket}>Remove form Cart</button>
            </div>
            </div>
           
         </div>
    )
}

export default CheckoutProduct
