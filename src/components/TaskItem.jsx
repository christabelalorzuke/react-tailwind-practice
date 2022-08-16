import React from 'react'
import {TrashIcon} from  "@heroicons/react/outline"

function TaskItem({task}) {
  return (
    <div className='flex items-center bg-purple-300 border-2 border-yellow-400 rounded-md'>
    <div className='flex-1 '>{task}</div>
    <div className = "bg-yellow-700 p-2 rounded-md"><TrashIcon height={24} color="blue"/>
    </div>
</div>
  );
}

export default TaskItem;