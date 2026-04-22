import '../css/todolist.css'
import { useState,useRef,useEffect } from 'react'
function Todolist(){
    let itemRef=useRef();
    let [items,setItems]=useState([]);
    let LIST_CREATE_URL = 'http://127.0.0.1:8000/todolist/todolist/';
    let MODIFY_URL = 'http://127.0.0.1:8000/todolist/editlist/';
    let fetchItems = async () => {
        try {
            let response = await fetch(LIST_CREATE_URL);
            let data = await response.json();
            setItems(data);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);
    let additems = async () => {
        let val = itemRef.current.value;
        if (!val) return;
        try {
            const response = await fetch(LIST_CREATE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    task: val, 
                    status: 'pending'
                }) 
            });

            if (response.ok) {
                itemRef.current.value = '';
                fetchItems(); 
            }
        } catch (err) {
            console.error("Add error:", err);
        }
    };
    let deleteitem = async (sno) => {
        try {
            const response = await fetch(`${MODIFY_URL}${sno}/`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setItems(items.filter(item => item.sno !== sno));
            }
        } catch (err) {
            console.error("Delete error:", err);
        }
    };
    return (
        <div className="todolist">
            <input ref={itemRef} type="text" placeholder="Add task..." />
            <button onClick={additems}>Add</button>
            <ul>
                {items.map((it) => (
                    <li key={it.sno}>
                        {it.task} 
                        <button onClick={() => deleteitem(it.sno)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Todolist
