import {Modal,Button,Form} from "react-bootstrap"
import React, { useState } from 'react';
import Rating from "./Rating";
function Edit({moviedata, setMoviedata,t,des,url,r,id}){
    const [show, setShow] = useState(false);
// console.log(moviedata)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [title,setTitle]=useState(t)
    const [discription,setDiscritipionn]=useState(des)
    const [path,setPath]=useState(url)
    const [rating,setRating]=useState(r)

    //  const Ajouter=()=>{setMoviedata([...moviedata, {
    //    id:Math.random,
    //   title :title ,
    //   description : discription,
    //   posterUrl : path,
    //   rate:rating


    //  }])}

     const edit=(id, newmovie)=>{  setMoviedata(moviedata.map(el=>el.id===id ? {
         ...el, ...newmovie} : el)) }
    return(
        <div>
     <Button variant="dark" onClick={handleShow}>
        Edit Film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setTitle(e.target.value)} value={title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Discription</Form.Label>
           
            <Form.Control as="textarea" rows={3} placeholder="Enter Discription" onChange={(e)=> setDiscritipionn(e.target.value)}  value={discription} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="text" placeholder="Enter the path" onChange={(e)=> setPath(e.target.value)} value={path} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Rating rating={rating} setRating={setRating}/>
            {/* <Rate rate={r}  /> */}
            {/* <Rating setRating={setRating} value={r}  ></Rating> */}
            {/* <ReactStars
          count={5}
          onChange={(x)=>setRating(x)}
          size={24}
          activeColor="#ffd700"
        
          value={rating}
        /> */}
        {/* <input  value={rating}  onChange={(e)=>setRating(e.target.value)} ></input> */}
            </Form.Group>
        </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="success" onClick={()=> {  edit(id, {title,posterUrl:path,rate:rating,description:discription});  handleClose() }}>
            Edit
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>

    )
}

export default Edit