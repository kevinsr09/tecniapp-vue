
<script>

import { data } from '../data/data.js'
import CardItem from './CardItem.vue'

export default{

  name:'ListItem',
  
  components:{
  
    CardItem,
  },
  
  computed:{
    tecnicos(){
      return data()
      
    }
  },
  

}

</script>


<template>

  <CardItem :name="tecnicos[0].name" :category="tecnicos[0].category" :id="tecnicos[0].id" :img="tecnicos[0].img"/>
  

</template>



<style>

</style>