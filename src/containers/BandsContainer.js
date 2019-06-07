import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'http2';
//import QuoteForm from './containers/QuoteForm';
class BandsContainer extends Component {
  render() {
    return(
      <div>
        
        <BandInput addBand={this.props.manageBand}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: 'ADD_BAND', band }) });

export default connect(null, mapDispatchToProps ) (BandsContainer)
