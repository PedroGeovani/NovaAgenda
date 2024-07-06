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
    <p> Endereço: {{ address }} </p>
    <p> Cidade: {{ city}} </p>
    <p> Telefone: {{ phone}} </p>
    <p> Email: {{ email }} </p> 
  </div>
</template>