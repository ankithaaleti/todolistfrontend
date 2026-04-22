import  '../css/employeecard.css' 
function Employeecard(props){
    let base_url='http://127.0.0.1:8000/'
    return(
        <div className="employeecard">
            {props.profile ? <img src={base_url+props.profile} alt=" "/>:''}
            <p>Employee Name:{props.ename}</p>
            <p>Employee Salary:{props.esal}</p>
            <p>Department:{props.dname}</p>
            {props.video?<video src={base_url+props.video} alt=" "/>:''}

        </div>
    )
}
export default Employeecard
