import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [filteredProducts,setFilterProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
            setFilterProducts(data);
        });
    },[]);
   useEffect(()=>{
       const savedCart = getStoredCart();
       const storedCart = [];
      if(products.length){
        for(let key in savedCart){
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct){
                addedProduct.quantity = savedCart[key];
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart);
      }
   },[products]);
    const handleAddToCart = product =>{
        const newCart = [...cart,product];
        setCart(newCart);

        // add data to database
        addToDb(product.key);
    }
    const handleSearch = event =>{
       const searchText = event.target.value;
       const searchTextoUppercase = searchText.toUpperCase();
       const matchedProducts = products.filter(product => product.name.toUpperCase().includes(searchTextoUppercase));
       setFilterProducts(matchedProducts);
    //    setProducts(products);
    }
    return (
        <>
          <div className="search-container">
              <input type="text" placeholder="Search Products" onChange={handleSearch} />
          </div>
          <div className="shop-container">
            <div className="product-container">
                {
                    filteredProducts.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
        </>
    );
};

export default Shop;