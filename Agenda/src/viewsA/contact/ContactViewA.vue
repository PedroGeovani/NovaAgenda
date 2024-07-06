<template>
    <div v-for="(user,index) in users" :key="index"> Nome: {{ user.name }}
        <button @click="tet:'ene' => " :key="index"> Detalhes </button>
        <div> 
        <p> Endereço: {{ user.enderco }} </p>
        <p> Cidade: {{ user.cidade }} </p>
        <p> Telefone: {{ user.phone }} </p>
        <p> Email: {{ user.email }} </p>  
        <!--button @click="{id="0"}" :key="index" id='1'> Detalhes </button>
        <div v-if="optionClick[index]"> 
        <p> Endereço: {{ user.enderco }} </p>
        <p> Cidade: {{ user.cidade }} </p>
        <p> Telefone: {{ user.phone }} </p>
        <p> Email: {{ user.email }} </p-->      
        </div>
        tamanho = {{ tam() }}
    </div>
    </template>
    
    <script lang="ts">
    import { api } from '@/api/api';
    import { UserTypes } from '@/api/typesUser'
    export default {
        data(){
            return{
                users: new Array<UserTypes>(),
                optionClick : [] as boolean[],
                teste: '',
                cont : 0
            }
        },        
        mounted(){ 
            api
            .get("/users")
            .then(response => (this.users = response.data)) 
            .catch(err =>  console.log(err));
            
        },
        
        methods:{
            createState(){
                for(let i = 0 ; i < this.users.length; i++ ){ 
                    this.optionClick[i] = false
                    console.log('test = '+this.optionClick[i])
                }
            },

            inverter(index: number, opition: boolean): boolean {
                if(opition){
                    return false
                }else{
                    return true
                }
            }

           
        },
        watch: {
            teste(){this.cont +1}
        }
    }
    </script>

