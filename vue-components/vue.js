import Vue from 'vue';
import Container from './container';

const app = new Vue({
  el: '#vueNode',
  components: { Container },
  template: '<Container />',
});