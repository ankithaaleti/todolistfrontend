import EventHandling from './EventHandling/'
import ImageComponent from './ImageComponent/'
import '../css/mainpage.css'
import { useState } from 'react'
import Todolist from './Todolist/'
import ViewEmployee from './ViewEmployee'
function MainPage(){
    let [show,setShow]=useState(false)
    let showhide=()=>{
      setShow(!show)
    }
    return(
      <div className='mainpage'>
        { /*<ViewEmployee/>*/ }
      </div>
    )
}
export default MainPage