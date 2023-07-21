<script>

import { apiSend } from '../data/api_send'

export default{

  name:"MainHeader",

  data(){
    return {
      userProblem:"",
      searchCategories:"",
    }         
  },

  computed:{
    optionsSend(){
      return apiSend(this.userProblem)
    }
  },

  methods:{
    userCategories(){
      fetch('https://api.openai.com/v1/chat/completions', this.optionsSend)
        .then(res => res.json())
        .then(data => {this.$emit("getValues", data.choices[0].message.content);console.log(data.choices[0].message.content)})
    },

    updateCategories(){
     
    }
  },



}


</script>





<template>

  <header>
    
    <div class="header-div logo"><span>TecniApp</span></div>

    <div class="header-div search">
      
      <!--<form action="" @submit.prevent="updateCategories" class="form-search">-->
      
        <form action="" @submit.prevent="userCategories" class="form-search"> 
        <input type="text" v-model="userProblem" placeholder="Cuentanos que te sucedio" class="form-search-text">
        
        <button type="submit" class="form-search-submit">
          <img src="/svg/search.svg" alt="svg">
        </button>
      
      </form> 
    
    </div>
    
    <div class="header-div login">Login</div>
  </header>

</template>

<style scoped>
header{
  display: flex;
  width: 100%;
  height: 80px;
  color: white;
  font-size: 2rem;
  border-bottom: 1px dashed #747474;
}

.header-div{
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login{
  font-family: 'Carter One', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  justify-content: end;
  padding-right: 4rem;  
  
}

.logo{
  font-family: 'Carter One', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  justify-content: start;
  padding-left: 4rem;
}

.logo span{
  
  padding-left: .5rem;
  padding-right: .5rem;
  border-radius: .5rem;
  border: 2px solid var(--text-color);
  
  cursor:pointer;
  color: var(--text-color);
  transition: background-color .3s ease, border .3s ease, color .3s ease;
  
}

.logo span:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
  border: 2px dashed var(--bg-color);
}
.search{
  width: 50%;
  height: 100%;
}

.form-search{
  
  width: 80%;
  height: 55px;
  border-radius: 5px;
  border: 2px solid var(--text-color);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: border 2s ease;
  
}

.form-search-submit{
  width: 10%;
  height: 100%;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  

  color: white;
  background-color: var(--second-bg-color);
  border-radius: 0 5px 5px 0;
  transition: background-color 0.1s ease-in-out;

}

.form-search-submit img{

  display: block;
  width: clamp(1rem,60%, 3rem);
  height: auto;

}


.form-search-text{
  width: 90%;
  height: 100%;
  display: block;
  color: var(--text-color);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;

  background-color: var(--second-bg-color);
  border-radius: 5px 0 0 5px;
  transition: background-color 0.1s ease-in-out;
  border: none;
  font-size: clamp(.7rem, 5vw, 1rem);
  padding-left: 1rem;
  outline: none;
}



.form-search:hover{
  border: 2px dashed var(--text-color)
}
</style>


