import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {v4 as uuid} from "uuid"
function Todo() {
    const [data,setdata]=useState([]);
    const [showAll,setShowAll]=useState(true)
    const handleAdd=(title)=>{
        const payLoad={
            title,
            status:false,
            id:uuid()
        }
        setdata([...data,payLoad])
    }
    // const handleDelete=e=>{
    // // let parent=e.target.parentNode;
    // // parent.remove
    // }
    const handleToggle=id=>{
        const updatedTodo=data.map((item)=>item.id===id?{...item,status:!item.status}:item)
        setdata(updatedTodo)
    }
    
    return (
        <div>
            <TodoInput onClick={handleAdd}/>
           {
           data.filter((item)=>(showAll?true:!item.status))
           .map(item=>
                <TodoList 
                // handleDelete={handleDelete}
                handleToggle={handleToggle}
                key={item.id}{...item}
                />
            )
        }
        <button onClick={()=>setShowAll(!showAll)}>{showAll?"SHOW ONLY UNFINISHED TASK":"SHOW ALL TASK"}</button>
        </div>
      );
}

export default Todo;