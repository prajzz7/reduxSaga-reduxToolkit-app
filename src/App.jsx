import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCats } from './catState'


function App() {
  const dispatch = useDispatch()
  const cats = useSelector(state=>state.cats.cats)
  useEffect(()=>{
    dispatch(fetchCats())
    
  },[dispatch])


  return (
    <>
      <div className='App'>
      Cats Speciess
        <div className='Gallery'>
          {
            cats.map((cat)=>{
              <div key={cat.id}>
                <div className='column-left'>
                  {
                    <img src={cat.image.url} />
                  }
                </div>
                <div className='column-right'>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
