<script>
export default {
  name:'MainAside'
}
</script>

<template>

  <aside>

    <ul>

      <li class="aside-li-item"><a>reparacion de televisores</a></li>
      <li class="aside-li-item"><a>reparacion de neveras</a></li>
      <li class="aside-li-item"><a>reparacion de estufas</a></li>
      <li class="aside-li-item"><a>reparacion de lavadoras</a></li>
      <li class="aside-li-item"><a>reparacion de computadores</a></li>
      <li class="aside-li-item"><a>reparacion de telefonos</a></li>
      <li class="aside-li-item"><a>accesorios para telefonos</a></li>
    </ul>


  </aside>

</template>


<style>

aside{
  width: clamp(200px, 22vw,250px);
  border-right: 1px dashed #747474;
  height: calc(100vh - 70px);
  overflow-y: scroll;

}

aside::-webkit-scrollbar{
  background-color: transparent;
  
}


ul{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.aside-li-item{
  display: block;
  width: 80%;
  margin: 10px 0;
}

.aside-li-item a{
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: white;
  cursor: pointer;
}
</style>
