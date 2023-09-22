
import './App.css';
import Gallery from './Gallery';
import Editarea from './Editarea';
import Navbar from './Navbar';
import { useState } from 'react';
function App() {
  const[text,settext]=useState('https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=2000')

  const one=()=>{
    settext('https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=2000')
  }
  const two=()=>{
    settext('https://cdn.cbeditz.com/cbeditz/large/flex-board-printing-yellow-banner-background-download-y0kna.jpg')
  }
  const three=()=>{
    settext('https://template.canva.com/EAENvp21inc/1/0/1600w-qt_TMRJF4m0.jpg')
  }
  const four=()=>{
    settext('https://img.freepik.com/free-vector/abstract-yellow-blue-geometric-banner-half-tone-design_1017-39620.jpg')
  }
  
  
  return (
    <div className="App">
      <Navbar/>
      <h1 className='heading'>Welcome to Gallery</h1>
      <p>Select any image from the gallery and move to the bottom to edit it</p>
      <Gallery link="https://img.freepik.com/free-vector/business-presentation-banner-with-blue-geometric-shape_1017-32330.jpg?w=2000" click={one} />
      <Gallery link="https://cdn.cbeditz.com/cbeditz/large/flex-board-printing-yellow-banner-background-download-y0kna.jpg" click={two}/>
      <Gallery link="https://template.canva.com/EAENvp21inc/1/0/1600w-qt_TMRJF4m0.jpg" click={three}/>
      <Gallery link="https://img.freepik.com/free-vector/abstract-yellow-blue-geometric-banner-half-tone-design_1017-39620.jpg" click={four}/>
      <Editarea text={text}/>
      
    </div>
  );
}

export default App;
