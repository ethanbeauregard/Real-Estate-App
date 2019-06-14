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
     <select name="neighbourhood" className="filters neighbourhood">
      <option>Ridgewood</option>
     </select>
     <select name="housetype" className="filters housetype">
      <option>Ranch</option>
     </select>
     <select name="bedrooms" className="filters bedrooms">
      <option>2 BR</option>
     </select>
     <div className="filters price">
      <span className="title">Price</span>
      <input type="text" name="min-price" className="min-price" placeholder="min" />
      <input type="text" name="max-price" className="max-price" placeholder="max" />
     </div>
     <div className="filters floor-space">
      <span className="title">Floor Space</span>
      <input type="text" name="min-floor-space" className="min-floor-space" placeholder="min" />
      <input type="text" name="max-floor-space" className="max-floor-space" placeholder="max" />
     </div>
     <div className="filters extras">
       <span className="title">Facilities</span>
      <label for="extras">
       <span>Elevators</span>
       <input type="checkbox" value="swimming-pool" name="extras" checked="checked" />
      </label>
      <label for="extras">
       <span>Swimming Pool</span>
       <input type="checkbox" value="elevator" name="extras" checked="checked" />
      </label>
      <label for="extras">
       <span>Elevators</span>
       <input type="checkbox" value="Elevator" name="extras" checked="checked" />
      </label>
      <label for="extras">
       <span>Finished Basement</span>
       <input type="checkbox" value="finished-basement" name="extras" checked="checked" />
      </label>
      <label for="extras">
       <span>Gym</span>
       <input type="checkbox" value="gym" name="extras" checked="checked" />
      </label>
     </div>
    </div>
   </section>)
  }
}
