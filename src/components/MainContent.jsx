import React from 'react'
import './styles/mainContainer.css'
import ResidentCard from './ResidentCard'
import LocationInfo from './LocationInfo'

const MainContent = ({ location }) => {
  return (
    <div className='main__container'>
        <LocationInfo 
            location={location}
        />
        <div className='main__resident'>
            {
            location?.residents.map(url => (
                <ResidentCard 
                key={url}
                url={url}
                />
            ))
            }
        </div>
    </div>
  )
}

export default MainContent