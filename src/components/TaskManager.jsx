import React from 'react';
import TaskItem from './TaskItem';
// import sunset from "../assets/Sunset.jpg";
// import '../index.css';


function TaskManager() {
  return (
    <div className=" flex bg-purple-700 h-screen  justify-center items-center ">
       {/* <img id='sunset' src={''} alt=""/> */}
        <div className='max-w-xxl bg-white rounded-xl px-20 py-20'>
        
            <form className=" flex space-x-2 w-[30rem] mb-10">
              <label htmlFor="enter">Enter your new list item</label>
              <input type="text" id='enter' className='border-2 border-yellow-500 p-2 rounded-md outline-none
                        w-10/12' />

              <button type='submit' className='bg-purple-600 px-5 py-2 text-white text-lg rounded-md'>
                    Add</button>

            </form>
                <div className='space-y-2'>
                  <TaskItem/>
                  <TaskItem/>
                  <TaskItem/>
                  <TaskItem/>
                </div>
            
        </div>
    </div>
    
  );

}

export default TaskManager;