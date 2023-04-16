import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {
    
  return (
    <article className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'><span className='location__item-name'>Type: </span><span className='location__item-result'>{location?.type}</span></li>
            <li className='location__item'><span className='location__item-name'>Dimension: </span><span className='location__item-result'>{location?.dimension}</span></li>
            <li className='location__item'><span className='location__item-name'>Population: </span><span className='location__item-result'>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo