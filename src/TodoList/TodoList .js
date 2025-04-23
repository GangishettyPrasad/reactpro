import React, { useState } from "react";
import Task from "./Task";


const TodoList = () => {

    const [tasks, setTasks] = useState(['prasad', 'naresh', 'suresh', 'ramesh', 'srikanth'])

    const deleteTask = React.useCallback((id)=>{

        setTasks((prevTasks) => {
            console.log(prevTasks,'prevTasks')
            
            return prevTasks.filter((_, index) => index !== id);
        });
        },[])

    const add = ()=>{
        var addingTask = [...tasks]
        var userinput = prompt()
       addingTask = [...addingTask , userinput]
       setTasks(addingTask)
    }
    return (
        <>
          {/* <Task add={add}/> */}
            {
                tasks.map((t, i) => {
                    return <Task task={t} id={i} key={i} del={deleteTask} add ={add} />
                })
              
            }
        </>
    )
}

export default TodoList