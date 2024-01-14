import React, { useEffect, useState } from "react";
import deleteArrow from "./images/left-arrow.png"
import reloadButton from "./images/reload.png"


function Calculator() {

    const [text,setText] = useState("");
    const [commands, setCommands] = useState([])
    var [numbers, setNumbers] = useState([]);

    function handleClick(event) {
        
       

        
       setText((prevText) => { 
      
       if (commands.some(element => ["+", "-", "/", "*"])) {
        
        
            if (prevText.length >= 1 && numbers.length < 1) {
                
                setNumbers(prevNumbers => [...prevNumbers , event.target.innerHTML]);
                console.log(numbers)
                return event.target.innerHTML;
                
            }
            else {
               
               console.log("Your on the right track")

            return prevText + event.target.innerHTML;
        
            
            }
       }
    

       else {
        setNumbers(prevNumbers => [...prevNumbers , event.target.innerHTML]);
        console.log(numbers)
        return prevText + event.target.innerHTML;
       }
    }
       )
      
       

    }

    function handleClear() {
        setText("")
    }

    function handleClearAll(){
        setText("")
        setCommands([])
    }

    function handleDelete() {

        setText(text.slice(0,-1))

    }

    function handleAddOneToMemory() {
        setCommands(prevCommands => [...prevCommands, text])
    }

    function handleDeleteOneToMemory() {
        setCommands(prevCommands => prevCommands.slice(0,-1))
    }

    function handleDisplayMemory() {
        setText(commands)
    }

    function handleAddition() {
        
        setCommands(prevCommands => [...prevCommands, text, "+"])
        setNumbers([])        
    }
    function handleMultiplication() {
        
        setCommands(prevCommands => [...prevCommands, text, "*"])
        
        setNumbers([])
        }
    function handleSubtraction() {
        
        setCommands(prevCommands => [...prevCommands, text, "-"])
        setNumbers([])
            }
    function handleDivision() {
        setCommands(prevCommands => [...prevCommands, text, "/"])
        setNumbers([])
            }
   
    function handleCalculation() {
        const currentCommands = [...commands, text]
        

        if (currentCommands.length === 3 && currentCommands[1] === "+") {
            const result = parseInt(currentCommands[0]) + parseInt(currentCommands[2]);
            setText(result.toString());
            setCommands([])
        }
        else if (currentCommands.length === 3 && currentCommands[1] === "-") {
            const result = parseInt(currentCommands[0]) - parseInt(currentCommands[2]);
            setText(result.toString());
            setCommands([])
        }
        else if (currentCommands.length === 3 && currentCommands[1] === "/") {
            const result = parseInt(currentCommands[0]) / parseInt(currentCommands[2]);
            setText(result.toString());
            setCommands([])
        }
        else if (currentCommands.length === 3 && currentCommands[1] === "*") {
            const result = parseInt(currentCommands[0]) * parseInt(currentCommands[2]);
            setText(result.toString());
            setCommands([])
        }
        else {
            setText("Invalid")
        }
        
    }

  
    
 
    return (
        <div>
            <h1>{text}</h1>
            <div>
            <button><img src={reloadButton} alt="reload" /></button>
            <button onClick={handleDelete}><img src={deleteArrow} alt="delete"/></button>
            <button onClick={handleClear}>C</button>
            <button onClick={handleClearAll}>AC</button>
            </div>

            <div>
            <button onClick={handleClearAll}>mc</button>
            <button onClick={handleAddOneToMemory}>m+</button>
            <button onClick={handleDeleteOneToMemory}>m-</button>
            <button onClick={handleDisplayMemory}>mr</button>
            </div>

            <div>
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleDivision}>/</button>
            <button>R</button>
            </div>

            <div>
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleMultiplication}>X</button>
            <button>x^2</button>
            </div>

            <div>
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleSubtraction}>-</button>
            <button>1/x</button>
            </div>

        
            <button onClick={handleClick}>0</button>
            <button onClick={handleClick}>.</button>
            <button>+-</button>
            <button onClick={handleAddition}>+</button>
            <button onClick={handleCalculation}>=</button>

        </div>
    )

};
export default Calculator;