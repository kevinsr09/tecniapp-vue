<script>

export default {
  name:'MainAside'
}
</script>

<template>

  <aside>

    <ul>

      <li class="aside-li-item"><a>1</a></li>
      <li class="aside-li-item"><a>2</a></li>
      <li class="aside-li-item"><a>3</a></li>
      <li class="aside-li-item"><a>4</a></li>
      <li class="aside-li-item"><a>5</a></li>
      <li class="aside-li-item"><a>6</a></li>
      <li class="aside-li-item"><a>7</a></li>
      <li class="aside-li-item"><a>8</a></li>
      <li class="aside-li-item"><a>9</a></li>
      <li class="aside-li-item"><a>1</a></li>
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
