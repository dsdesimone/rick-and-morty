
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'
import { useRef, useState } from 'react'
import Header from './components/Header'
import BackgroundAnimation from './components/BackgroundAnimation'
import Loading from './components/Loading'

function App() {
   
  const [inputValue, setInputValue] = useState(getRandomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, hasError] = useFetch(url)
  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    // event.target.firstChild.value
    setInputValue(inputLocation.current.value)
  }
  
  return (
    <div className="App">
      {
        location
          ? <div className='loading__ok'>
              <BackgroundAnimation />
              <Header />
              <form className='app__form' onSubmit={handleSubmit}>
                <input className='app__input' ref={inputLocation} type="text" placeholder='Enter number from 1 to 126.' />
                <button className='app__btn'>Search</button>
              </form>
              {
                hasError
                  ? <h2>❌ Hey! You must search an id number from 1 to 126.</h2>
                  : <MainContent location={location}/>
              }
              <footer className='footer'>
                <h3 className='footer__h3'>Coded by @dsdesimone</h3>
              </footer>
            </div>
          : <Loading />
      }
      
    </div>
  )
}

export default App
