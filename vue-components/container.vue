<template>
  <div class="container">
    <p>This is a vue container</p>
    <like :nbLikes="3"></like>
  </div>
</template>

<script>
import LikeComponent from './like';
export default {
  name: 'Container',
  components: {
    LikeComponent
  }
}
</script>

<style scoped>
  .container {
    border: 1px dashed yellowgreen;
    margin: 10px 0;
    padding: 10px 20px;
  }
</style>
