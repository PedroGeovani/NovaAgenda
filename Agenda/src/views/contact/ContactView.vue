<template>
    <p v-for="use in nameUser" : Key="use"> {{ use }}</p>
</template>

<script lang="ts">
import { UserTypes } from '@/api/typesUser';
import list from '@/api/rxjs'


export default {
    name: "App",
    data() {
        return {
            nameUser: new Array<UserTypes>,
        }
    },
    mounted() {
        const teste = list.get<UserTypes>("/users", undefined, "/api", "json", "6679b7a718a459f639512c41")
            .pipe().subscribe({ next: (response) => response });
        this.nameUser = teste

    }

}
</script>
