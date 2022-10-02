import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import FoundPage from './components/FoundPage'
import Location from './components/Location'
import PageCard from './components/PageCard'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  const [searchID, setSearchID] = useState('')
  const [location, setlocation] = useState()
  const [searchOnchange, setsearchOnchange] = useState()
  const [hasError, sethasError] = useState(false)
  const [page, setPage] = useState(1)
  const [amountPage, setAmountPage] = useState(8)
  const maxPage = Math.ceil(location?.residents.length/ amountPage) 


  useEffect(() => {
    let id = getRandomNumber()
    if (searchID) {
      id = searchID
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => {
        sethasError(false)
        setlocation(res.data)
      })
      .catch(err => sethasError(true))
  }, [searchID])

  const handlesSubmit = e => {
    e.preventDefault()
    setSearchID(e.target.locationID.value)
    e.target.reset()
  }
  const handleOnchange = e => {
    if (e.target.value === "") {
      return setsearchOnchange()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
    axios.get(URL)
      .then(res => setsearchOnchange(res.data.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='container_form'>
        <form className='form' onSubmit={handlesSubmit}>
          <input className='input'
            id='locationID'
            placeholder='What dimension do you want to visit?'
            type="text"
            onChange={handleOnchange} />
          <button data-text="Awesome" className="button">
            <span className="actual-text">&nbsp;Search&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;Search&nbsp;</span>
          </button>
          <div className='results_form'>
          <FilterList
            setSearchID={setSearchID}
            searchOnchange={searchOnchange}
          />
          </div>
        </form>
      </div>
      {
        hasError ?
          <FoundPage />
          :
          <div className='container_body_principal'>
            <Location location={location} />
            <div className='container_residents'>
              {
                location?.residents
                .slice((page-1)*amountPage,(page-1)*amountPage+amountPage)
                .map(resident => (
                  <CardResident
                    key={resident}
                    resident={resident}
                  />
                ))
              }
            </div>
              <PageCard 
              page={page} 
              setPage={setPage}
              maxPage={maxPage}
              />
          </div>

      }
    </div>
  )
}

export default App
