import React,{useEffect,useState,createContext,useContext} from 'react';
import { Select } from './Components/Nav/Nav';
// import {ProductCategoryProvider} from './CategoryContextValue';


export const ProductContext = createContext([]);
// export const CategoryContext = createContext('');
// const ProductCategory = useContext(Productcatgory);
  export const  ProductContextProvider =(props) =>{
     
    const [products,setProducts] = useState([]);
    const [category,setCategory]  = useState('all');
        
    useEffect(()=> {  
      const url  = category === 'all' ? `https://fakestoreapi.com/products` :
      `https://fakestoreapi.com/products/category/${category}`;
      console.log(url)
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setProducts(data)
      })
    },[products])
    return (
       <ProductContext.Provider value={products}>
           {props.children}
       </ProductContext.Provider>
    )
}
