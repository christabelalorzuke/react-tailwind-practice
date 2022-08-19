import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

function TaskItem({ task, handleDelete }) {
  return (
    <div className="flex items-center justify-between bg-teal-100 border-2 border-gray-300 rounded-md ">
      
      <div className="flex space-x-2 ">
        <input type="checkbox" name="" id="" Checked={task.completed===true} onChange={()=>{}} />
        <div className="flex-1">{task.text}</div>
      </div>
      
      <button
         className="bg-blue-700 p-2 rounded-md"
         onClick={() => handleDelete(task.id)}
      >
         <TrashIcon height={24} color="yellow" />
      </button>
    </div>
  );
}

export default TaskItem;
