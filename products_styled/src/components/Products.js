import React,{useState} from 'react'
import { ProductList,Title,Item,Price,ProductName,ProductPic } from '../styles/Products.styled';
import data from '../data';

export const Products = () => {
    const [product]=useState(data);

  return (
      <>
      <Title>Products</Title>
      <ProductList>
          {
              product.map(el=>{
                  return(
                      <Item key={el.id}>
                          <ProductPic src={el.image} alt={el.name}></ProductPic>
                          <ProductName>{el.name}</ProductName>
                          <Price>${el.price}</Price>
                      </Item>
                  )
              })
          }
      </ProductList>
      </>
    
  )
}
