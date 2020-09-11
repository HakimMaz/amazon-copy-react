import React from 'react'
import './Home.css';
import Product from "./Product";



function Home() {
    
    return (
        <div className="home">
            <div className="home_container">
              <img src={'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'}
               alt="logo" 
               className="home_image"/>
               <div className="home_row">
                    <Product
                    id={1}  
                    title="the leap stick to use in the night with great lamp,in montagne, also in forest,everywhere you want ,you'll not regret this product" 
                    price={24.56} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}/>
                    <Product
                    id={2}  
                    title="Kenwood kMix Stand Mixer for making delicious juice, orange,lemon,pineapple" 
                    price={111.02} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    rating={2}/>                
               </div>
               <div className="home_row">
                    <Product
                    id={3}  
                    title="FitBit band" 
                    price={13.08} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={1}/>
                    <Product
                    id={4}  
                    title="Amazon Echo" 
                    price={8.17} 
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    rating={5}/>
                    <Product
                    id={5}  
                    title="New Apple iPad Pro" 
                    price={99.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
                    rating={3}/>              
               </div>
               <div className="home_row">      
                    <Product
                    id={6}  
                    title="Samsung LED Monitor" 
                    price={69.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={2}/>
               </div>



            </div>
        </div>
    )
}

export default Home
