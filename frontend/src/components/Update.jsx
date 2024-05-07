import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import {  useNavigate, useParams } from 'react-router-dom';




const Update = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [age, setAge] = useState(0)
const [error, setError] = useState("")
const {id} = useParams()
const navigate = useNavigate()

//get single user data
const getSingleUser = async()=>{
  const response = await fetch(`http://localhost:5000/${id}`);
    const result = await response.json()

    if(response.ok){
      setName(result.name)
      setAge(result.age)
      setEmail(result.email);
    }
    if(!response.ok){
      console.log(response.error)
      setError(response.error)
    }
};

useEffect(()=>{
  getSingleUser();
},[])

//send updated data to backend
const handleUpdate = async(e)=>{
  e.preventDefault();
  const updateduser = {name, email, age}

  const response = await fetch(`http://localhost:5000/${id}`,{
    method: "PATCH",
    body : JSON.stringify(updateduser),
    headers:{
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  if(!response.ok){
    setError(result.error);
  }

  if(response.ok){
    setError("")
    navigate("/all")
  }
}

  return (
    <div className='container m-7 ' >
      {error && <div class="alert alert-danger" >
      {error}</div>}
      <br/>
      <h2 className='text-center m' > Edit the data </h2>
      <br/>
      <Form onSubmit={handleUpdate}  >
       
      <Form.Floating className="mb-3">
      
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />
        <label htmlFor="floatingInputCustom">Full Name</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>

      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="Number"
          placeholder="Age"
          value={age}
          onChange={(e)=> setAge(e.target.value)
          }
        />
        <label htmlFor="floatingPasswordCustom">Age</label>
      </Form.Floating>

      <button type="submit" className="btn btn-primary m-3">
          Edit
        </button>
        </Form>
      </div>
  )
}

export default Update