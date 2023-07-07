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
      <p><span>Categoria:</span> {{ category }}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Modi assumenda tempore expedita. Asperiores veritatis qui suscipit 
        vero animi ea necessitatibus quibusdam nobis, sed, eum, fuga repudianda 
        aspernatur maxime voluptatum! Excepturi.</p>

    </div>
    
    <div class="item contact">

      <p>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quod provident accusantium temporibus numquam voluptatibus libero qui 
        est, molestias ab suscipit rerum, consequuntur iure fugit 
        vitae in? Atque commodi odio iure.
      
      </p>
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
  gap: 10px;
}


h3{
  
  color:white;
}

img{
  width: 250px;
  height: 150px;
  display: block;
}

p{
  color:white;
}

picture{
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;

}


.info{
  color: white;
}


.item{
  width: 100%;

}

.contact{


}

</style>