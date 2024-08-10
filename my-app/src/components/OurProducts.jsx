import React from 'react'
import '../styles/OurProducts.sass'
import product1 from '../img/icon/ourProduct/image 1.png'
import product2 from '../img/icon/ourProduct/image 2.png'
import product3 from '../img/icon/ourProduct/image 3.png'
import product4 from '../img/icon/ourProduct/image 4.png'
import product5 from '../img/icon/ourProduct/Image 5.jpg'
import product6 from '../img/icon/ourProduct/image 6.png'
import product7 from '../img/icon/ourProduct/image 7.png'
import product8 from '../img/icon/ourProduct/image 8.png'



const OurProducts = () => {
  return (
    <div className='OurProducts'>
        <h1>Our Products</h1>
        <div className="products">



            <div className="product">
                <div className="image-block">
                    <img src={product1} alt="" />
                    <div className="sale">-30%</div>
                    {/* <div className="new"></div> */}
                </div>
                <div className="product-info">
                    <h2>Syltherine</h2>
                    <p>Stylish cafe chair</p>
                    <div className="price">
                        <h2>Rp 2.500.000</h2>
                        {/* <p>Rp 3.500.000</p> */}
                    </div>
                </div>
                <div className="wrapper">
                    <button>Add to cart</button>
                    <div className="link">
                        <div className="share">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z" fill="white"/>
                            </svg>
                            <p>Share</p>
                        </div>
                        <div className="like">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9997 21.0542C-7.99987 10 6.00011 -1.99997 11.9997 5.58809C18.0001 -1.99997 32.0001 10 11.9997 21.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                            <p>Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="image-block">
                    <img src={product2} alt="" />
                    <div className="sale">-30%</div>
                    {/* <div className="new"></div> */}
                </div>
                <div className="product-info">
                    <h2>Leviosa</h2>
                    <p>Stylish cafe chair</p>
                    <div className="price">
                        <h2>Rp 7.000.000</h2>
                        <p>Rp 14.000.000</p>
                    </div>
                </div>
                <div className="wrapper">
                    <button>Add to cart</button>
                    <div className="link">
                        <div className="share">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z" fill="white"/>
                            </svg>
                            <p>Share</p>
                        </div>
                        <div className="like">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9997 21.0542C-7.99987 10 6.00011 -1.99997 11.9997 5.58809C18.0001 -1.99997 32.0001 10 11.9997 21.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                            <p>Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="image-block">
                    <img src={product3} alt="" />
                    <div className="sale">-50%</div>
                    {/* <div className="new"></div> */}
                </div>
                <div className="product-info">
                    <h2>Lolito</h2>
                    <p>Luxury big sofa</p>
                    <div className="price">
                        <h2>Rp 500.000</h2>
                        {/* <p>Rp 3.500.000</p> */}
                    </div>
                </div>
                <div className="wrapper">
                    <button>Add to cart</button>
                    <div className="link">
                        <div className="share">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z" fill="white"/>
                            </svg>
                            <p>Share</p>
                        </div>
                        <div className="like">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9997 21.0542C-7.99987 10 6.00011 -1.99997 11.9997 5.58809C18.0001 -1.99997 32.0001 10 11.9997 21.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                            <p>Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="image-block">
                    <img src={product4} alt="" />
                    {/* <div className="sale"></div> */}
                    <div className="new">New</div>
                </div>
                <div className="product-info">
                    <h2>Respira</h2>
                    <p>Minimalist fan</p>
                    <div className="price">
                        <h2>Rp 500.000</h2>
                        {/* <p>Rp 3.500.000</p> */}
                    </div>
                </div>
                <div className="wrapper">
                    <button>Add to cart</button>
                    <div className="link">
                        <div className="share">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z" fill="white"/>
                            </svg>
                            <p>Share</p>
                        </div>
                        <div className="like">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9997 21.0542C-7.99987 10 6.00011 -1.99997 11.9997 5.58809C18.0001 -1.99997 32.0001 10 11.9997 21.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                            <p>Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="image-block">
                    <img src={product5} alt="" />
                    {/* <div className="sale"></div> */}
                    {/* <div className="new"></div> */}
                </div>
                <div className="product-info">
                    <h2>Grifo</h2>
                    <p>Night lamp</p>
                    <div className="price">
                        <h2>Rp 1.500.000</h2>
                        {/* <p>Rp 1.500.000</p> */}
                    </div>
                </div>
                <div className="wrapper">
                    <button>Add to cart</button>
                    <div className="link">
                        <div className="share">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z" fill="white"/>
                            </svg>
                            <p>Share</p>
                        </div>
                        <div className="like">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9997 21.0542C-7.99987 10 6.00011 -1.99997 11.9997 5.58809C18.0001 -1.99997 32.0001 10 11.9997 21.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                            <p>Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="image-block">
                    <img src={product6} alt="" />
                    {/* <div className="sale"></div> */}
                    <div className="new">New</div>
                </div>
                <div className="product-info">
                    <h2>Muggo</h2>
                    <p>Small mug</p>
                    <div className="price">
                        <h2>Rp 150.000</h2>
                        {/* <p>Rp 3.500.000</p> */}
                    </div>
                </div>
                <div className="wrapper">
                    <button>Add to cart</button>
                    <div className="link">
                        <div className="share">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z" fill="white"/>
                            </svg>
                            <p>Share</p>
                        </div>
                        <div className="like">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9997 21.0542C-7.99987 10 6.00011 -1.99997 11.9997 5.58809C18.0001 -1.99997 32.0001 10 11.9997 21.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                            <p>Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="image-block">
                    <img src={product7} alt="" />
                    <div className="sale">-50%</div>
                    {/* <div className="new"></div> */}
                </div>
                <div className="product-info">
                    <h2>Pingky</h2>
                    <p>Cute bed set</p>
                    <div className="price">
                        <h2>Rp 7.000.000</h2>
                        <p>Rp 14.000.000</p>
                    </div>
                </div>
                <div className="wrapper">
                    <button>Add to cart</button>
                    <div className="link">
                        <div className="share">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z" fill="white"/>
                            </svg>
                            <p>Share</p>
                        </div>
                        <div className="like">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9997 21.0542C-7.99987 10 6.00011 -1.99997 11.9997 5.58809C18.0001 -1.99997 32.0001 10 11.9997 21.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                            <p>Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="image-block">
                    <img src={product8} alt="" />
                    {/* <div className="sale"></div> */}
                    <div className="new">New</div>
                </div>
                <div className="product-info">
                    <h2>Potty   </h2>
                    <p>Minimalist flower pot</p>
                    <div className="price">
                        <h2>Rp 500.000</h2>
                        {/* <p>Rp 3.500.000</p> */}
                    </div>
                </div>
                <div className="wrapper">
                    <button>Add to cart</button>
                    <div className="link">
                        <div className="share">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z" fill="white"/>
                            </svg>
                            <p>Share</p>
                        </div>
                        <div className="like">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9997 21.0542C-7.99987 10 6.00011 -1.99997 11.9997 5.58809C18.0001 -1.99997 32.0001 10 11.9997 21.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                            <p>Like</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
            <button>Show More</button>
    </div>
  )
}

export default OurProducts