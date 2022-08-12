import React from 'react'
import {TrashIcon} from  "@heroicons/react/outline"

function TaskItem() {
  return (
    <div><div className='flex items-center bg-purple-300 border-2 border-yellow-400 rounded-md'>

    <div className='flex-1 '>  -Reminder for today's activity.  </div>
    <div className = "bg-yellow-700 p-2 rounded-md">  <TrashIcon height={24}/>

    </div>

</div>
</div>
  )
}

export default TaskItem;