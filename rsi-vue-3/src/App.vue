<template>
  <div id="app">
    <h1> Interpretation Player </h1>
   <InterpretationPlayer  sdkKey="32625e58-d7c8-40b8-8efd-26480678cb78" roomName="gnwa"  /> 
  </div>
</template>

<script>
/* eslint-disable */
import InterpretationPlayer from './components/interpretation-player.vue'

// ***** For demo testing only *****
export default {
  name: 'app',
  components: {
    InterpretationPlayer
  },
}
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
