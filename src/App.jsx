import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchCats } from './catState'


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCats())
    console.log('effect')
  },[dispatch])

  return (
    <>

    </>
  )
}

export default App
