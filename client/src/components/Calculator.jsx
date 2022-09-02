import React from "react";
import './style.css';

const buttonsValues =[
    ["C", "%", "^", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, "="],
  ];

  interface Props {
    calculation: (item: string|number) => void;
    getResult: () => void;
    reset: () => void;
  } 

  const Calculator:React.FC<Props> = (props)=> {
    const onClickhandler = (val: string| number)=> {
        if(val === "="){
            props.getResult()
        }
        else if(val === "C"){
            props.reset();
        }
        else if (val=== "X"){
            props.calculation("*")
        }
        else{
            props.calculation(val)
        }
    }
    return (
        <div className="buttonBox">
              {
          buttonsValues.map((buttons, i) => {
             return buttons.map((val, i) => {
                return (
                  <button
                  className="button"
                    key={i}
                    value={val}
                    onClick={()=> onClickhandler(val)}
                  >{val}
                    </button>
                );

            })
          })
        }
        </div>
    )
  }

  export default Calculator;