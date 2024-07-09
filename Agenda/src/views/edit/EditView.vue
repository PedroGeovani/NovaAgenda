<template>
  <div class="box">
    <p class="title"> Editar Contato </p>
    <div>
      <form id='name'>
        <label for="nome"> Nome: </label>
        <input class="enter" type="text" id="name" v-model="modifyUser.name">
      </form>

      <form id='address'>
        <label for="address"> Endereço: </label>
        <input class="enter" type="text" id="address" v-model="modifyUser.address">
      </form>

      <form id='city'>
        <label for="city"> Cidade: </label>
        <input class="enter" type="text" id="city" v-model="modifyUser.city">
      </form>

      <form id='phone'>
        <label for="phone"> Telefone: </label>
        <input class="enter" type="text" id="phone" v-model="modifyUser.phone">
      </form>

      <form id='email'>
        <label for="email"> Email: </label>
        <input class="enter" type="text" id="email" v-model="modifyUser.email">
      </form>

      <div class="position">
        <input class="button" type="submit" value="Salvar" @click="updateContact(databaseId, modifyUser)" />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { UserTypes } from '@/api/typesUser';


export default {
  data() {
    return {
      databaseId: `/${this.$route.params.id}`,
      modifyUser: new UserTypes,
    }
  },
  mounted() {
    this.getItemUser(this.databaseId);
  },
  computed: {
    service() {
      return new ContactService()
    }
  },
  methods: {
    clear: function (clearUser: UserTypes): UserTypes {
      clearUser.name = ''
      clearUser.address = ''
      clearUser.city = ''
      clearUser.phone = ''
      clearUser.email = ''
      //criar mensagem de edição com sucesso
      return clearUser
    },

    getItemUser(databaseId: string) {
      this.service.address.pipe().subscribe({ next: (response) => this.modifyUser = response })
      this.service.getContactBook(databaseId)
    },

    updateContact: function (databaseId: string, modifyUser: UserTypes) {
      this.service.putContactItem(databaseId, modifyUser)
    },
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
  color: rgb(45, 45, 248);
}

.title {
  display: inline-block;
  color: rgb(45, 45, 248);
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