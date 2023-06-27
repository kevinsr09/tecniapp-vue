<script>
import Prueba from './components/Header.vue'
export default{
  name:"App",
  components:{
    Prueba,
  }
}
</script>

<template>
  <Prueba />
</template>

<style>

@font-face {
  font-family: 'Carter One';
  src: 
  url('fonts/CarterOne-Regular.woff2') format('woff2'),
  url('fonts/CarterOne-Regular.woff') format('woff'),
  url('fonts/CarterOne-Regular.ttf') format('truetype');
  font-display: swap;
}




:root{
  --second-bg-color: #303134;
}






html{
  box-sizing: border-box;
}

*,
*::before,
*::after{
  box-sizing: inherit;
}

body{
  padding: 0;
  margin: 0;
  background-color:rgb(24, 22, 22);
}

</style>
