import React from 'react';
import './Cart.css';
const cart = (props) => {
    const {cart} = props;
    let price = 0;
    let totalQuantity = 0;
    for(let product of cart){ 
        if(!product.quantity){
            product.quantity = 1;
        }
        else{
            totalQuantity = totalQuantity + product.quantity;
        }
        price = price + (product.price*product.quantity);
    }
    const shipping = cart.reduce((previousValue,product)=>previousValue+product.shipping,0);
    const totalBeforeTax = price+shipping;
    const taxAmount = price * .10;
    const totalPrice = totalBeforeTax+taxAmount;
    return (
        <div className="cart">
            <div className="cart-details">
                <h3>Order summary</h3>
                <p>Items ordered : {totalQuantity}</p>
                <table className="cart-table">
                    <tbody>
                    <tr>
                        <td>Items</td>
                        <td>${price.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling</td>
                        <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax :</td>
                        <td>${totalBeforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax :</td>
                        <td>${taxAmount.toFixed(2)}</td>
                    </tr>
                    <tr className="total-price">
                        <td>Order Total:</td>
                        <td>${totalPrice.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default cart;