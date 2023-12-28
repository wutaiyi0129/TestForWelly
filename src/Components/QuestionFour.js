import { useState } from "react"
export default function QuestionFour(){
    const [isLogin,setLogin]=useState(true)

    return(
        <div>
        <h1>第四題</h1>
      {isLogin?<h1>Happy !!Im login!!</h1>
      :
      <h1>Sad...Im not Login</h1>
    }
    </div>
  
    )
}