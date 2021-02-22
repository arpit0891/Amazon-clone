import React from 'react'
import "./css/Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroDec-20/Dec_AuCC_Seasonal_1X._CB414979991_.jpg"/>
            <div className="product-row">

            {/* Products */}
            <Product 
                id="202101"
                title="Park Avenue Damage Free Beer Shampoo, 350ml"   
                image="https://u2x5j9r8.stackpathcdn.com/images/thumbs/0008219_park-avenue-damage-free-hair-beer-shampoo-350ml_510.jpeg"
                price={20}
                rating={4}
            />
            <Product 
                id="202102"
                title="Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart Android LED TV 43X7400H (Black) (2020 Model)"   
                image="https://azcd.domayne.com.au/media/catalog/product/q/a/qa65q80tawxxy_2.jpg"
                price={650}
                rating={3}
            />
            {/* Products end here */}
            </div>

            <div className="product-row">

            {/* Products */}
            <Product 
                id="202103"
                title="New Apple iPhone 12 Pro (128GB) - Graphite"   
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604021663000"
                price={900}
                rating={5}
            />
            <Product 
                id="202104"
                title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"   
                image="https://www.gizmochina.com/wp-content/uploads/2020/09/OnePlus-8T-500x500.jpg"
                price={450}
                rating={4}
            />
            <Product 
                id="202105"
                title="Samsung Galaxy A71 (Prism Crush Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"   
                image="https://images.samsung.com/is/image/samsung/assets/uk/p6_gro2/p6_initial_pcd/p6_initial_mobile/All_PCD_Smartphones_720X752_module_11.png?$ORIGIN_PNG$"
                price={550}
                rating={3}
            />
            {/* Products end here */}
            </div>

            <div className="product-row">
            {/* Products */}
            <Product 
                id="202106"
                title="LG 89 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69"   
                image="https://azcd.harveynorman.com.au/media/catalog/product/h/g/hg90_edit_4.png"
                price={1020}
                rating={5}
            />
            {/* Products end here */}
            </div>

        </div>
    )
}

export default Home
