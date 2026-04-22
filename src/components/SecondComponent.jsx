import '../css/SecondComponent.css'
function SecondComponent(){
    let name;
    name=['ankitha','hothri','chandana']
    return(
        <div className='SecondComponent'>
            <h3>My friends are</h3>
            {
            name.map((n)=>{
                return <h3>{n}</h3>
            })
        }
        </div>
    )
}
export default SecondComponent