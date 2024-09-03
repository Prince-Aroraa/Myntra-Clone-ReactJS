import React from 'react'
import ProductItem from '../components/ProductItem'
import HomeHeader from '../components/HomeHeader'
import { useSelector } from 'react-redux'

function Home() {
  const items = useSelector(store=> store.items);

  return (
    <>
    <HomeHeader/>
    
    <div className="product_container">
      {items.map(item=><ProductItem key={item.id} item={item}/>)}
      
      
      </div>
    </>
  )
}

export default Home