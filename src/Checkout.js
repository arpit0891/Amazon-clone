import React from 'react'
import Header from './Header'
import { useStateValue } from './StateProvider'
import "./css/Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from "./Subtotal"

function Checkout() {
    const [{basket}]=useStateValue()
   
    return (
        <div>
            <Header/>
            <div className="checkout">
            
                <div className="checkout_left">
                        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/ProBeautyB2B/amazon-professional-beauty-wholesale-banner2x2_sign_up_CTA.jpg" alt="banner"/>
                        {basket.length===0?
                        (<div className="checkout_title">
                            <h1>Your Shopping Cart is Empty</h1>
                            <p>You have no items in your cart. visit to store and make your purchase to make it visible here.</p>
                        </div>)
                        :(<div>
                            <h1 className="checkout_title"> {basket?.length} Item in your Cart </h1>
                            {basket.map(item=>(
                                
                                <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                            ))}
                        </div>)}
                </div>
                {basket.length>0 && (
                    <div className="checkout_right">
                        <Subtotal />
                        {/* <Subtotal /> */}
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default Checkout
