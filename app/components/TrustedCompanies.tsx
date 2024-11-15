import { StaticImageData } from 'next/image'
import vercel from '../components/images/download (8).svg'
import dock from '../components/images/download (16).svg'
import zapier from '../components/images/download (13).svg'
import salesloft from '../components/images/download (11).svg'
import facet from '../components/images/download (7).svg'
import hourOne from '../components/images/download (5).svg'
import hashnode from '../components/images/download (6).svg'
import arcol from '../components/images/download (15).svg'
import agility from '../components/images/download (5).svg'
import tango from '../components/images/download (4).svg'

interface Props{
    id: number
    img: StaticImageData
    alt: string
}

const trustedCompanies:Props[] = [
    {
       id: 1,
       img: vercel,
       alt: 'vercel'
    },
    {
        id: 1,
        img: dock ,
        alt: 'dock'
     },
     {
        id: 1,
        img: zapier ,
        alt: '_zapier'
     },
     {
        id: 1,
        img: salesloft ,
        alt: 'salesloft'
     },
     {
        id: 1,
        img: facet, 
        alt: 'facet'
     },
     {
        id: 1,
        img: hourOne ,
        alt: 'hourOne'
     },
     {
        id: 1,
        img: hashnode ,
        alt: 'hashnode'
     },
     {
        id: 1,
        img: arcol ,
        alt: 'arcol'
     },
     {
        id: 1,
        img: agility ,
        alt: 'agility'
     },
     {
        id: 1,
        img: tango ,
        alt: 'tango'
     }
]

export default trustedCompanies


// 'use client'
// import Login from '@/app/components/Login'
// import Register from '@/app/components/Register'
// import React, { useEffect, useState } from 'react'

// const page = () => {
//   const [showLogin, setShowLogin] = useState<boolean>(true)
//   const [showRegister, setShowRegister] = useState<boolean>(false)
//   const [loginDetails, setLoginDetails] = useState([])
//   const [registerInfo, setRegisterInfo] = useState([])

//   const displayLoginPage = () => {
//     setShowRegister(false)
//     setShowLogin(true)
//   }
//   const displayRegisterPage = () => {
//     setShowLogin(false)
//     setShowRegister(true)
//   }
//   useEffect(() => {
//     const handleFetchLoginDetails = async () => {
//       const response = await fetch('www.jsonplaceholder.typicode.com')
//       try {
//         if (!response.ok) {
//           throw new Error('Network Error')
//           console.log('Failed to fetch login details');
//         }
//       }
//       catch (error) {
//         throw new Error('An unknown error occured')
//         console.log('Failure to fetch due to unknown event');
//       }
//       const LoginDetails = response.json
//       setLoginDetails(loginDetails)

//     }
//   }, [])

//   useEffect(() => {
//     // const userInfoStore = []
//     // userInfoStore.push(registerInfo)

//   }, [])

//   const handleUserFieldChange = () => {

//   }
//   const handleRegister = () => {

//   }

//   const handleStoretoDatabase = () => {

//   }

//   return (
//     <div className='auth'>
//       <Login

//       />

//       <Register

//       />

//     </div>
//   )
// }

// export default page
