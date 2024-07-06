<template>
    <div v-for="(user,index) in users" :key="index" > Nome: {{ user.name }}  
        <button @click="i=index" v-if="i === -1"> Mostrar Detalhes </button> 
        <div v-if="i === index"> 
        <DetailsViewA 
        :address="user.address" 
        :city="user.city" 
        :phone="user.phone" 
        :email="user.email"/> 
        <button @click="i = -1"> Esconder Detalhes </button>
        <button @click="exclude(String(user.id)), i=-1"> Excluir contato </button> 
        </div>
    </div>  
    </template>
    
    <script lang="ts">
    import { api } from '@/api/api';
    import { UserTypes } from '@/api/typesUser'
    import DetailsViewA from '../details/DetailsViewA.vue';

    export default {
        components:{
            DetailsViewA
        },
        data(){
            return{
                users: new Array<UserTypes>(),
                i : -1
            }
        },         
        mounted(){ 
            api
            .get("/users")
            .then(response => (this.users = response.data)) 
            .catch(err =>  console.log(err));            
        },
        methods:{
            exclude: function(id: string){
            api
            .delete("/users/"+id)
            .then(() => {
                    api
                    .get("/users")
                    .then(response => (this.users = response.data)) 
                    .catch(err =>  console.log(err))}
            )},
        }
    }
</script>

<style>

</style>

