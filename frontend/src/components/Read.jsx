import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Read = () => {
const[data, setData] = useState();
const[error, setError] = useState();

const handleDelete = async (id)=>{
  const response = await fetch(`http://localhost:5000/${id}`,{method: "Delete"})

  const result = await response.json();
  if(!response.ok){
    setError(result.error)
  }
  if(response.ok){
    setError("Deleted Successfully");
    setTimeout(()=>{
      setError("")
      getData();
    },1000)
  }

}


const getData = async ()=>{
  const response = await fetch("http://localhost:5000")
  const result = await response.json();
  if(!response.ok){
    setError(result.error);
  }
  if(response.ok){

    setData(result);
    setError("");
  }
}

useEffect(()=>{
  getData();
},[]);


return (
  <div>
    {error && <div class="alert alert-danger" >
      {error}</div>}
    <Row>
      {data?.map((ele)=>(
        <Col key={ele._id} sm={6} md={4} lg={3}>
          <Card style={{margin: "20px"} }>
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Age: {ele.age}</Card.Subtitle>
              <Card.Text>
                {ele.email}
              </Card.Text>
              <Link to={`/${ele._id}`} style={{marginRight: 20}}>Edit</Link>
              
              <Link onClick={()=>{handleDelete(ele._id)}}>Delete</Link>
          
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
}


export default Read