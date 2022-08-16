
import React, { useState } from 'react'

function Form() {
   const[data , setData]= useState(
    { 
        firstName:"",
        middleName:"",
        lastName:"",  
        gender:"",
        dateOfBirth:"",
        phoneNumber:"",
        email:"",
    }
    );

    const handleChange = (e)=>{
        let name= e.target.name
        let value= e.target.value
        setData({...data , [name]: value})
    };
    console.log(data)
        
 return (            
        <div className='h-screen bg-gradient-to-br from-fuchsia-900 to-green-900 flex justify-center items-center'>
            <div className='max-w-2xl w-full bg-gray-300 rounded-xl p-10'>
                <div className='bg-yellow-600 text-white rounded-md items-center text-center px-2 py-2 m-10 '> REGISTRATION</div>
                    <form >
                        <div className=' flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap-x-3'>
                                {/* creating a div to contain the firstName , MiddleName and LastName */}
                            <div>
                                <label htmlFor="firtsName" className='form-label'> First Name : </label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id='firstName'
                                    className='form-input'
                                    value={data.firstName}
                                    onChange= {handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="middleName" className='form-label'> Middle Name :  </label>
                                <input 
                                    type="text" 
                                    name="middleName" 
                                    id="midddleName"
                                    className='form-input'
                                    value={data.middleName}
                                    onChange= {handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className='form-label'> Last Name :  </label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName"
                                    className='form-input'
                                    value={data.lastName}
                                    onChange= {handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="gender"className='form-label'>Gender</label>
                            <label htmlFor="male " className='form-label'>
                            <input 
                                type="radio" 
                                name='gender' 
                                value="male " 
                                id=" male " 
                                onChange= {handleChange}
                            />
                                Male        
                            </label>
                            <label htmlFor=" female " className='form-label'>
                            <input 
                                type="radio" 
                                name='gender' 
                                value="female " 
                                id="female" 
                                onChange= {handleChange}
                            />
                                Female       
                            </label>
                        </div>

                        <div>
                            <label htmlFor=" dateOfBirth " className='form-label'> Date of birth </label>
                            <input type="date"
                                name= "dateOfBirth"
                                value={data.dateOfBirth}
                                onChange= {handleChange}
                            />
                            
                        </div>

                        <div>
                            <label htmlFor=" phone " className='form-label'> Phone Number </label>
                            <input 
                                type="tel" 
                                placeholder=' xxx-xxx-xxxx ' 
                                value={data.phoneNumber}
                                onChange= {handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="email" className='form-label'> Email </label>
                            <input type="email"
                                name='email' 
                                id='email'
                                placeholder=' alorzuke2000@gamil.com '
                                value={data.email}
                                onChange= {handleChange}
                            />
                        </div>
                        <div>
                            <button type=' submit ' className='bg-green-800 p-1 text-white mt-10 p-2'> Register </button>
                        </div>

                    </form>
            </div>
        </div>
    ) }

export default Form;