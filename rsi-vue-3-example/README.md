# RSI Vue 3 example

## Project setup

* yarn install
* yarn start



```javascript
  <template>
    <div class="hello">
      <InterpretationPlayer  sdkKey="32625e58-d7c8-40b8-8efd-26480678cb78" roomName="gnwa"  /> 
      </div>
  </template>

  <script>

  export default {
    props: {
    },
  
  };
  </script>

  <style>
  @import 'https://akkadu-assets.s3.amazonaws.com/akkadu-rsi-widget/rsi-vanilla/1.0.14/interpretation-player.min.css';
  </style>
```