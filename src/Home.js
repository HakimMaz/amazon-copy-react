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
                    <Product/>
                    <Product/>                
               </div>
               <div className="home_row">
                    <Product 
                    title="the leap stick" 
                    price={13.08} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}/>
                    <Product/>
                    <Product/>              
               </div>
               <div className="home_row">
                    <Product/>
                    <Product/>
               </div>



            </div>
        </div>
    )
}

export default Home
