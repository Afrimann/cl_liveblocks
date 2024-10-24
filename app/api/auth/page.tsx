'use client'
import Login from '@/app/components/Login'
import Register from '@/app/components/Register'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true)
  const [showRegister, setShowRegister] = useState<boolean>(false)
  const [loginDetails, setLoginDetails] = useState([])
  const [registerInfo, setRegisterInfo] = useState([])

  const displayLoginPage = () => {
    setShowRegister(false)
    setShowLogin(true)
  }
  const displayRegisterPage = () => {
    setShowLogin(false)
    setShowRegister(true)
  }
  useEffect(() => {
    const handleFetchLoginDetails = async () => {
      const response = await fetch('www.jsonplaceholder.typicode.com')
      try {
        if (!response.ok) {
          throw new Error('Network Error')
          console.log('Failed to fetch login details');
        }
      }
      catch (error) {
        throw new Error('An unknown error occured')
        console.log('Failure to fetch due to unknown event');
      }
      const LoginDetails = response.json
      setLoginDetails(loginDetails)

    }
  }, [])

  useEffect(() => {
    // const userInfoStore = []
    // userInfoStore.push(registerInfo)

  }, [])

  const handleUserFieldChange = () => {

  }
  const handleRegister = () => {

  }

  const handleStoretoDatabase = () => {

  }

  return (
    <div className='auth'>
      <Login 

      />
      
      <Register 

      />

    </div>
  )
}

export default page
