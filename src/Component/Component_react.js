import React, { useEffect } from "react";
import { useState } from "react";
import  "./Component_react.css"
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
const Component_react = (props) => {
    const dispatch = useDispatch();

    const handleChange = (id) => {
     

        const newName = prompt("Enter new name:"); // Get new name from user
    if (newName) { // Ensure user didn't cancel or leave empty
      dispatch({ type: "change", payload: id, name: newName });
    }
    
      };

      const handleChange1 = (id) => {
     

        const newName = prompt("Enter new name:"); // Get new name from user
    if (newName) { // Ensure user didn't cancel or leave empty
      dispatch({ type: "changenum", payload: id, num: newName });
    }
    
      };




    console.log(props ,'react redux props data')
    const [a, setA] = useState('hello')

    const Nested = (props) => {

        useEffect(() => {
            setA('OM NAMASHIVAYAH')
        }, [])
        return (
            <>
                <div>this is an nested components {a} </div>
                <div>this is yhe nested value {props.name}  </div>
            </>
        )
    }

    return (
        <>
            <h1 style = {{marginTop : " 30px"}}>React Component</h1>
            <div>
                <ol>
                    <li>
                         component name ist letter must be capital
                        whenever export that component its exportable component i.e  importing component in that component its accessing this function
                    </li>
                    <li>
                        import Component_react from './Component/Component_react';
                        {/* <Component_react></Component_react> */}
                        syntax for accessing into another component
                    </li>
                </ol>
            </div>
            <h2>nested components </h2>
            <div>
                <Nested name='prashanth' />
            </div>
            <h1>
                jsx Rules
            </h1>
            <div>
                <ol>
                    <li>javascript syntax extention write html and js code in one place</li>
                    <li>
                        wrappped in one tag and write code in that tag 
                    </li>
                    <li>
                        varables or expressions write {`in {} like {varable name and expressions 
                        like 2+4 
                        or (true ) ? {} : {} 
                        or (true) && {} 
                        }`}
                    </li>
                    <li>in jsx one tag is one element</li>
                    <li>css class names write className </li>
                     <li> js evnents write like camel case onClick {`()=>{}`}</li>
                </ol>
            </div>
            <div>{props.data.map((d,i)=>{
                   return <li key={i}> <strong>Name:</strong> {d.name} | <strong>Number:</strong> {d.num} | <strong>Village:</strong> {d.village} <button onClick={()=>{handleChange(i)}}>change name  </button> <button onClick={()=>{handleChange1(i)}}>change num  </button> </li>
            })}</div>

            



        </>
    )
}

export default connect((store )=>{return store}) (Component_react)