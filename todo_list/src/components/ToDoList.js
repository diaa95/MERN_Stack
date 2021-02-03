import {useState} from "react";

const ToDoList = (props) =>{
    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    const handleSubmit =(e) =>{
        e.preventDefault();
        const list = [...toDoList, {task:newTask, status:false}];
        setToDoList(list);
        setNewTask("");
    }
    const handleCheck = (e, ind)=>{
        const updatedList = [...toDoList]
        updatedList[ind].status = e.target.checked;
        setToDoList(updatedList);
    }
    const deleteHandler = (e,ind) =>{
        e.preventDefault();
        const newList = [...toDoList];
        newList.splice(ind, 1);
        setToDoList(newList);
    }

    const css ={
        textDecoration: "line-through",
}
    return(
        <>
            <h2>To do List</h2>
            <ul>
                {toDoList.map((item, ind) => {
                    return (
                        <li>
                            {item.status?<span style={css}>{item.task}</span>:<span>{item.task}</span>}
                            <input type={"checkbox"} checked={item.status} onChange={e => handleCheck(e, ind)}/>
                            <button id={ind} onClick={(e) => deleteHandler(e,ind)}>Delete</button>
                        </li>
                    )

                })}
            </ul>
            <form onSubmit={ handleSubmit }>
                <input type={"text"} onChange={e => setNewTask(e.target.value)} value={newTask}/>
                <input type={"submit"} value={"Add Task"}/>
            </form>
        </>
    )
}
export default ToDoList;