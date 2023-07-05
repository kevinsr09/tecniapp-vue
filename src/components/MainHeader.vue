<script>
export default{
  name:"MainHeader",
  data(){
    return {
      search:"",
    }
  },
  methods:{
    alerta(){
      alert(this.search)

    }
  }

}


/*
 background-color: #444343;
  border-radius: 0.5rem;
  transition: background-color 0.1s ease-in-out;
  font-size: 1.5rem;
  align-items: center;
*/
</script>

<template>
  <header>
    
    <div class="header-div logo"><span>TecniApp</span></div>

    <div class="header-div search">
    
      <form action="" @submit.prevent="alerta" class="form-search">
        
        <input type="text" v-model="search" placeholder="Cuentanos que te sucedio" class="form-search-text">
        
        <button type="submit" class="form-search-submit">
          <img src="svg/search.svg" alt="svg">
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
  height: 70px;
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
  cursor:pointer;
  transition: text-shadow .15s ease-in-out;
}
.logo span:hover {
  text-shadow: 2px 2px greenyellow, -2px -2px  greenyellow;

}
.search{
  width: 50%;
  height: 100%;
}

.form-search{
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px dashed #747474;
  
}

.form-search-submit{
  width: 7%;
  height: 100%;
  color: white;
  background-color: var(--second-bg-color);
  border-radius: 0 5px 5px 0;
  transition: background-color 0.1s ease-in-out;
  border: none;
}

.form-search-submit img{
  width: 100%;
}


.form-search-text{
  width: 93%;
  height: 100%;
  display: block;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;

  background-color: var(--second-bg-color);
  border-radius: 5px 0 0 5px;
  transition: background-color 0.1s ease-in-out;
  border: none;
  font-size: clamp(.7rem, 5vw, 1rem);
  padding-left: 1rem;
}
.form-search:hover {
  border: 1px dashed greenyellow
}
</style>



