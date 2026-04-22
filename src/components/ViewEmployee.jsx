import { useEffect,useState,useRef } from "react"
import axios from "axios";
import Employeecard from './Employeecard'
import '../css/viewemployee.css'
function ViewEmployee(){
    let [data,setData]=useState([])
    let next_url=useRef();
    let prev_url=useRef();
    let getdata=(url)=>{
        axios.get(url).then((resp)=>{
            console.log(resp)
            prev_url.current=resp.data.previous;
            next_url.current=resp.data.next;
            setData(resp.data.results)
        }).catch((err)=>{
            console.log(err)
        })

    }
    useEffect(()=>{
        let get_url='http://127.0.0.1:8000/api/getemployee';
        getdata(get_url);
    },[])

    return(
        <div className="viewemployee">{
            data.map((obj)=>{
                return<Employeecard ename={obj.empname}
                esal={obj.empsal}
                dname={obj.dno?.deptname}
                profile={obj.profile_pic}
                video={obj.selfie_video}></Employeecard>

            })
        }
            <button onClick={()=>getdata(prev_url.current)} disabled={prev_url.current==null}>Previous</button>
            <button onClick={()=>getdata(next_url.current)} disabled={next_url.current==null}>Next</button>
        </div>
    )
}
export default ViewEmployee