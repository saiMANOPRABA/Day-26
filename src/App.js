import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Edittudents from './components/Edittudents';
import Createstudent from './components/Createstudent';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
function App(props) {
  let data = {
    monthly :"₹40,000",
    anual:"₹52,00,000",
    task:"60%",
    pending:"20"

}

let [students,setStudents] =useState([
 {
  name:"praba",
  mobile:"5465465464",
  email:"praba@gmail.com",
  batch:"WD36T"
 },
 {
  name:"Mano",
  mobile:"545646987",
  email:"Mano@gmail.com",
  batch:"WD36T"
 },
 {
  name:"Manopraba",
  mobile:"466874121",
  email:"Manopraba@gmail.com",
  batch:"WD36T"
 }
]

)
  return <>
  <div id="wrapper">
  
  <BrowserRouter>
  <Sidebar/>
  <Routes>
    <Route path='dasshboard' element={<Dashboard data={{data,students,setStudents}}/>}/>
    <Route path='editstudent/:id' element={<Edittudents data ={{students,setStudents}} />}/>
    <Route path='createstudent' element={<Createstudent data ={{students,setStudents}}/>}/>
  </Routes>
  </BrowserRouter>
  </div> 
  </>
}

export default App
