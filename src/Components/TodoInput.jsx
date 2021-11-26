import { useState } from "react";
import './todo.css'
function TodoInput({onClick}) {
    const [title,setTitle]=useState("")

       
    return ( 
        <div className="flex add_todo_box">
            <input  className="input_box" placeholder="add something" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button className='add_btn' onClick={()=>onClick(title)}>add</button>
        </div>
     );
}

export default TodoInput;