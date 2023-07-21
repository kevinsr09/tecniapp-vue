<script>

import { data } from '../data/data.js'
import { dataFilter } from '../data/data_filter.js'

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
        : this.tecnicos.filter(tec => tec.categoria == this.categoryList).filter(tec => tec.categoria = this.categories[this.categoryList])
    },
    viewTecnicos(){
      return dataFilter(this.tecnicos, this.categoryList, this.categories)
    }
  },

  methods:{
  },

}

</script>


<template>
  <div>
    
    <CardItem v-for="tecnico of viewTecnicos" :key="tecnico.id" :nombreTaller="tecnico.nombreTaller" :descripcion="tecnico.descripcion" :categoria="tecnico.categoria" :id="tecnico.id" :img="tecnico.img"/> 

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