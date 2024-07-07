<template>
    <div class="box"> 
        <div class="title"> {{ legends }}</div>            
        <div v-for="(user,index) in users" :key="index" > 
            <div class="name" v-if="i === -1"> Nome: {{ user.name }} </div>  
            <button class="buttonM" @click="i=index, legends='Detalhes do contato'" v-if="i === -1"> Mostrar Detalhes </button> 
            <div v-if="i === index"> 
                <div class="text">
                    <DetailsViewA 
                    :name="user.name"
                    :address="user.address" 
                    :city="user.city" 
                    :phone="user.phone" 
                    :email="user.email"/> 
                </div>
                <div> 
                    <button class="buttonE" @click="i = -1, legends='Lista de Contatos' "> Esconder Detalhes </button>
                    <button class="buttonE" @click="exclude(String(user.id)), i=-1, legends='Lista de Contatos'"> Excluir contato </button> 
                </div>
            </div>
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
                i : -1,
                legends :'Lista de Contatos'  
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

<style scoped>
.title{
  display: inline-block;
  color: rgb(45, 45, 248);
  font-size: 20px;
  font-weight: 600;  
  padding: 3px 30px;
  border-radius: 10px;
  margin: 20px 10px;
}
.buttonM{
  display: inline-block;
  background: rgb(90, 90, 255);
  color: white;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 3px;
  margin: 8px;
}
.buttonE{
  display: inline-block;
  background: rgb(90, 90, 255);
  color: white;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 3px;
  margin: 8px;
  justify-content:end;
  
}
.box{
  width: 60%;
  background: rgb(200, 200, 255);
  border-radius: 30px;
  margin: 15px 40px;
  padding: 30px;
}
.name{
  display: inline-block;
  width: 500px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(45, 45, 248);
}

.text{
  background: white;
  border-radius: 20px;
  padding: 20px;
  font-size: 18px;
  color: rgb(45, 45, 248);
}


</style>

