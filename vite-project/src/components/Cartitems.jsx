import React, { useContext } from 'react';
import productContext from '../context/productContext';
import Mac from "../assets/images/mac.jpeg";
import { MdDelete } from "react-icons/md";
import '../css/cartitem.css';

const CartItems = () => {
    const context = useContext(productContext);
    const { state: { cart }, dispatch } = context;
    const Total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
    console.log("cartPrice", Total);

    return (
        <div className='cart-container'>
            <div className='product-container'>
                <ul className='cart-list'>

                    {cart && cart.map((item) => (
                        <li className='cart-item' key={item.id}>
                            <div className='cart-row'>
                                <div className='cart-image'>
                                    <img src={Mac} alt='Product' />
                                </div>
                                <div className='cart-name'>
                                    <h4>Name: {item.name}</h4>
                                </div>
                                <div className='cart-price'>
                                    <h4>Price: {item.price}</h4>
                                </div>
                                <div className='cart-qty'>
                                    <select
                                        value={item.qty}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "CHANGE_CART_QTY",
                                                payload: {
                                                    id: item.id,
                                                    qty: e.target.value
                                                }
                                            })
                                        }
                                    >
                                        {[...Array(item.instock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='cart-delete'>
                                    <button
                                        type='button'
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item
                                            })
                                        }
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='cart-summary'>
                <div className='summary-title'>Total items: {cart.length}</div>
                <h4>Total: {Total}</h4>
                <button className='checkout-button'>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default CartItems;
