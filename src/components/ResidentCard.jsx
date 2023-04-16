import React from 'react'
import './styles/residentCard.css'
import useFetch from '../hooks/useFetch'

const ResidentCard = ({ url }) => {
    const [resident, hasError] = useFetch(url)

    return (
        <article className='resident'>
            <header className='resident__header'>
                <img className='resident__img' src={resident?.image} alt="" />
                <div className='resident__status'>
                    <div className={`resident__status-circle ${resident?.status}`}></div>
                    <span className='resident__status-status'>{resident?.status}</span>
                </div>
            </header>
            <section className='resident__section'>
                <h3 className='resident__name'>{resident?.name}</h3>
                <hr className='resident__hr'/>
                <ul className='resident__list'>
                    <li className='resident__item'><span className='resident__item-name'>Specie</span><span className='resident__item-data'>{resident?.species}</span></li>
                    <li className='resident__item'><span className='resident__item-name'>Origin</span><span className='resident__item-data'>{resident?.origin.name}</span></li>
                    <li className='resident__item'><span className='resident__item-name'>Eppisodes where appear</span><span className='resident__item-data'>{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard