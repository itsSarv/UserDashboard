
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';


const Create = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [age, setAge] = useState(0)
const [error, setError] = useState("")

console.log(name,email,age)
const handleSubmit = async(e)=>{

  const addUser = {name, email, age}

  const response = await fetch("http://localhost:5000",{
    method: "POST",
    body : JSON.stringify(addUser),
    headers:{
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if(response.ok){
    console.log(result)
    setError("")
    setName("")
    setEmail("")
    setAge("0")
  }
  if(!response.ok){
    console.log(result.error);
    setError(result.error);
  }
}

  return (
    <div className='container m-7 ' >
      {error && <div class="alert alert-warning" >
      {error}</div>}
      <br/>
      <h2 className='text-center m' > Enter The data </h2>
      <br/>
      <Form onSubmit={handleSubmit}>
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
          Submit
        </button>
        </Form>
      </div>
  )
}

export default Create