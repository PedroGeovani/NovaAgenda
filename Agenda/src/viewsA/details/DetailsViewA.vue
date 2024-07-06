<script lang="ts">
import { api } from '@/api/api';
import { UserTypes } from '@/api/typesUser'
export default {
      data(){
            return{
              item: {} as UserTypes              
            }
        }, 
      mounted(){
        console.log("parametros: "+this.$route.params)
        /*api
        .get("/users/"+this.$route.params)
        .then(response => (this.item = response.data)) 
        .catch(err =>  console.log(err)); */       
        },        
      methods:{
            excludeitem(id:string){
                api.delete('/users/'+id)
                .then(response => (this.item = response.data))
            },             
            returnView(){
              this.$route.path='/ContactsA'
            }          
        }
}
</script>

<template>
  <div>
    <router-link :to="{path: '/EditContactViewA:id', params:item.id}"> Editar Contato</router-link>
    <p> Name: {{ item.name}} </p>
    <p> Endereço: {{ item.address }} </p>
    <p> Cidade: {{ item.city}} </p>
    <p> Telefone: {{ item.phone}} </p>
    <p> Email: {{ item.email }} </p> 
    <button @click="excludeitem(String(item.id)), returnView()">Excluir Contato</button>
  </div>
</template>