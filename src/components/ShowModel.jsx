import React, {useEffect} from 'react';
import { createPortal } from 'react-dom';
import "../css/ShowModel.scss";

const ShowModel = (props) => {

    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        return ()  =>{
            document.body.style.overflowY = "scroll";
        };
    },[])

  return createPortal (
    <div className="model-warpper" onClick={()=> props.modelClose(false)}>
        <div className='model-container'>
            <button onClick={()=> props.modelClose(false)} className='float-end'>X</button>
            <br />
            <h2>Nawaz Danish</h2>
            <p>Iusto doloribus unde fuga fugit quia voluptatem repudiandae repellat nemo beatae sequi necessitatibus!</p>
            <button onClick={()=> props.modelClose(false)} className='float-start'>Accept It</button>
        </div>
    </div>,
    document.getElementById("portalModalOne")
  )
}

export default ShowModel;