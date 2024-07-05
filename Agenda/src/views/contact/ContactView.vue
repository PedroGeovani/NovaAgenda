<template>
<div v-for="(user,i) in users" :key="i"> Nome: {{ user }}</div>
</template>

<script lang="ts">
import { InstanceApi } from '@/api/api';
import { url } from '@/api/address'
import { UserTypes } from '@/api/typesUser'
export default {
    data(){
        return{
            users: new Array<UserTypes>()
        }
    },
    mounted(){ 
        this.users = new InstanceApi(url,"/users").getUsers<UserTypes>();                     
    }
}

</script>
