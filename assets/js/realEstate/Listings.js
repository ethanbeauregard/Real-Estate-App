import React, { Component} from 'react'

export default class Listings extends Component {
 constructor () {
 	super()
   this.state = {
    name: 'Joe'
   }
  }

  render () {
   return (<section className="listings">
    <section className="search-area">
      <input type="text" name="search" />
    </section>
    <section className="sortby-area">
      <div>390 results found</div>
      <div className="sort-options">
        <select className="sortby" name="sortby">
          <options value="price-asc">Highest Price</options>
          <options value="price-dsc">Lowest Price</options>
        </select>
      </div>
    </section>
    <section className="listings-results">

    </section>
    <section className="pagination">

    </section>
   </section>)
  }
}
