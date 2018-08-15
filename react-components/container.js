import React, { Component } from 'react';
import { LikeComponent } from './like';
import { LikeService } from '../services/like-service';

export class ReactContainer extends Component {
  constructor(props) {
    super(props);
    this.likeService = new LikeService();
    this.state = {
      nbLikes: 0,
    }
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.updateLikeCount = this.updateLikeCount.bind(this);
  }

  componentDidMount() {
    this.updateLikeCount();
  }

  updateLikeCount() {
    this.likeService.getReactLikes()
      .then(res => {
        this.setState({
          nbLikes: res.data.length,
        })
      });
  }

  addLike() {
    return this.likeService.addReactLike(new Date().getTime())
      .then(res => {
        this.updateLikeCount();
        return res.data.id;
      });
  }

  removeLike(id) {
    this.likeService.deleteReactLike(id)
      .then(() => this.updateLikeCount());
  }

  render() {
    return (
      <div>
        <p>This is a react rendered container</p>
        <LikeComponent 
          nbLikes={this.state.nbLikes}
          addLike={this.addLike}
          removeLike={this.removeLike}
          >
        </LikeComponent>
      </div>
    )
  }
}