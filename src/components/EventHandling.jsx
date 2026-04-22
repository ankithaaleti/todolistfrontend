import '../css/eventhandling.css/'
import { useState } from 'react'
function EventHandling(){
    let [data,setData]=useState()
    let display=()=>{
        alert('button clicked')
    }
    let readdata=(event)=>{
        setData(event.target.value)

    }
    return(
        <div className="eventhandling">
             <button onClick={display}>click me</button>
             <input type="text" onChange={readdata}/>
             <p>{data}</p>

        </div>
    )
}
export default EventHandling