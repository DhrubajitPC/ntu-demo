import React, { Component} from 'react';
import '../index.css';

export class LikeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      isLiked: false,
    }
    this.onLikeHandler = this.onLikeHandler.bind(this);
  }

  onLikeHandler() {
    if (!this.state.isLiked) {
      this.props.addLike()
        .then(id => {
          this.setState({
            id: id
          })
        })
    } else {
      this.props.removeLike(this.state.id)
    }
    this.setState((prevState, props) => ({
      isLiked: !prevState.isLiked
    }))
  }

  render() {
    return (
      <div>
       <button 
        className="LikeButton" 
        style={{
          color: this.state.isLiked ? 'blue' : 'black'
        }}
        onClick={this.onLikeHandler}>
          ❤ {this.props.nbLikes}
        </button>
      </div>
    )
  }
}