// Write your code here
import {Component} from 'react'

import './index.css'

class PlanetItem extends Component {
  render() {
    const {planetsList} = this.props
    const {description, imageUrl, name} = planetsList
    return (
      <div className="planet-item-container">
        <h1 className="heading">PLANETS</h1>
        <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default PlanetItem
