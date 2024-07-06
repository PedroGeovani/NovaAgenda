<template>
    <div v-for="(user,index) in users" :key="index"> Nome: {{ user.name }}
        <router-link :to="{path:'/DetailsContactA/'+user.id, params:user.id}"> Detalhes </router-link>
    </div>
    </template>
    
    <script lang="ts">
    import { api } from '@/api/api';
    import { UserTypes } from '@/api/typesUser'
    export default {
        data(){
            return{
                users: new Array<UserTypes>(),
            }
        }, 
        mounted(){ 
            api
            .get("/users")
            .then(response => (this.users = response.data)) 
            .catch(err =>  console.log(err));            
        }
    }
    </script>

    <style>
   
    </style>

