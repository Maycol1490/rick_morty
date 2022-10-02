import React from 'react'

const Location = ({location}) => {

  return (
    <div className='container_location'>
            <h2 className='location_name' >{location?.name}</h2>
        <article className='inf_location'>
            <ul className='location_ul'>
              <li className='location_li'>Type : <span>{location?.type}</span></li>
              <li className='location_li'>Dimension : <span>{location?.dimension}</span></li>
              <li className='location_li'>Population : <span>{location?.residents.length}</span></li>
            </ul>
        </article>
    </div>
  )
}

export default Location