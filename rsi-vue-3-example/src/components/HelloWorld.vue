<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <InterpretationPlayer  sdkKey="32625e58-d7c8-40b8-8efd-26480678cb78" roomName="gnwa"  /> 
     </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
   data: () => ({
    country: '',
    region: ''
  })
};
</script>

<style>
@import 'https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-widget/rsi-vanilla/1.0.14/interpretation-player.min.css';
</style>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
