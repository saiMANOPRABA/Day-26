import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Createstudent(props) {
  let [name,setName]=useState("")
  let [mobile,setMobile]=useState("")
  let [email,setEmail]=useState("")
  let [batch,setBatch]=useState("")

  let navigate = useNavigate(); 


  let handleSubmit = ()=>{
    let data = {
      name,
      mobile,
      email,
      batch
    }

    let students = [...props.data.students];
    students.push(data)
    props.data.setStudents(students)
    navigate('/dasshboard')
  }

  return <>
  <div className='form1'>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile:</Form.Label>
        <Form.Control type="text" placeholder="Mobile Number"  value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Batch:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Batch" value={batch} onChange={(e)=>setBatch(e.target.value)} />
      </Form.Group>
      <Button className='sub-Button' variant="primary" onClick = {()=>handleSubmit()}>
        Submit
      </Button>
    </Form>


  </div>
  </>
}

export default Createstudent