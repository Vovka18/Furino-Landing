import React from 'react'
import '../styles/feature.sass'
import CustomerSupport from '../img/icon/feature/customer-support.svg'
import Guarantee from '../img/icon/feature/guarantee.svg'
import Shipping from '../img/icon/feature/shipping.svg'
import Trophy from '../img/icon/feature/trophy.svg'



const Feature = () => {
  return (
    <div className='feature'>
        <div className="feature-block">
            <div className="icon">
                <img src={Trophy} alt="" />
            </div>
            <div className="text-info">
                <h2>High Quality</h2>
                <p>crafted from top materials</p>
            </div>
        </div>
        <div className="feature-block">
            <div className="icon">
                <img src={Guarantee} alt="" />
            </div>
            <div className="text-info">
                <h2>Warrany Protection</h2>
                <p>Over 2 years</p>
            </div>
        </div>
        <div className="feature-block">
            <div className="icon">
                <img src={Shipping} alt="" />
            </div>
            <div className="text-info">
                <h2>Free Shipping</h2>
                <p>Order over 150 $</p>
            </div>
        </div>
        <div className="feature-block">
            <div className="icon">
                <img src={CustomerSupport} alt="" />
            </div>
            <div className="text-info">
                <h2>24 / 7 Support</h2>
                <p>Dedicated support</p>
            </div>
        </div>
    </div>
  )
}

export default Feature