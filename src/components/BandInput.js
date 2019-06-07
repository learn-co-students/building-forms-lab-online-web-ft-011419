// Add BandInput component
import React, { Component } from 'react'
//import manageBand from './reducers/manageBand';
class BandInput extends Component {
  state={
    name:""
  }

onSubmit = (event) => {
  event.preventDefault()
  console.log(this.state,"submitted")
   this.props.addBand(this.state)
    this.setState({ name: '' })
  };

 
  
 onChange = (event) => {
    this.setState({
    name: event.target.value
    })
   console.log(this.state)

  }

  render() {
   
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} type ="text" name= "name" value={this.state.name} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
export default BandInput

