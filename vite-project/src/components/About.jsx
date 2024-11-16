import React, { useContext, useEffect } from 'react';
import productContext from '../context/productContext';
import Mac from "../assets/images/mac.jpeg";

const About = () => {
    const context = useContext(productContext);
    const { product } = context;
    console.log("hello", product);

    return (
        <>
            <div className="about-container">
                <h4 className="our-product-title">Our Product</h4>
                <div className="product-grid">
                    {product.map((item) => {
                        return (
                            <div key={item.id} className="product-card">
                                <img src={Mac} alt={item.name} className="product-image" />
                                <div className="product-details">
                                    <h5 className="product-name">{item.name}</h5>
                                    <p className="product-description">{item.description}</p>
                                    <p className="product-price">Rs. {item.price}</p>
                                    <button className="add-to-cart-btn">Add to cart</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default About;
