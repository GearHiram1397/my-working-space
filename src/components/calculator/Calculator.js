import React, {useState} from 'react';
import {Input} from "@material-ui/core"
import './calc.css'
import styled from 'styled-components';



const App = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [arr, setArr] = useState(["+", "-", "*", "/"]);

  const change = (event) => {
    let state = false;
      let value = null;
      if (event.target.value){
        if (event.target.value.length < currentValue.length) {
          setCurrentValue(event.target.value >= 1 ? currentValue.slice(0, currentValue.length - 1) : '');
          return
        }
      }
      else if (!event.target.value && !event.target.innerText) {
        setCurrentValue('');
        return
      }
      if (!event.target.value){
        value = event.target.innerText;
      }else{
        value = event.target.value[event.target.value.split("").length - 1];
      }
      if (value === "+" || value === "-" || value === "*" || value === "/"){
        for (let i in arr){
          state = currentValue.endsWith(arr[i]);
          if (state){
            break;
          }
        }
      }
    if ((+value || currentValue || value === ".") && state === false) {
      setCurrentValue(currentValue.concat(value));
      }
  }


  const giveAnswer = () => {
    if (currentValue){
      // eslint-disable-next-line no-eval
      let ans = String(eval(currentValue));
      setCurrentValue(ans === "0" ? "" : ans);
    }
  }

  return (
    <>
    <CalTitle>Calculator 🧮</CalTitle>
    <main className="calc-main-div">
        <div className="calc-container">
        
          <Input onChange={change} value={currentValue} 
          style={{
              borderBottom: "1px solid rgba(63, 81, 181, 0.5)", 
              width: "90%",
              margin: "10px", 
              padding: "5px", 
              color:'#eee', 
              marginBottom: "30px", 
              fontSize:'33px'
          }}/>
          <br />
            
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((obj, index)=>{
              if (obj !== "="){
                return(
                <React.Fragment key={index}>
                  <Button type="button" variant="outlined" color="primary" style={{fontWeight: "bolder", margin: "6px"}} onClick={change}>{obj}</Button>
                  {(obj === "/" || obj === "*" || obj === "-" || obj === "+") ? <br /> : null}
                </React.Fragment>
              )
            }else{
                return(<Button key={index} type="button" variant="outlined" color="primary" style={{fontWeight: "bolder", margin: "6px"}} onClick={giveAnswer}>{obj}</Button>)
            }
              })}
            <Button type="button" variant="outlined" color="primary" style={{fontWeight: "bolder", margin: "6px"}} onClick={()=> setCurrentValue('')}>Reset</Button>
        </div>
      </main>
      </>
  )

}
  //   this.state = {
  //     currentValue: ""
  //   }
  //   this.change = this.change.bind(this);
  //   this.giveAnswer = this.giveAnswer.bind(this);
  //   this.arr = ["+", "-", "*", "/"];
  // }}

export default App;



const Button = styled.button`
  padding: 4px;
  font-size: 25px;
  width: 20%;
  height: 50px;
  border-radius: 50px;
 

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
`



const CalTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: '#1a252f';` 