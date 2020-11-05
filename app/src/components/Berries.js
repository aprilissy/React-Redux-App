import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchBerries} from '../store/actions'

const BerriesList = (props) => {
  useEffect(()=>{
    props.fetchBerries()
  }, [])
  console.log('berries',props.berries);
  
  const copy = [...props.berries]
  const alphBerries = (a,b) => {
    const berryA = a.name.toUpperCase()
    const berryB = b.name.toUpperCase()
    let comparison = 0
    if (berryA > berryB) {
      comparison = 1
    } else if (berryA < berryB) {
      comparison = -1
    }
    return comparison 
  }
  copy.sort(alphBerries)
  console.log('copy',copy);
  

  return (
    <div className='berries'>
      {props.isLoading ? <p>Loading Berries Info...</p> : null}
      {props.error ? <p>{props.error}</p> : null}
      {copy.map((berry) => {
        return(
        <div>
          <h3 className='berry'>{berry.name}</h3>
        </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    berries: state.berriesData,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchBerries})(BerriesList)