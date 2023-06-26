<script>
export default{
  name:"Header"

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
    
    <div class="header-div logo">TecniApp</div>

    <div class="header-div search">
      <form action="" class="form-search">
        <input type="text" placeholder="  Cuentanos que te sucedio" class="form-search-text">
        <button type="submit" class="form-search-submit">b</button>
      </form> 
    </div>
    
    <div class="header-div login">login</div>
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
  font-size: clamp(1.2rem, 5vw, 2rem);
  justify-content: end;
  padding-right: 4rem;  
}

.logo{
  font-family: 'Carter One', sans-serif;
  font-size: clamp(1.2rem, 5vw, 2rem);
  justify-content: start;
  padding-left: 4rem;

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
  border-radius: 0.6rem;
  
}

.form-search-submit{
  width: 7%;
  height: 100%;
  background-color: var(--second-bg-color);
  border-radius: 0 0.5rem 0.5rem 0;
  transition: background-color 0.1s ease-in-out;
  border: none;
}
.form-search-text{
  width: 93%;
  height: 100%;
  display: block;
  background-color: var(--second-bg-color);
  border-radius: 0.5rem 0 0 0.5rem;
  transition: background-color 0.1s ease-in-out;
  border: none;
  font-size: clamp(1rem, 2vw, 1.5rem);
}
.form-search:hover {
  border: .2rem solid var(--second-bg-color)
}

.form-search:hover *{
  background-color: white;
}





</style>



