<script>

import { data } from '../data/data.js'
import CardItem from './CardItem.vue'

export default{

  name:'ListItem',

  data(){
    return{
     
    }
  },
  
  components:{
    CardItem,
  },
  
  computed:{
    tecnicos(){
      return data()
    },

    listTecnicos(){
      return this.tecnicos.filter(tec => tec.category === this.$root.searchCategories)
    }
  },

  methods:{
    añadirData(){
      
    }
  },
  mounted(){
    console.log(this.$root.searchCategories)
    
  }

}

</script>


<template>

  <CardItem v-for="tecnico of listTecnicos" :key="tecnico.id" :name="tecnico.name" :category="tecnico.category" :id="tecnico.id" :img="tecnico.img"/> 

</template>



<style>

</style>