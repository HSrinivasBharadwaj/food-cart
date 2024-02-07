import React from 'react'
import Categories from './Categories'
import PopularRestaurants from './PopularRestaurants'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <section className='mx-2 my-3  md:mx-52 md:my-10 lg:mx-52 lg:my-10 xl:mx-52 xl:my-10'>
        <div className='mt-3'>
            {/* Categories Component */}
            <Categories />
        </div>
        <hr className='border border-dotted mt-2'/>
        <div className='mt-3'>
          {/* Popular Restaurants */}
          <PopularRestaurants />
        </div>
        <hr />
        <div className='mt-3'>
          {/* Main Restaurant Container */}
          <MainContainer />
        </div>
    </section>
  )
}

export default Body