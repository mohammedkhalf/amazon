import React from 'react'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';

import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://salesfunnelhq.com/wp-content/uploads/2018/07/AdBadger_Banner_Ads_05-1024x225.png"
                    alt=""
                />

                {basket.length === 0 ? (      //basket?.length
                    <div>
                        <h2>Your Shopping Cart is empty</h2>
                    </div>

                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>

                        {
                            basket.map(item => (   //basket?.map

                                <CheckoutProduct 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ) )
                        }
                    </div>
                )}
            </div>

            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}

        </div>
    )
}

export default Checkout
