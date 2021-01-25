import React,{useState,useEffect,useContext} from 'react';
import './Body.css';
import {ProductContext} from './ProductCategoryContext'

function Body() {
   const products  = useContext(ProductContext)
  //   const [products,setProducts] = useState([])
  // useEffect(()=> {
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //     setProducts(data)
  //   })
  // },[])
    return (
        <div className='body'>
             {products.map(product => (
    <div className="body__product">
       <div className="product__title">
       <h3>{product.title}</h3>
       </div>
      <img src={product.image ? product.image : 'logo192.png'} alt=''/>
      {/* <p>{product.description}</p> */}
      <h2 className='price'>{product.price}$</h2>
    </div>
     
    ))}
        </div>
    )
}

export default Body
