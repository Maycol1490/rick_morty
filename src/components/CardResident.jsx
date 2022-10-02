import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CardResident = ({resident}) => {

    const [residents, setResidents] = useState()
    useEffect(() => {
        axios.get(resident)
        .then(res=> setResidents(res.data))
        .catch(err=> console.log(err))
    }, [])
    
  return (
    <article className='container_card'>
        <header className='card_header'>
            <img className='card_img' src={residents?.image} alt={residents?.name} />
            <div className='inf_card_status'>
                <div className={`circle_status ${residents?.status}`}>
                </div>
                <span className='card_status' >{residents?.status}</span>
            </div>
        </header>
        <section className='card_body' >
            <h3 className='card_name'>{residents?.name}</h3>
            <ul className='card_ul_inf'>
                <li className='card_span_li'>Specie : <span>{residents?.species}</span></li>
                <li className='card_span_li'>Origin : <span>{residents?.origin.name}</span></li>
                <li className='card_span_li'>Episodes where appears : <span>{residents?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default CardResident