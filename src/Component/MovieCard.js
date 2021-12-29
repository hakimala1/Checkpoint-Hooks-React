import {Button, Card, ListGroup, } from 'react-bootstrap';
import '../App.css';
import Edit from './Edit';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';





function MovieCard({el:{title,posterUrl,description,trailer,rate,id},  setMoviedata, moviedata}){
  // console.log(rate)

  // const [rat,setRate]=useState()  
  // useEffect(() => {
  //   // Met à jour le titre du document via l’API du navigateur
  //  setRating(rate)
  // },[]);
  return( 
        <>
<Card style={{ width: '18rem' }} className='bg-dark text-white'>
  <Card.Img variant="top" src={posterUrl} height="100%"/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text >
        {description}
    </Card.Text>
   
  </Card.Body>
  {/* <ListGroup className="list-group-flush">
    <ListGroupItem>Rate : {rate}</ListGroupItem>

  </ListGroup> */}
    <Card.Footer>
    <ListGroup className="list-group-flush">
    {/* <ListGroupItem>Rate : <Rate rate={rate} /></ListGroupItem> */}
    <ReactStars
          count={5}
          value={rate}
          size={24}
          activeColor="#ffd700"
          edit={false}
        
          
        />
        {/* <Rating rating={rating} setRating={setRating}/> */}

  </ListGroup>
    </Card.Footer>
 
 
  <Card.Footer>
    <div className='D'>
    <Card.Link href={trailer}>Film Link</Card.Link>
    {/* <Button variant="info">Details</Button> */}
    <Link to={`/Details/${id}`}><Button variant="info">Details</Button></Link>
    </div>
    </Card.Footer>
 <Edit t={title} des={description} url={posterUrl} r={rate}  id={id}   moviedata={moviedata} setMoviedata={setMoviedata} ></Edit>
  

</Card>

{/* <Card>
    <Card.Img variant="top" src={posterUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{rate}</small>
    </Card.Footer>
    <Card.Footer>
      <small className="text-muted">{trailer}</small>
    </Card.Footer>
  </Card> */}
        </>


    )
}


export default MovieCard
