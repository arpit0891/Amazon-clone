import React from 'react'
import "./css/Product.css"
import { useStateValue } from './StateProvider';

function Product(props) {
    const [,dispatch]=useStateValue()
    const add_cart =() =>{
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:props.id,
                title:props.title,
                image:props.image,
                price:props.price,
                rating:props.rating,
            },
        });
    };
    
    return (
        <div className="product-box">
            <div className="product-info">
                <p className="product-title">{props.title}</p>
                <p className="product-price">Price: $<strong>{props.price}</strong><sup> *<i style={{fontSize:12,color:'green'}}>Inclusive of all taxes</i></sup></p>
                < div className="product-rating">
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
                    
                </div>
            </div>
            <img className="product-image" src={props.image} />
            <button onClick={add_cart}>Add to Cart</button>
        </div>
    )
}

export default Product
