import React, { useContext } from 'react';
import productContext from '../context/productContext';
import Mac from "../assets/images/mac.jpeg";
import '../css/About.css';

const About = () => {
    const context = useContext(productContext);
    const { state: { cart }, dispatch, product } = context;
    console.log("thsi is cart",cart);
    
    console.log("hello", product);

    return (
        <>
            <div className="about-container">
                <h4 className="our-product-title">Our Product</h4>
                <div className="product-grid">
                    {product.map((item) => (
                        <div key={item.id} className="product-card">
                            <img src={Mac} className="product-image" alt="Product" />
                            <div className="product-details">
                                <h5 className="product-title">{item.name}</h5>
                                <p className="product-description">{item.description}</p>
                                <p className="product-price">Rs. {item.price}</p>
                                {cart && cart.some(p => p.id === item.id) ? (
                                    <button
                                        className="product-button remove-button"
                                        onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item
                                            });
                                        }}
                                    >
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button
                                        className="product-button add-button"
                                        onClick={() => {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: item
                                            });
                                        }}
                                    >
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;
