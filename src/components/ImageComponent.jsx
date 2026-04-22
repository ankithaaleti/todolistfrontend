import '../css/imagecomponent.css'
import sample from '../assets/sample.jpg'
import  {useEffect,useState} from 'react'
function ImageComponent(){
    let [data,setData]=useState()
    useEffect(()=>{
        console.log('Mounting')
        return()=>{
            console.log('Unmounting')
        }
    },[])
    return(
        <div className="imagecomponent">
            <img src={sample} alt=""></img>
            <input type="text" onChange={(event)=>{setData(event.target.value)}}></input>
            <p>{data}</p>
        </div>
    )
}
export default ImageComponent