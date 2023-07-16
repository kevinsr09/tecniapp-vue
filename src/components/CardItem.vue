<script >

export default {
  name: 'CardItem',
  
  props:{

    id: {
      type: Number,
      required: true,
    },

    nombreTaller: {
      type: String,
      required: true,
    },

    descripcion:{
      type: String,
      required : true,
    },

    categoria: {
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

    <picture class="item-picture">
      <img :src="img" class="picture-img" alt="Imagen del negocio">
    </picture>
    

    <div class="item-info">
    
      <h3> {{ nombreTaller }} </h3>
      <p class="description">{{ descripcion }}</p>
      <p><span>Categoria:</span> {{ categoria }}</p>
      <div class="contact">
        <p>Contactos: </p>
      </div>
        
    </div>
    


  </article>

</template>


<style scoped>

article{

  width: 100%;
  height: 250px;
  padding: 10px;
  border-radius: 1rem;
  overflow: hidden;

  background-color: #313232;
  box-shadow: 0px 0px 2px #9a999950;
  
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  
  transition: box-shadow 0.3s ease;
}

article:hover{

  box-shadow: 0px 0px 12px #9a999980;

}


/* estilos de la picture*/

.picture-img{

  width: 100;
  height: auto;

  border-radius: .8rem;

  display: block;

}


.item-picture{
  
  height: 95%;
  width: 35%;
  display: grid;
  place-content: center;
  
}


/* estilos para la iformacion */

.item-info{
  
  color:white;
  width: 60%;
  height: 95%;

}




.item-info h3{

  margin: 0;
  font-size:1.2rem;
  text-align: center;
  text-transform: capitalize;
  
  color: greenyellow;

}

.info p{

  font-size: .8rem;;

}

</style>