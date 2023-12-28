import { useState } from "react";
export default function QuestionFive(){
    const [count, setCount] = useState(0);

    const Increase = () => {
      setCount(count + 1);
    };
  
    const Decrease = () => {
      setCount(count - 1);
    };
return(
    <div className="counter">
      <h1>第五題</h1>
      <h1 className="number">計數器：{count}</h1>
      <button className="IncreaseButton" onClick={Increase}>增加</button>
      <button className="DecreaseButton"  onClick={Decrease}>減少</button>
    </div>
)
}