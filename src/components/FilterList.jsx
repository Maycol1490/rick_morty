import React from 'react'

const FilterList = ({searchOnchange,setSearchID}) => {
const handleClick = id => setSearchID(id)

  return (
    <ul>
        {
            searchOnchange?.map(locations=>(
                <li onClick={()=>handleClick(locations.id)} 
                key={locations.id}>
                    {locations.name}
                </li>
            ))
        }
    </ul>
  )
}

export default FilterList