import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  nextReview = () => {
    const {reviewsList} = this.props
    const {count} = this.state
    if (count < reviewsList.length - 1) {
      this.setState(prev => ({count: prev.count + 1}))
    }
  }

  previousReview = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prev => ({count: prev.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="bg-container">
        <button
          data-testid="leftArrow"
          type="button"
          onClick={this.previousReview}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div className="details">
          <h1>Reviews</h1>
          <img className="image" src={imgUrl} alt={username} />
          <p className="name">{username}</p>
          <p className="company">{companyName}</p>
          <p className="description">{description}</p>
        </div>
        <button
          data-testid="rightArrow"
          type="button"
          onClick={this.nextReview}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
