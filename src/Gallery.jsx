import React, { useState } from 'react'


export default function Gallery(props) {
    
    
  return (
    <div className='gallerypart container'>
        
        <img className='imageingallery' src={props.link} width={1000} height={200}/> <br />
        <button className='gallery-button btn btn-outline-dark' onClick={props.click} >Edit this image</button>
        
      
    </div>
  )
}
