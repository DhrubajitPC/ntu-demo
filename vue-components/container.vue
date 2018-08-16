<template>
  <div class="container">
    <h3>This is a vue container</h3>
    <like-component 
      :nbLikes="nbLikes" 
      :id="currentId" 
      @addLike="addLike" 
      @removeLike="removeLike">
    </like-component>
  </div>
</template>

<script>
import LikeComponent from './like.vue';
import { LikeService } from '../services/like-service.js';

export default {
  name: 'Container',
  components: {
    LikeComponent
  },
  mounted() {
    this.likeService = new LikeService();
    this.updateLikes();
  },
  data: function() {
    return {
      currentId: 0,
      nbLikes: 0,
      likeService: {}
    }
  },
  methods: {
    updateLikes() {
      this.likeService.getVueLikes()
      .then(res => {
        this.nbLikes = res.data.length;
      });
    },
    addLike() {
      this.likeService.addVueLike(new Date().getTime())
        .then(res => {
          this.currentId = res.data.id;
          this.updateLikes();
        })
    },
    removeLike(id) {
      this.likeService.deleteVueLike(id)
        .then(() => {
          this.updateLikes();
        });
    }
  }
}
</script>

<style scoped>
  .container {
    border: 1px dashed yellowgreen;
    margin: 10px 0;
    padding: 10px 20px;
  } 
  h3 {
    color: yellowgreen;
  }
</style>
