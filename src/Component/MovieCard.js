import {Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
function MovieCard({el:{title,posterUrl,description,trailer,rate},handleName}){
    return( 
        <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={posterUrl} height="100%"/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
        {description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Rate : {rate}</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href={trailer}>Film Link</Card.Link>
    
  </Card.Body>
  <Button variant="primary" onClick={() =>handleName(title)}>Show Title</Button>

</Card>
        </>


    )
}


export default MovieCard
