import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

export default function Task(props) {
  return(
    <li className={"task "+ (props.task.status&&"completed")}>
      <span>{props.task.value}</span>
      <span className="todo-list-btns">
        <button className="list-btn completed-btn" onClick={() => props.completeTask(props.task.id)}><FaCheck/></button>
        <button className="list-btn delete-btn" onClick={() => props.deleteTask(props.task.id)}><MdDeleteForever /></button>
      </span>
      
    </li>
  );
}