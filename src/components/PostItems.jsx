import { useLocation, useParams } from "react-router-dom"

export default function PostItems(){
    let params = useParams();
    let loaction= useLocation();
    console.log(loaction);
  return(
    <>
    <h1>Post No.{params.no} </h1>
    </>
  )
}