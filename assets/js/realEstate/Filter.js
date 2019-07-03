import React, { Component} from 'react'

export default class Filter extends Component {
 constructor () {
 	super()
   this.state = {
    name: 'Ethan'
   }
  }

  render () {
   return (<section id="filter">
    <div className="inside">
     <h4>Filter</h4>

     <label htmlFor="city">City:</label>
     <select name="city" className="filters city" onChange={this.props.change}>
      <option value="All">All</option>
      <option value="Ridgewood">Ridgewood</option>
      <option value="Tampa">Tampa</option>
      <option value="Syracuse">Syracuse</option>
     </select>

     <label htmlFor="houseType">Type of Home:</label>
     <select name="houseType" className="filters houseType" onChange={this.props.change}>
      <option value="All">All Homes</option>
      <option value="Ranch">Ranch</option>
      <option value="Studio">Studio</option>
      <option value="Room">Room</option>
      <option value="Apartment">Apartment</option>
     </select>

     <label htmlFor="bedrooms">Bedrooms:</label>
     <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
      <option value="0">0+ BR</option>
      <option value="1">1+ BR</option>
      <option value="2">2+ BR</option>
      <option value="3">3+ BR</option>
      <option value="4">4+ BR</option>
     </select>
     <div className="filters price">
      <span className="title">Price</span>
      <input type="text" name="min_price" className="min-price" placeholder="min" onChange={this.props.change} value={this.props.globalState.min_price}/>
      <input type="text" name="max_price" className="max-price" placeholder="max" onChange={this.props.change} value={this.props.globalState.max_price}/>
     </div>
     <div className="filters floor-space">
      <span className="title">Floor Space</span>
      <input type="text" name="min_floor_space" className="min-floor-space" placeholder="min" onChange={this.props.change} value={this.props.globalState.min_floor_price}/>
      <input type="text" name="max_floor_space" className="max-floor-space" placeholder="max" onChange={this.props.change} value={this.props.globalState.max_floor_price}/>
     </div>
     <div className="filters extras">
       <span className="title">Facilities</span>
      <label htmlFor="extras">
       <span>Elevators</span>
       <input type="checkbox" value="Elevators" name="Elevators" onChange={this.props.change}/>
      </label>
      <label htmlFor="extras">
       <span>Swimming_Pool</span>
       <input type="checkbox" value="Swimming Pool" name="Swimming Pool" onChange={this.props.change}/>
      </label>
      <label htmlFor="extras">
       <span>Tennis_Court</span>
       <input type="checkbox" value="Tennis Court" name="Tennis Court" onChange={this.props.change}/>
      </label>
      <label htmlFor="extras">
       <span>Finished_Basement</span>
       <input type="checkbox" value="Finished Basement" name="Finished Basement" onChange={this.props.change}/>
      </label>
      <label htmlFor="extras">
       <span>Gym</span>
       <input type="checkbox" value="Gym" name="Gym" onChange={this.props.change}/>
      </label>
     </div>
    </div>
   </section>)
  }
}
