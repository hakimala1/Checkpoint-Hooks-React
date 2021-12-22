import {Form} from 'react-bootstrap';




function NavBar({search,setSearch}){
  
    return( 
<div>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Control type="text" placeholder="Search..." onChange={(e)=> setSearch(e.target.value)} value={search} />
    {/* <h1>{search}</h1> */}

  </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
            
            </Form.Group>
  


</Form>
</div>


    )
}

export default NavBar