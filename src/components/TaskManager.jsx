import React, { useState } from 'react';
import TaskItem from './TaskItem';
import background from "../assets/Background.jpg";
// import {list} from "postcss";



function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [ input, setInput] = useState("");


  const handleSubmit= (e) =>{
    e.preventDefault();
    if(input==="") return;

    setTasks([input, ...tasks] , () =>{});
    setInput("");
};

  return (

    <div className=" flex bg-purple-700 h-screen  justify-center items-center ">
       {/* <img id='sunset' src={''} alt=""/> */}
        <div className='max-w-xxl bg-white rounded-xl px-20 py-20 overflow-hidden'>

          <div className=' h-full flex justify-center rounded-xl px-5 py-10 bg-slate-800/950'>
          <img
          src={background}
          alt=""    
          />
         </div>
          <div className='max-w-xl w-full max-h-96 bg-white'>

            <form 
              onSubmit={handleSubmit}
              className="w-full space-x-5 flex justify-between mb-10"
            >

              <input 
                type="text" 
                className='border-2 border-yellow-500 p-2 rounded-md outline-non w-10/12' 
                onChange={(e) => setInput(e.target.value)}
                value={input} 
              />

              <button type='submit'
                className='bg-purple-600 px-5 py-2 text-white text-lg rounded-md'
                disabled={input===""}
                >
                    Add
              </button>
          </form>
                <div className='space-y-2 overflow-y-auto h-56'>
                  {
                    tasks.map((task) => (
                      <TaskItem task={task} />))
                  }
        </div>      
      </div>
    </div>
   </div>
    
  );

}

export default TaskManager;