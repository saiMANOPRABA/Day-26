import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
 import {useNavigate,useParams} from 'react-router-dom';

function Edittudents(props) {
  let params = useParams();

  let [name,setName]=useState(props.data.students[params.id].name)
  let [mobile,setMobile]=useState(props.data.students[params.id].mobile)
  let [email,setEmail]=useState(props.data.students[params.id].email);
  let [batch,setBatch]=useState(props.data.students[params.id].batch);

  let navigate = useNavigate();
  
  let handleSubmit = ()=>{
    let data = {
      name,
      mobile,
      email,
      batch
    }
  let students = [...props.data.students]
  students.splice(params.id,1,data)
  props.data.setStudents(students)
navigate('/dasshboard')  
  }

  return <>
  <div className='form1'>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Your Name"  onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile:</Form.Label>
        <Form.Control type="text" value={mobile} placeholder="Mobile Number"   onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" value={email} placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Batch:</Form.Label>
        <Form.Control type="text" value={batch} placeholder="Enter Your Batch"  onChange={(e)=>setBatch(e.target.value)} />
      </Form.Group>
      <Button className='sub-Button' variant="primary" onClick = {()=>handleSubmit()}>
        Submit
      </Button>
    </Form>


  </div>
  </>
}

export default Edittudents