<template>
  <div class="box">
    <p class="title"> Adicionar Novo Contato </p>
    <div>

      <form id='name'>
        <label for="nome"> Nome: </label>
        <input class="enter" type="text" id="name" v-model="addUser.name" placeholder="Digite seu nome">
      </form>

      <form id='address'>
        <label for="address"> Endereço: </label>
        <input class="enter" type="text" id="address" v-model="addUser.address" placeholder="Digite seu endereço">
      </form>

      <form id='city'>
        <label for="city"> Cidade: </label>
        <input class="enter" type="text" id="city" v-model="addUser.city" placeholder="Digite sua cidade">
      </form>

      <form id='phone'>
        <label for="phone"> Telefone: </label>
        <input class="enter" type="text" id="phone" v-model="addUser.phone" placeholder="Digite seu telefone">
      </form>

      <form id='email'>
        <label for="email"> Email: </label>
        <input class="enter" type="text" id="email" v-model="addUser.email" placeholder="Digite seu email">
      </form>

      <div class="position">
        <input class="button" type="submit" value="Descartar" @click="addUser = clear(addUser)" />
        <input class="button" type="submit" value="Salvar" @click="newContact(addUser)" />

      </div>

    </div>
  </div>
</template>






<script lang="ts">
import { api } from '@/api/api';
import { UserTypes } from '@/api/typesUser';



export default {
  data() {
    return {
      addUser: new UserTypes,
    }
  },
  methods: {
    clear: function (addUser: UserTypes): UserTypes {
      addUser.name = ''
      addUser.address = ''
      addUser.city = ''
      addUser.phone = ''
      addUser.email = ''
      return addUser
    },

    newContact: function (addUser: UserTypes) {
      api
        .post("/", {
          name: addUser.name,
          address: addUser.address,
          city: addUser.city,
          phone: addUser.phone,
          email: addUser.email,
        }).then(() => { this.addUser = this.clear(addUser) })
    }
  }
}
</script>


<style scoped>
form {
  margin: 8px 30px;
  font-size: 16px;
}

label {
  display: inline-flex;
  width: 100px;
  font-size: 18px;
  font-weight: bold;

  color: rgb(30, 30, 248);

  color: rgb(45, 45, 248);

}

.title {
  display: inline-block;
  color: rgb(30, 30, 248);
  font-size: 20px;
  font-weight: 600;
  padding: 3px 30px;
  border-radius: 10px;
  margin-left: 10px;
}

.enter {
  width: 300px;
  font-size: 16px;
  border-radius: 8px;
  padding: 3px;
}

.button {
  display: inline-block;
  background: rgb(30, 30, 255);
  color: white;
  width: 200px;

  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  padding: 3px;
  margin: 8px
}

.position {
  display: flex;
  margin-right: 50px;
  justify-content: flex-end;
}

.box {
  width: 500px;
  background: rgb(200, 200, 255);
  border-radius: 30px;
  margin: 15px 40px;
}
</style>