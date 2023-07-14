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
      searchCategories:"all",
    }
  },
  computed:{
  },

  methods:{
    setValues(category){
      this.searchCategories = category
    },
  },

}
</script>

<template>
  <MainHeader @getValues="setValues" />
  <main class="main">
    
      
      <MainAside />

      <section class="content">

        <ListItem :categoryList="searchCategories" />
                
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
  --bg-color: #26292C;
  --bg-color2:rgb(24, 22, 22);
  --bg-color3:#1D1E26;
  --bg-color4:#282A36;
  
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
  
  background-color: var(--bg-color);

}



ul{

  padding:0;
  margin:0;

}

.content{

  width: calc(100% - clamp(200px, 22vw,250px));
  height: calc(100vh - 70px);
  padding: 20px;

  overflow-y: scroll;

  display:flex;
  gap:20px;
  flex-wrap: wrap;

}


.main{

  display: flex;
  flex-wrap: wrap;

}

</style>
