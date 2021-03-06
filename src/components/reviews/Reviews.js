import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let {reviews} = this.props.store.getState()
    reviews = reviews.filter(review => review.restaurantId == this.props.restaurantId)
    return (
      <ul>
        {reviews.map((review) => (
          <Review key={review.id} store={this.props.store} review={review}/>
        ))}
      </ul>
    );
  }
};

export default Reviews;
