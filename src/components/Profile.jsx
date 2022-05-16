import React, { useState } from 'react'

function Profile() {
    const [fullName,setFullName]=useState('')
    const [bio,setBio]=useState('')
    const [profession,setProfession]=useState('')
    const [show,setShow]=useState(true)

    const toggleShow =()=>{
        setShow(!show)
    }
   
  return (
    <div>
        <button onClick={()=>toggleShow()}> {show? 'Hide':'Show'}</button>
        {show?<div>
         
            <span>FullName : {fullName}</span>  <br></br>
            <input onChange={(e)=> setFullName(e.target.value)} />  <br></br>
            <input onChange={e=>setBio(e.target.value)}></input><br></br>
            <span>Bio: {bio} </span><br></br>
            <input onChange={e=>setProfession(e.target.value)}></input><br></br>
            <span>Profession: {profession}</span>
        </div>
        :""}
    </div>
  )
}

export default Profile