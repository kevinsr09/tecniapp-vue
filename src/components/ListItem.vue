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

  props:{
    categoryList:{
      type: String,
      default: 'all'
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
        return (this.categoryList == "all") 
        ? this.tecnicos 
        : this.tecnicos.filter(tec => tec.categoria == this.categoryList)
    },
  },

  methods:{
  },

}

</script>


<template>

  <CardItem v-for="tecnico of listTecnicos" :key="tecnico.id" :nombreTaller="tecnico.nombreTaller" :descripcion="tecnico.descripcion" :categoria="tecnico.categoria" :id="tecnico.id" :img="tecnico.img"/> 

</template>



<style>

</style>