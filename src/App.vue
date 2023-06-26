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
