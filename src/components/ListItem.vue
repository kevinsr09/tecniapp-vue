<script>

import { data } from '../data/data.js'
import CardItem from './CardItem.vue'
import { categories } from '../data/categories'

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

    categories(){
      return categories()
    },

    listTecnicos(){
      return this.tecnicos.filter(tec => tec.category === this.$root.searchCategories)
    },


    viewTecnicos(){
      return this.listTecnicos.map(e => e.category = this.categories[`${this.$root.searchCategories}`]) 
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

  <CardItem v-for="tecnico of viewTecnicos" :key="tecnico.id" :name="tecnico.name" :category="tecnico.category" :id="tecnico.id" :img="tecnico.img"/> 

</template>



<style>

</style>