import React,{useEffect,useState,createContext} from 'react';


export const ProductContext = createContext();

 export function ProductCategoryProvider(props) {
     
    const [products,setProducts] = useState([])
    useEffect(()=> {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setProducts(data)
      })
    },[])
    return (
       <ProductContext.Provider value={products}>
           {props.childern}
       </ProductContext.Provider>
    )
}

