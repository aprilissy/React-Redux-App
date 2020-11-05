import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchBerries} from '../store/actions'

const BerriesList = (props) => {
  useEffect(()=>{
    props.fetchBerries()
  }, [])
  console.log('berries',props.berries);
  

  return (
    <div className='berries'>
      {props.isLoading ? <p>Loading Berries Info...</p> : null}
      {props.error ? <p>{props.error}</p> : null}
      {props.berries.map((berry) => {
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