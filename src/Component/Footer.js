import React from 'react'
import {Carousel} from "react-bootstrap"
function Footer() {
    return (
        <div className='foot'>
        <Carousel className='foot'>
  <Carousel.Item interval={1000}>
  <h3>Action</h3>

    <Carousel.Caption>
      <h3>Action</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
 
    <Carousel.Caption>
      <h3>Drama</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    <Carousel.Caption>
      <h3>Comedy</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Footer
