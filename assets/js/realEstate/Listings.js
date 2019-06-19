import React, { Component} from 'react'
import listingsData from './data/listingsData';
import { url } from 'inspector';

export default class Listings extends Component {
 constructor () {
 	super()
   this.state = {
    name: 'Joe'
   }
   this.loopListing = this.loopListing.bind(this)
  }

  loopListing() {
    var {ListingsData} = this.props

    return listingsData.map((listing, index) => {
      return (<div className="col-md-3" key={index}>
      <div className="listing">
      <div className="listing-img">
        <span className="address">{listing.address}</span>
        <div className="details">
          <div className="col-md-3">
            <div className="user-img"></div>
          </div>
          <div className="col-md-9">
            <div className="user-details">
              <span className="user-name">Nina Smith</span>
              <span className="post-date">Posted on 05/09/2019</span>
            </div>
            <div className="listing-details">
              <div className="floor-space">
                <i className="far fa-square"></i>
                <span>1000 ft&sup2;</span>
              </div>
              <div className="bedrooms">
                <i className="fas fa-bed"></i>
                <span>{listing.bedrooms} bedrooms</span>
              </div>
              {/* <div className="furnished">
                <i className="fas fa-couch"></i>
                <span>unfurnished</span>
              </div>
              <div className="learnMore-link">
                <a href="#">Learn More</a>
              </div> */}
            </div>
            <div className="view-btn">
              View Listing
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-info">
        <span className="price">${listing.price}</span>
        <span className="location"><i className="fas fa-map-marker-alt"></i> {listing.city}, {listing.state}</span>
      </div>
    </div>
    </div>)
    })
  }

  render () {
   return (<section id="listings">
    <section className="search-area">
      <input type="text" name="search" placeholder="Short stay" />
    </section>
    <section className="sortby-area">
      <div className="results">390 results found</div>
      <div className="sort-options">
        <select className="sortby" name="sortby">
          <option value="price-asc">Highest Price</option>
          <option value="price-dsc">Lowest Price</option>
        </select>
        <div className="view">
          <i className="fas fa-list-ul" aria-hidden="true"></i>
          <i className="fas fa-th" aria-hidden="true"></i>
        </div>
      </div>
    </section>
    <section className="listings-results">
      {this.loopListing()}
    </section>
    <section id="pagination">
      <ul className="pages">
        <li>prev</li>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>next</li>        
      </ul>           
    </section>
   </section>)
  }
}
