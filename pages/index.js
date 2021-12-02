import React from 'react'
// import Navbar from '../components/Navbar'
import Product from '../components/Product'

const index = ({products}) => { 
  return (
    <main className="container">
      {
        products.map(product=> <Product key={product.id} product={product}/>)
      } 
    </main>
  )
}

export default index;

// export async function getStaticProps() {

// }

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products")
  const products = await req.json();
  return {
    props:{products}
  }
}

