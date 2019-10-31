<template>
  <div id="app">
    <TSDemo/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TSDemo from './components/TSDemo.vue';

@Component({
  components: {
    TSDemo,
  },
})
export default class App extends Vue {}

// export default {

// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
