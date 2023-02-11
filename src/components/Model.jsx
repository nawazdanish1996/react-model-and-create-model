import React, { useState } from 'react'
import ShowModel from './ShowModel';

const Model = () => {
    const [showModel, setShowModel] = useState(false);
    
  return (
    <div>
        <button onClick={()=> setShowModel(true)}>Open Model</button>
        { showModel && <ShowModel modelClose={(setShowModel)} /> }
        <h1>Mister</h1>
    </div>
  )
}

export default Model