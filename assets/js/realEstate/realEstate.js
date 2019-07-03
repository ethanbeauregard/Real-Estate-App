import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'


class App extends Component {
 constructor () {
 	super()
   this.state = {
    name: 'Joe',
    listingsData,
    city: 'All',
    houseType: 'All',
    bedrooms: '0',
    min_price: 0,
    max_price: 999999,
    min_floor_space: 0,
    max_floor_space: 999999,
    Elevators: false,
    Finished_Basement: false,
    Gym: false,
    Swimming_Pool: false,
    Tennis_Court: false,
    filteredData: listingsData
   }
   this.change = this.change.bind(this)
   this.filteredData = this.filteredData.bind(this)
   this.populateForms = this.populateForms.bind(this)
  }

  change(event){
    var name = event.target.name
    var value =(event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.bedrooms >= this.state.bedrooms
    })

    if(this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if(this.state.houseType != "All") {
      newData = newData.filter((item) => {
        return item.houseType == this.state.houseType
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms() {
    //city
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    //houseType
    var houseType = this.state.listingsData.map((item) => {
      return item.houseType
    })
    houseTypes = new Set(houseTypes)
    houseTypes = [...houseTypes]

    //bedrooms
    var bedrooms = this.state.listingsData.map((item) => {
      return item.bedrooms
    })
    cities = new Set(cities)
  }

  render () {
   return (<div>
				<Header />
				<section id="content-area">
					<Filter change={this.change} globalState={this.state}/>
					<Listings listingsData={this.state.filteredData}/>
				</section>
			</div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
