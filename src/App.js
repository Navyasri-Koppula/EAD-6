import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]= useState("");
const[DOB,setDOB]= useState("");
const[semester,setSemester]= useState("");
const[skills,setSkills]= useState("");
const[cgpa,setCgpa]= useState("");
const[internship_done,setID]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/students',
{name:sname,
DOB:DOB,
semester:semester,
skills:skills,
cgpa:cgpa,
intership_done:internship_done
}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="text"
name="sname"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>DOB</b></label>
<input
type="text"
name="DOB"
onChange={(e)=>{
setDOB(e.target.value);
}}
required/>
<label><b>Semester</b></label>
<input
type="text"
name="semester"
onChange={(e)=>{
setSemester(e.target.value);
}}
required/>
<label><b>Skills</b></label>
<input
type="text"
name="skills"
onChange={(e)=>{
setSkills(e.target.value);
}}
required/>
<label><b>cgpa</b></label>
<input
type="text"
name="cgpa"
onChange={(e)=>{
setCgpa(e.target.value);
}}
required/>
<label><b>internship_done</b></label>
<input
type="text"
name="internship_done"
onChange={(e)=>{
setID(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;
