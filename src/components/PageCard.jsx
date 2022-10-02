import React from 'react'
import { useState } from 'react'

const PageCard = ({page,setPage,maxPage}) => {
    const [numberPage, setNumberPage] = useState(1)

    const nextPage=()=>{
        if(numberPage,page < maxPage){
            setNumberPage(numberPage+1)
            setPage(page+1)
        }

    }

    const prevPage=()=>{
        if(numberPage,page > 1){
            setNumberPage(numberPage-1)
            setPage(page-1)
        }
    }
  return (
    <div className='container_cardPage'>
        <button onClick={prevPage} className="btn_cardPage" >prev</button>
        <p className='number_cardPage'>{numberPage}</p>
        <span>De</span> 
        <p className='number_cardPage'>{maxPage}</p>
        <button onClick={nextPage} className="btn_cardPage" >next</button>

    </div>
  )
}

export default PageCard