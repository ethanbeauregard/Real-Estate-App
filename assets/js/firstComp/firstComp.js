import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  
  render () {
    return (<div><img src="http://www.horizontravelindia.com/wp-content/uploads/2017/10/DSC2702-Golden_Sunrise_Lho-Edit-Edit_v1.jpg" /></div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
