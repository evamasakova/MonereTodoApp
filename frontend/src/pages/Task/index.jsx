/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"

export default function Task() {
  const { id } = useParams(); 

  return (
    <div>Task {id}</div>
  )
}
