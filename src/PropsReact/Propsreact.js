import React from "react"

const Propsreact = ({value,value1,value2}) => {
    console.log("props",value,"props",value1,value2)
    const a = prompt()
    const b = value2(a)
    console.log(b,'function calling and store value')
    return (
        <>
            <h1 style={{ marginTop: " 30px" }}>Props in React</h1>
            <div>
                
                    <div>
                        data communication between parent component to child component
                    </div>
                    <div>
                        props are immutable never change data in child component only its showing and accessing the data
                    </div>
                
                    
                        <div>
                            <div style={{
                                whiteSpace: "pre-wrap",
                                overflowX: "auto",
                                maxWidth: "100%",
                                border: "1px solid #ccc",
                                padding: "10px",
                                borderRadius: "5px",
                                backgroundColor: "#f5f5f5"
                            }}>
                                <pre style={{
                                    margin: 0,
                                    whiteSpace: "pre-wrap",
                                    wordWrap: "break-word"
                                }}>
                                    {`  const [value, setValue] = useState('value');
                                        const [value1, setValue1] = useState(
                                                                                {
                                                                                    "name": 'prasad',
                                                                                    "clg": 'cvsr',
                                                                                    "yearofpass": 2010,
                                                                                    "subjects": ["telugu", "hindi", "english"],
                                                                                    "workplace": {
                                                                                    "company": "vsaas",
                                                                                    "year": 2016
                                                                                    }
                                                                                }
                                                                            )
                                        const [value2, setValue2] = useState(
                                                                                function(){
                                                                                    alert('hello')
                                                                                }
                                                                            )
    apply this values like this 

                            <ChildComponent value={value} value1={value1} value2={value2} />
                                                                                            `}
                                </pre>
                            </div>
                        </div>
                    

                
            </div>
        </>
    )
}
export default Propsreact