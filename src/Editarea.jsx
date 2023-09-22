import React from 'react'
import { useState } from 'react'

export default function Editarea(props) {
    const[imagetext,setimagetext]=useState('')
    const[imagedesc,setimagedesc]=useState('')

    const puttext=(e)=>{
        setimagetext(e.target.value)
    }
    const putdesc=(e)=>{
        setimagedesc(e.target.value)
    }
    const[color,setcolor]=useState('black')
    const changecolor=()=>{
        if(color=="white"){
            setcolor("black")
        }
        else{
            setcolor("white")
        }
    }
    const[st,setst]=useState('lower')
    const changecase=()=>{
        if(st=="lower"){
            setst("upper")
            
            setimagetext(imagetext.toUpperCase())
        }
        else{
            setst("lower")
            
            setimagetext(imagetext.toLowerCase())
        }

    }
    const clear=()=>{
        setimagedesc("")
    }
    const download=()=>{
        var a = document.body.appendChild(
            document.createElement("a")
         );
        a.download = "newfile.html";
        a.href = "data:text/html," + document.getElementById("photo").innerHTML;
        a.click(); //Trigger a click on the element
    }
    


  return (
    <div className=' container' >
        <h1 className='heading'>You can edit your image here</h1> <br />
        <label htmlFor="">Enter Your Heading Here</label>
        <input className='form-control mr-10' type="text" onChange={puttext}/>
        <label htmlFor="">Enter Your Description Here</label>
        <input className='form-control mr-10' type="text" onChange={putdesc}/>
        {/* <button onClick={puttext}>Submit</button> */}
        <div className='editarea container'style={{backgroundImage:`url(${props.text})`}} id='photo'>
            <p className='textinsideimage' style={{color:`${color}`}}>{imagetext}</p>
            <p className='descinsideimage' style={{color:`${color}`}}>{imagedesc}</p>
        </div>
        <div style={{display:`flex`}}>
        <button  className=' btn btn-outline-dark' onClick={changecolor} style={{marginTop:`10px`,marginBottom:`20px`,marginRight:`20px`}}>Toggle Text-Color</button>
        <button className=' btn btn-outline-dark' onClick={changecase} style={{marginTop:`10px`,marginBottom:`20px`,marginRight:`20px`}}>ToLower/ToUpper</button>
        <button className=' btn btn-outline-dark' onClick={clear} style={{marginTop:`10px`,marginBottom:`20px`,marginRight:`20px`}}>Clear Description</button>
        <button className=' btn btn-outline-dark' onClick={download} style={{marginTop:`10px`,marginBottom:`20px`,marginRight:`20px`}}>Download</button>
        
        <a href="https://cdn.cbeditz.com/cbeditz/large/flex-board-printing-yellow-banner-background-download-y0kna.jpg" download={`YourBanner`}><button className=' btn btn-outline-dark'  style={{marginTop:`10px`,marginBottom:`20px`,marginRight:`20px`}}>Download Banner</button></a>
        </div>
        

        
      
    </div>
  )
}
