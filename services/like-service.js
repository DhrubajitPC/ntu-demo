import axios from 'axios';

export class LikeService {
  constructor() {
    this.baseUrl = '/api';
  }

  getReactLikes() {
    return axios.get(`${this.baseUrl}/react`);
  }

  getVueLikes() {
    return axios.get(`${this.baseUrl}/vue`);
  }

  addReactLike(timestamp) {
    return axios.post(`${this.baseUrl}/react`, {timestamp: timestamp});
  }
  
  addVueLike(timestamp) {
    return axios.post(`${this.baseUrl}/vue`, {timestamp: timestamp});
  }
  
  deleteReactLike(id) {
    return axios.delete(`${this.baseUrl}/react/${id}`);
  }

  deleteVueLike(id) {
    return axios.delete(`${this.baseUrl}/vue/${id}`);
  }
}