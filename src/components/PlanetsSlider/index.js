// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem planetsList={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
