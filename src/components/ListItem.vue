<script>

import { dataFilter } from '../data/data_filter.js'
import CardItem from './CardItem.vue'

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

    listTecnicos(){
      return dataFilter(this.categoryList)
    },
  },


  methods:{
  },

}

</script>


<template>
  <div>
    
    <CardItem v-for="tecnico of listTecnicos" :key="tecnico.id" :nombreTaller="tecnico.nombreTaller" :descripcion="tecnico.descripcion" :categoria="tecnico.categoria" :id="tecnico.id" :img="tecnico.img"/> 

  </div>

</template>



<style scoped>

div{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>