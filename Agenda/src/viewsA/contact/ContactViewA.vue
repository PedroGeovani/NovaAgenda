<template>
    <div v-for="(user,i) in users" :key="i"> Nome: {{ user }}</div>
    </template>
    
    <script lang="ts">
    import { instance } from '@/api/api';
    import { UserTypes } from '@/api/typesUser'
    export default {
        data(){
            return{
                users: new Array<UserTypes>()
            }
        },
        mounted(){ 
            this.users = new instance("/users").getUsers<UserTypes>();                     
        }
    }
    
    </script>