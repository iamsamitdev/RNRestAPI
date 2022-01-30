import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductCard from './../components/ProductCard';

const Detail = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://smart-inventory-ep3.herokuapp.com/api/products")
      .then(res => res.json())
      .then((result) => {
        setProducts(result)
        // console.log(products)
      },
      (error) => {
        console.log(error)
      }
    )
  })

  return (
    <ScrollView>
      {products.map(product => (
        <ProductCard 
          navigation={props.navigation} 
          key={product._id} 
          product={product} 
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    fontSize: 20,
    borderWidth: 3,
    borderColor: "brown",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 15
  }
})

export default Detail