import React from 'react'
import {Button, Card } from 'react-bootstrap';

const Details = (props) => {
    const found =props.moviedata.find(el=>el.id==props.match.params.id)

    
    return (
        
    <div className='details'>
     {/* <a href="#" class="previous">&laquo; Previous</a> */}
        <Button onClick={()=>props.history.goBack()} variant="dark">&laquo; Previous</Button>
            <Card className='bg-dark text-white'>
            <Card.Title>{found.title}</Card.Title>
    <Card.Body>
        
      <Card.Text>
                {found.description}
      </Card.Text>
    </Card.Body>
    <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={found.trailer} ></iframe>
            </div>  
  </Card>


        </div>
    )
}

export default Details
