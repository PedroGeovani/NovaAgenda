<template>
<div v-for="(user,i) in users" :key="i"> Nome: {{ user }}</div>
</template>

<script lang="ts">
import { InstanceApi } from '@/api/intance';
import { url } from '@/api/address'
import { UserTypes } from '@/api/typesUser'
export default {
    data(){
        return{
            users: new Array<UserTypes>()
        }
    },
    setup(){ 
        this.users = new InstanceApi(url,"/users").getUsers<UserTypes>();                     
    }
}

</script>
