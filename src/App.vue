<script>
import MainHeader from './components/MainHeader.vue'
import MainAside from './components/MainAside.vue'
import ListItem from './components/ListItem.vue'

export default{
  name:"App",
  components:{
    MainHeader,
    MainAside,
    ListItem,
  },
  data(){
    return{

    }
  },
  computed:{
    
  }
}
</script>

<template>
  <MainHeader />
  <main class="main">
    
      
      <MainAside />


      <section class="content">

        <ListItem></ListItem>
                
      </section>

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

.content{
  width: calc(100% - clamp(200px, 22vw,250px));
  height: calc(100vh - 70px);
  overflow-y: scroll;
}


.mainaside{
  width: 300px;
}


.main{

  display: flex;
  flex-wrap: wrap;
}
</style>
