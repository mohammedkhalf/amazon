import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
                alt="" 
            />

            <div className="home__row">
                <Product 
                    id="1"
                    title="the lean Startup"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61kcUZYve1L._AC_SY400_.jpg"
                />
                  <Product 
                    id="2"
                    title="the lean Startup"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61S7BrCBj7L._AC_SY400_.jpg"
                />
                <Product 
                    id="3"
                    title="the lean Startup"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71NbfFpRvzL._AC_SY400_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="4"
                    title="the lean Startup"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81z8tQe35hL._AC_SY400_.jpg"
                />
                <Product 
                    id="5"
                    title="the lean Startup"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91l2Hzlu8zL._AC_SY400_.jpg"
                />
                <Product 
                    id="6"
                    title="the lean Startup"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SY400_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
