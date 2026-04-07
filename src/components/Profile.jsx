import { useNavigate } from "react-router-dom"

export default function Profile(){
    let navigate= useNavigate();
  return(
    <>
    <h1>profile</h1>
    <button onClick={()=>navigate('/')}>back Home</button>
    </>
  )
}