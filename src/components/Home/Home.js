import React, { useEffect, useState } from 'react'
import './Home.css';
import Product from '../Product/Product';
import productList from '../../data/products.json'

const Home = () => {

  const [products, setProducts] = useState([])

  const productCategories = ["Electronics", "Wearable Devices", "Video Games", "Computers"]

  useEffect(() => {
    setProducts(productList)
  },[])

  

  return (
    <div className="home">
        <img src={require('../../images/home-bg.jpg')} className="home__image" />
        <div className="home__categoryDropDown">
         
        </div>
        <div className="home__productGrid">
          {products.map(product => (
            <Product 
              id={product.id}
              title={product.title}
              rating={product.rating}
              price={product.price}
              image={product.image}
            />
          ))}
        </div> 
    </div>
  )
}

export default Home