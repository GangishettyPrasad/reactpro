import React, { useEffect, useState } from "react";

const Task = ({task,id,del,add})=>{
    //console.log(task,id,del)
   //const [deletedid, setDeletedid] = useState(id)
    // useEffect(()=>{
    //    console.log(task,'task')
    // },[deletedid])
    console.log(task,'task')

const [users,setUsers] = useState(['ppp','ssss'])



    return(
        <>
            <ul>
                <li>{task}
                    <button onClick={()=>{del(id)}}>DELETE</button>
                    <button onClick={()=>{add()}}> ADD </button>
                
                </li>
            </ul>


        </>
    )
}

export default Task