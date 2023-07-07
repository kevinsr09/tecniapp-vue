<script >

import { data } from '../data/data.js'

export default {
  name: 'CardItem',
  data(){

    return{
      

    }
  },
  computed:{
    tecnicos(){
      return data()
      
    }
  },
  methods:{
    imprimir(){
      console.log(this.tecnicos[0].img)
    }
  }
}

</script>


<template>

  <article>
    <img :src="tecnicos[0].img" @click="imprimir" alt="">
    <h3> {{ tecnicos[0].name }} </h3>
    <p>{{ tecnicos[0].category }}</p>
  </article>

</template>


<style>

h3{

  color:white;
}

p{
  color:white;
}

</style>