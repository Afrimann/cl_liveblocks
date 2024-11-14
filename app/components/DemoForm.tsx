// 'use client'
// import React, { useState } from 'react'
// import { FaArrowRight } from "react-icons/fa";

// const DemoForm = () => {
//     const [fName,setFName] = useState<string>('')
//     const [email,setEmail] = useState<string>('')
//     const [selectedSize,setSelectedSize] = useState<string>('')
//     const [selectedRole,setSelectedRole] = useState<string>('')
//     const [userInterest,setUserInterest] = useState<string>('')

//     const handleContinue = () => {
        
//     }
//     return (
//         <div className='h-screen mx-auto w-full p-4 md:p-6 lg:p-8'>
//             <div className="form flex flex-col gap-1 md:gap-2">
//                 <div className="input">
//                     <label htmlFor="fName">Full name</label>
//                     <input className='bg-black border border-gray-100 border-opacity-15 rounded-md p-3 focus:outline-none' type="text" placeholder='John Doe' />
//                 </div>
//                 <div className="input ">
//                     <label htmlFor="email">Email</label>
//                     <input className='bg-black border border-gray-100 border-opacity-15 rounded-md p-3  placeholder:text-[15px] focus:outline-none ' type="email" placeholder='e.g johndoe2024@example.com' />
//                 </div>
//                 <div className='size_role flex fles-row items-center gap-3'>
//                     <div className="companySize input">
//                         <label htmlFor="size">Company size</label>
//                         <select className='bg-black border border-gray-100 border-opacity-15 rounded-md p-3 w-[200px] focus:outline-none' name="size" id="size">
//                             <option value="Select size">Select Size</option>
//                             <option value="1-10">1-10</option>
//                             <option value="10-100">10-100</option>
//                             <option value="100-1000">100-1000</option>
//                             <option value="1000-5000">1000-5000</option>
//                             <option value="5000+">5000+</option>
//                         </select>
//                     </div>
//                     <div className="role input">
//                         <label htmlFor="role">Role</label>
//                         <select className='bg-black border border-gray-100 border-opacity-15 rounded-md p-3 w-[200px] focus:outline-none' name="role" id="role">
//                             <option value="Select Role">Select role</option>
//                             <option value="Engineer">Engineer</option>
//                             <option value="Product Manager">Product Manager</option>
//                             <option value="Engineering Leader">Engineering Leader</option>
//                             <option value="Product Leader">Product Leader</option>
//                             <option value="C-level">C-level</option>
//                             <option value="Other">Other</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className='input gap-3'>
//                     <label htmlFor="interest">What are you interested in?</label>
//                     <textarea className='bg-black border border-gray-100 border-opacity-15 rounded-md p-3 focus:outline-none' placeholder='I am interested in...' name="interest" id="" cols={30} rows={4}></textarea>
//                 </div>
//                 <button className='lg-button flex flex-row items-center justify-center gap-4 mt-1 md:mt-0 lg:mt-3 w-full'><span>Continue</span> <FaArrowRight /></button>
//             </div>
//         </div>
//     )
// }

// export default DemoForm


'use client'
import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

const DemoForm = () => {
    const [fName, setFName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [selectedSize, setSelectedSize] = useState<string>('')
    const [selectedRole, setSelectedRole] = useState<string>('')
    const [userInterest, setUserInterest] = useState<string>('')

    const handleContinue = () => {
        // Handle the continue action
    }

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-full max-w-md p-4 md:p-6 lg:p-8'>
                <div className="form flex flex-col gap-4">
                    <div className="input">
                        <label htmlFor="fName" className="text-sm md:text-base font-semibold">Full Name</label>
                        <input
                            className='w-full bg-black border border-gray-100 border-opacity-15 rounded-md p-3 text-sm md:text-base placeholder:text-gray-400 focus:outline-none'
                            type="text"
                            placeholder='John Doe'
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="email" className="text-sm md:text-base font-semibold">Email</label>
                        <input
                            className='w-full bg-black border border-gray-100 border-opacity-15 rounded-md p-3 text-sm md:text-base placeholder:text-gray-400 focus:outline-none'
                            type="email"
                            placeholder='e.g johndoe2024@example.com'
                        />
                    </div>
                    <div className='size_role flex flex-col md:flex-row items-center gap-3'>
                        <div className="companySize input w-full md:w-1/2">
                            <label htmlFor="size" className="text-sm md:text-base font-semibold">Company Size</label>
                            <select
                                className='w-full bg-black border border-gray-100 border-opacity-15 rounded-md p-3 text-sm md:text-base focus:outline-none'
                                name="size"
                                id="size"
                            >
                                <option value="Select size">Select Size</option>
                                <option value="1-10">1-10</option>
                                <option value="10-100">10-100</option>
                                <option value="100-1000">100-1000</option>
                                <option value="1000-5000">1000-5000</option>
                                <option value="5000+">5000+</option>
                            </select>
                        </div>
                        <div className="role input w-full md:w-1/2">
                            <label htmlFor="role" className="text-sm md:text-base font-semibold">Role</label>
                            <select
                                className='w-full bg-black border border-gray-100 border-opacity-15 rounded-md p-3 text-sm md:text-base focus:outline-none'
                                name="role"
                                id="role"
                            >
                                <option value="Select Role">Select Role</option>
                                <option value="Engineer">Engineer</option>
                                <option value="Product Manager">Product Manager</option>
                                <option value="Engineering Leader">Engineering Leader</option>
                                <option value="Product Leader">Product Leader</option>
                                <option value="C-level">C-level</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='input'>
                        <label htmlFor="interest" className="text-sm md:text-base font-semibold">What are you interested in?</label>
                        <textarea
                            className='w-full bg-black border border-gray-100 border-opacity-15 rounded-md p-3 text-sm md:text-base placeholder:text-gray-400 focus:outline-none'
                            placeholder='I am interested in...'
                            name="interest"
                            cols={30}
                            rows={4}
                        ></textarea>
                    </div>
                    <button
                        className='flex items-center justify-center gap-4 bg-white text-black p-3 rounded-md w-full mt-4 hover:bg-grsy-100 transition'
                        onClick={handleContinue}
                    >
                        <span>Continue</span> <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DemoForm
