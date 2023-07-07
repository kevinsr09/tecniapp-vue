<script>
import MainHeader from './components/MainHeader.vue'
import MainAside from './components/MainAside.vue'
import CardItem from './components/CardItem.vue'

export default{
  name:"App",
  components:{
    MainHeader,
    MainAside,
    CardItem,
  }
}
</script>

<template>
  <MainHeader />
  <main class="main">
  
    <MainAside />
    <CardItem />

  </main>

  
    
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
  --second-bg-color: #444343;
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



ul{
  padding:0;
  margin:0;
}




.main{

  display: flex;
  
}
</style>
