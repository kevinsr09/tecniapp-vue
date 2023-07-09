<script >

export default {
  name: 'CardItem',
  
  props:{

    id: {
      type: Number,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: true,
    }
  },
}

</script>


<template>

  <article >

    <picture class="item">
      
      <img :src="img" alt="Imagen del negocio">
    
    </picture>
    
    <div class="item info">
      <h3> {{ name }} </h3>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Modi assumenda tempore expedita.</p>
      <p><span>Categoria:</span> {{ category }}</p>

      <div class="contact">

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quod provident accusantium temporibus numquam voluptatibus libero qui 
          est, molestias ab suscipit rerum.
        </p>

      </div>
        
    </div>
    


  </article>

</template>


<style>

article{
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 250px;
  padding: 10px;
  gap: 20px;
  transition: box-shadow 0.3s ease;
  border-radius: 1rem;
  box-shadow: 1px 1px 1px #9a999950;
  /*border: 1px dashed #747474;*/
}

article:hover{
  box-shadow: 3px 3px 8px #9a999950;
}


h3{
  
  color:white;
}

img{
  width: 250px;
  height: 150px;
  display: block;
  border-radius: 1rem;
}

p{
  color:white;
}

picture{
  width: 30%;
  height: 100%;
  display: grid;
  place-content: center;

}




.info{
  color: white;
  width: 70%;
}



.info h3{
  font-size:1.2rem;
  margin-top:5px;
}

.info p{
  font-size: .8rem;;
}



.contact{


}

</style>