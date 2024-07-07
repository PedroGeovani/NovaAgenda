<template>
  <div class="box">
    <p class="title"> Adicionar Novo Contato </p>
    <div> 
      
        <form id='name'> 
          <label for="nome"> Nome: </label>
          <input class="enter" type="text" id="name" v-model="name" placeholder="Digite seu nome">
        </form> 

        <form id='address'> 
          <label for="address"> Endereço:  </label>
          <input class="enter"  type="text" id="address" v-model="address" placeholder="Digite seu endereço">
        </form>

        <form id='city'> 
          <label for="city"> Cidade:  </label>
          <input class="enter" type="text" id="city" v-model="city" placeholder="Digite sua cidade">
        </form>

        <form id='phone'> 
          <label for="phone"> Telefone:  </label>
          <input class="enter"  type="text" id="phone" v-model="phone" placeholder="Digite seu telefone">
        </form>
        
        <form id='email'> 
          <label for="email"> Email:  </label>
          <input class="enter" type="text" id="email" v-model="email" placeholder="Digite seu email">
        </form>
            
      <div class="position"> 
        <input class="button" type="submit" value="Descartar" @click="clear"/>  
        <input class="button" type="submit" value="Salvar"/>
      </div>
        
    </div>
  </div> 
</template>

<script lang="ts">
import { emit } from 'process';

export default {
  data(){
    return{
      name: '',
      address: '',
      city: '',
      phone:'',
      email:'',
    }
  },
  methods:{
    clear: function(){
      this.name = ''
      this.address = ''
      this.city = ''
      this.phone =''
      this.email ='' 
    },
  },
  emits:{
    
  } 

}
</script>
<style scoped>
form{
  margin: 8px 30px;
  font-size: 16px; 
}
label{
  display: inline-flex;
  width: 100px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(45, 45, 248);
}

.title{
  display: inline-block;
  color: rgb(45, 45, 248);
  font-size: 20px;
  font-weight: 600;  
  padding: 3px 30px;
  border-radius: 10px;
  margin-left: 10px;
}

.enter{
  width: 300px;
  font-size: 16px;
  border-radius: 8px;
  padding: 3px;
}

.button{
  display: inline-block;
  background: rgb(90, 90, 255);
  color: white;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 3px;
  margin: 8px
}
.position{
  display: flex;
  margin-right: 50px;
  justify-content: flex-end;  
}

.box{
  width: 500px;
  background: rgb(200, 200, 255);
  border-radius: 30px;
  margin: 15px 40px;
}
</style>