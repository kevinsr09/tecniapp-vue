<script>
export default{
  name:"Header"

}
</script>

<template>
  <header>
    <div class="header-div logo">TecniApp</div>
    <div class="header-div search">
      <form action="" class="search-form">
        <input type="text" class="search-text">
        <input type="submit" class="search-submit">
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

.logo{
  justify-content: start;
  margin-left: 20px;
}
.search{
  width: 50%;
}

.search-form{
  width: 80%;
  height: 40px;
  background-color: #444343;
  border-radius: 0.5rem;
  transition: background-color 0.1s ease-in-out;
  font-size: 1.5rem;
  align-items: center;
}
.search-text{
  width: 90%;
  height: 95%;
  background-color: transparent;
  border-radius: 0.5rem;
  transition: background-color 0.1s ease-in-out;
  font-size: 1.5rem;
  border: none;

}
.search-form:hover{
  background-color: #f1ebeb;
}



</style>