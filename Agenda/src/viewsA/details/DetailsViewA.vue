<script lang="ts">
export default {
      props:{
        name:String,
        address:String,
        city:String,
        phone:String,
        email:String,
      }     
}
</script>

<template>
  <div> 
    <div class="text"> <label> Nome: </label> {{ name }} </div>
    <div> <label> Endereço: </label> {{ address }} </div>
    <div> <label> Cidade: </label> {{ city}} </div>
    <div> <label> Telefone: </label> {{ phone}} </div>
    <div> <label> Email: </label>{{ email }} </div> 
  </div>
</template>

<style scoped>
.text{
  font-weight: bold;
}

label{
  display: inline-block;

  width: 200px;

}
</style>

