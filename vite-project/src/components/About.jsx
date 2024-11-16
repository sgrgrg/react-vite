import React, { useContext } from 'react'
import productContext
 from '../context/productContext'
 const About = () => {
  const context = useContext(productContext)
  const { product } = context
  console.log("hello", product);
  return (
    <h4>this is about</h4>
  )
}

export default About